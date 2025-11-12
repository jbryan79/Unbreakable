        // EXTENSION SECURITY: Enforce offline mode
        (function enforceOfflineMode() {
            'use strict';
            
            // Block XMLHttpRequest
            const originalXHR = window.XMLHttpRequest;
            window.XMLHttpRequest = function() {
                console.error('🔒 Network request blocked by Unbreakable');
                throw new Error('Network requests are disabled in Unbreakable');
            };
            
            // Block Fetch API
            const originalFetch = window.fetch;
            window.fetch = function() {
                console.error('🔒 Network request blocked by Unbreakable');
                return Promise.reject(new Error('Network requests are disabled in Unbreakable'));
            };
            
            // Block WebSocket
            const originalWebSocket = window.WebSocket;
            window.WebSocket = function() {
                console.error('🔒 Network request blocked by Unbreakable');
                throw new Error('WebSocket connections are disabled in Unbreakable');
            };
            
            console.log('%c🔒 UNBREAKABLE OFFLINE MODE ACTIVE', 
                'background: #27ae60; color: white; font-size: 14px; padding: 8px; font-weight: bold;');
            console.log('%cThis extension makes ZERO network requests.', 
                'font-size: 12px; color: #27ae60;');
            console.log('%cAll password generation happens on YOUR device only.', 
                'font-size: 11px; color: #666;');
        })();

        // Password Generation Logic with Rejection Sampling (eliminates modulo bias)
        const generateBtn = document.getElementById('generateBtn');
        const copyBtn = document.getElementById('copyBtn');
        const passwordOutput = document.getElementById('passwordOutput');
        const passwordLength = document.getElementById('passwordLength');
        const passwordLengthNum = document.getElementById('passwordLengthNum');
        const includeUppercase = document.getElementById('includeUppercase');
        const includeLowercase = document.getElementById('includeLowercase');
        const includeNumbers = document.getElementById('includeNumbers');
        const includeSymbols = document.getElementById('includeSymbols');
        const entropyDisplay = document.getElementById('entropyDisplay');
        const entropyValue = document.getElementById('entropyValue');
        const crackTime = document.getElementById('crackTime');
        const copyNotification = document.getElementById('copyNotification');
        const checkboxGroup = document.getElementById('checkboxGroup');

        // Sync slider and number input
        passwordLength.addEventListener('input', (e) => {
            passwordLengthNum.value = e.target.value;
        });

        passwordLengthNum.addEventListener('input', (e) => {
            passwordLength.value = e.target.value;
        });

        // Character sets
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        // Validate character selection
        function validateCharsetSelection() {
            const anyChecked = includeUppercase.checked || 
                               includeLowercase.checked || 
                               includeNumbers.checked || 
                               includeSymbols.checked;
            
            if (!anyChecked) {
                checkboxGroup.classList.add('error');
                return false;
            }
            
            checkboxGroup.classList.remove('error');
            return true;
        }

        // Remove error state when user checks a box
        [includeUppercase, includeLowercase, includeNumbers, includeSymbols].forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    checkboxGroup.classList.remove('error');
                }
            });
        });

        // Generate cryptographically secure password with rejection sampling
        function generatePassword() {
            const length = parseInt(passwordLength.value);
            let charset = '';

            if (includeUppercase.checked) charset += uppercase;
            if (includeLowercase.checked) charset += lowercase;
            if (includeNumbers.checked) charset += numbers;
            if (includeSymbols.checked) charset += symbols;

            if (charset.length === 0) {
                return null;
            }

            // Use rejection sampling to eliminate modulo bias
            let password = '';
            const maxValid = Math.floor(256 / charset.length) * charset.length;
            
            for (let i = 0; i < length; i++) {
                let randomValue;
                do {
                    const randomArray = new Uint8Array(1);
                    window.crypto.getRandomValues(randomArray);
                    randomValue = randomArray[0];
                } while (randomValue >= maxValid); // Reject biased values
                
                password += charset[randomValue % charset.length];
            }

            return password;
        }

        // Calculate entropy and crack time (worst-case, not average)
        function calculateEntropy(password, charsetSize) {
            const length = password.length;
            const entropy = length * Math.log2(charsetSize);
            
            // Assume 100 billion attempts per second (modern GPUs)
            const attemptsPerSecond = 100e9;
            const totalCombinations = Math.pow(charsetSize, length);
            const secondsToCrack = totalCombinations / attemptsPerSecond; // Worst case, not average
            
            return {
                entropy: Math.round(entropy),
                time: formatCrackTime(secondsToCrack)
            };
        }

        function formatCrackTime(seconds) {
            const minute = 60;
            const hour = minute * 60;
            const day = hour * 24;
            const year = day * 365.25;
            const millennium = year * 1000;
            const million_years = year * 1e6;
            const billion_years = year * 1e9;
            const trillion_years = year * 1e12;

            if (seconds < minute) return 'Instant';
            if (seconds < hour) return `${Math.round(seconds / minute)} minutes`;
            if (seconds < day) return `${Math.round(seconds / hour)} hours`;
            if (seconds < year) return `${Math.round(seconds / day)} days`;
            if (seconds < millennium) return `${Math.round(seconds / year)} years`;
            if (seconds < million_years) return `${Math.round(seconds / millennium)} thousand years`;
            if (seconds < billion_years) return `${(seconds / million_years).toFixed(1)} million years`;
            if (seconds < trillion_years) return `${(seconds / billion_years).toFixed(1)} billion years`;
            return `${(seconds / trillion_years).toFixed(1)} trillion years`;
        }

        // Generate button click
        generateBtn.addEventListener('click', () => {
            if (!validateCharsetSelection()) {
                alert('Please select at least one character type!');
                return;
            }

            const password = generatePassword();
            
            if (password) {
                passwordOutput.textContent = password;
                passwordOutput.classList.remove('empty');
                copyBtn.disabled = false;

                // Calculate charset size
                let charsetSize = 0;
                if (includeUppercase.checked) charsetSize += 26;
                if (includeLowercase.checked) charsetSize += 26;
                if (includeNumbers.checked) charsetSize += 10;
                if (includeSymbols.checked) charsetSize += 32;

                const stats = calculateEntropy(password, charsetSize);
                entropyValue.textContent = stats.entropy;
                crackTime.textContent = `Would take ${stats.time} to crack`;
                entropyDisplay.style.display = 'block';
            }
        });

        // Copy button click
        copyBtn.addEventListener('click', async () => {
            const password = passwordOutput.textContent;
            
            try {
                await navigator.clipboard.writeText(password);
                
                // Show notification
                copyNotification.classList.add('show');
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = password;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                copyNotification.classList.add('show');
                setTimeout(() => {
                    copyNotification.classList.remove('show');
                }, 2000);
            }
        });

        // Keyboard shortcut: Ctrl/Cmd + G to generate
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
                e.preventDefault();
                generateBtn.click();
            }
        });

        // Auto-generate on page load
        window.addEventListener('load', () => {
            generateBtn.click();
        });

        // Trust Badge Component Logic
        (function() {
            'use strict';

            // Elements
            const trustBadgeFixed = document.getElementById('trustBadgeFixed');
            const trustModal = document.getElementById('trustModal');
            const closeModal = document.getElementById('closeModal');
            const requestCounterFixed = document.getElementById('requestCounterFixed');
            const modalRequestCounter = document.getElementById('modalRequestCounter');

            // Network request counter
            let networkRequestCount = 0;

            // Monitor network requests using Performance API
            function monitorNetworkRequests() {
                const perfEntries = performance.getEntriesByType('resource');
                
                // Filter out only actual network requests (not data URIs, blobs, etc.)
                // Exclude the initial navigation (page load)
                const actualRequests = perfEntries.filter(entry => {
                    return (entry.name.startsWith('http://') || entry.name.startsWith('https://')) &&
                           entry.initiatorType !== 'navigation';
                });

                networkRequestCount = actualRequests.length;
                
                // Update displays
                requestCounterFixed.textContent = `${networkRequestCount} Request${networkRequestCount !== 1 ? 's' : ''}`;
                modalRequestCounter.textContent = networkRequestCount;
                
                // Update badge color based on requests
                if (networkRequestCount > 0) {
                    trustBadgeFixed.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
                    trustBadgeFixed.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.4)';
                }
            }

            // Initial check
            monitorNetworkRequests();

            // Monitor every 2 seconds
            setInterval(monitorNetworkRequests, 2000);

            // Open modal on badge click
            function openTrustModal() {
                trustModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                monitorNetworkRequests(); // Update count when opening
                trapFocus(document.querySelector('.trust-modal-content'));
                closeModal.focus(); // Set initial focus to close button
            }

            trustBadgeFixed.addEventListener('click', openTrustModal);
            
            // Allow keyboard activation of trust badge
            trustBadgeFixed.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openTrustModal();
                }
            });

            // Close modal
            function closeTrustModal() {
                trustModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                trustBadgeFixed.focus(); // Return focus to badge
            }

            closeModal.addEventListener('click', closeTrustModal);

            // Close on outside click
            trustModal.addEventListener('click', (e) => {
                if (e.target === trustModal) {
                    closeTrustModal();
                }
            });

            // Close on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && trustModal.classList.contains('active')) {
                    closeTrustModal();
                }
            });

            // Trap focus within modal for accessibility
            function trapFocus(element) {
                const focusableElements = element.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                element.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {
                        if (e.shiftKey && document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        } else if (!e.shiftKey && document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                });
            }

            // Log to console for extra verification
            console.log('%c🔒 UNBREAKABLE PRIVACY CHECK', 'background: #27ae60; color: white; font-size: 16px; padding: 10px; font-weight: bold;');
            console.log('%cThis password generator makes ZERO network requests after page load.', 'font-size: 14px; color: #27ae60;');
            console.log('%cYou can verify this by checking the Network tab in DevTools.', 'font-size: 12px; color: #666;');
            console.log('%cAll password generation happens on YOUR device only.', 'font-size: 12px; color: #666;');
            console.log('%cUsing rejection sampling to eliminate modulo bias.', 'font-size: 12px; color: #666;');
            
        })();

        // EXTENSION SECURITY: Clear password from memory when popup closes
        window.addEventListener('beforeunload', () => {
            if (passwordOutput) {
                passwordOutput.textContent = '';
            }
            // Force garbage collection hint (not guaranteed but helps)
            if (window.gc) window.gc();
        });

        // EXTENSION SECURITY: Clear on visibility change (when popup hidden)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Optional: clear password when popup loses focus
                // Uncomment if you want this behavior:
                // if (passwordOutput && !passwordOutput.classList.contains('empty')) {
                //     passwordOutput.textContent = 'Click "Generate Password" to begin';
                //     passwordOutput.classList.add('empty');
                //     copyBtn.disabled = true;
                //     entropyDisplay.style.display = 'none';
                // }
            }
        });

        // Open options page when clicking "View Full Documentation"
        const openOptionsLink = document.getElementById('openOptions');
        if (openOptionsLink) {
            openOptionsLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (chrome && chrome.runtime && chrome.runtime.openOptionsPage) {
                    chrome.runtime.openOptionsPage();
                } else {
                    window.open(chrome.runtime.getURL('options.html'));
                }
            });
        }
