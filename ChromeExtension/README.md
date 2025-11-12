# Unbreakable Chrome Extension

Chrome extension for generating cryptographically secure passwords offline with zero network requests.

## 🚀 Installation

### From Chrome Web Store (Coming Soon)
**One-click install from Chrome Web Store** - *Submission in progress*

Once approved, you'll be able to install with a single click!

### Manual Installation (For Now)

1. **Download or clone** the main repository:
```bash
   git clone https://github.com/jbryan79/Unbreakable.git
```
   
   Or download as ZIP: [Download Unbreakable](https://github.com/jbryan79/Unbreakable/archive/refs/heads/main.zip)

2. **Open Chrome Extensions page:**
   - Open Chrome
   - Navigate to `chrome://extensions/`
   - Or: Menu (⋮) → Extensions → Manage Extensions

3. **Enable Developer Mode:**
   - Toggle the **"Developer mode"** switch in the top-right corner

4. **Load the extension:**
   - Click **"Load unpacked"** button
   - Navigate to and select the `ChromeExtension` folder
   - (It's inside the Unbreakable folder you downloaded)

5. **Done!**
   - The Unbreakable icon (🔒) will appear in your Chrome toolbar
   - Click it to start generating passwords!

## 💡 Usage

1. Click the Unbreakable icon in your Chrome toolbar
2. Adjust password length (8-64 characters)
3. Select character types (uppercase, lowercase, numbers, symbols)
4. Click **"Generate Password"**
5. Click **"Copy to Clipboard"**
6. Paste into your account

**Keyboard shortcut:** `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)

## ✨ Features

- ✅ **100% Offline** - No internet connection required
- ✅ **Zero Network Requests** - Provably verifiable privacy
- ✅ **Cryptographically Secure** - Uses Web Crypto API
- ✅ **No Data Collection** - Nothing logged, tracked, or stored
- ✅ **No Analytics** - Zero tracking of any kind
- ✅ **Open Source** - Fully auditable code (MIT License)
- ✅ **Keyboard Shortcut** - Quick access with Ctrl+Shift+P
- ✅ **Entropy Display** - See password strength in bits
- ✅ **Crack Time Estimate** - Know how secure your password is

## 🔐 Privacy

This extension makes **ZERO network requests**. All password generation happens locally in your browser.

### Verify For Yourself:

1. Open Chrome DevTools (`F12`)
2. Go to the **Network** tab
3. Generate 10, 50, or 100 passwords
4. Observe: **Zero network requests**

### What We DON'T Collect:

- ❌ Generated passwords (never stored)
- ❌ Personal information
- ❌ Usage statistics
- ❌ Analytics data
- ❌ Browsing history
- ❌ Any other data

### What We Store Locally (Optional):

- Your password length preference
- Your character type selections (uppercase, lowercase, numbers, symbols)

**This data:**
- Never leaves your device
- Can be cleared by removing the extension
- Stored using Chrome's local storage (no passwords ever stored)

Full privacy policy: [PRIVACY-POLICY.md](../PRIVACY-POLICY.md)

## 📁 Extension Files
```
ChromeExtension/
├── manifest.json       Extension configuration (Manifest V3)
├── popup.html          Extension user interface
├── popup.js            Password generation logic
├── background.js       Background service worker
├── options.html        Extension options page
├── lock16.png          16x16 icon
├── lock48.png          48x48 icon
└── lock128.png         128x128 icon
```

## 🛠️ Technical Details

### Security Implementation

- **Cryptographic Randomness:** Uses `window.crypto.getRandomValues()` for true randomness
- **No Modulo Bias:** Implements rejection sampling for uniform distribution
- **No Math.random():** Never uses predictable pseudo-random generation
- **Zero Dependencies:** Completely self-contained, no external libraries

### Manifest V3

This extension uses Manifest V3 (the latest Chrome extension standard):
- Service worker instead of background pages
- Improved security and performance
- Future-proof architecture

### Browser Compatibility

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Brave (Chromium-based)
- ✅ Opera (Chromium-based)
- ✅ Any Chromium-based browser

## 🔗 Related

- **Main Repository:** [Unbreakable](https://github.com/jbryan79/Unbreakable)
- **Web App:** Use `index.html` in the root directory
- **Windows Installer:** [Download from Releases](https://github.com/jbryan79/Unbreakable/releases)
- **Privacy Policy:** [PRIVACY-POLICY.md](../PRIVACY-POLICY.md)

## 📜 License

MIT License - See [LICENSE](../LICENSE) file for details.

**TL;DR:** Use it, modify it, distribute it. Keep the copyright notice.

## 💬 Support

- **Report Issues:** [GitHub Issues](https://github.com/jbryan79/Unbreakable/issues)
- **Request Features:** [GitHub Issues](https://github.com/jbryan79/Unbreakable/issues)
- **Email:** jamesbryan@gmail.com
- **Developer:** [jamesabryan.com](https://jamesabryan.com)

## ⭐ Contributing

Found a bug? Have a feature request? Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 🎯 Why Use Unbreakable?

**Most password generators run online. That's a problem.**

When you use online password generators:
- ❌ Your passwords travel across the internet
- ❌ Servers can log what you generate
- ❌ You're trusting someone else with your security
- ❌ Man-in-the-middle attacks are possible

**Unbreakable is different:**
- ✅ 100% offline - works without internet
- ✅ Zero network requests - provably verifiable
- ✅ No servers - nothing to hack
- ✅ Open source - fully auditable
- ✅ No trust required - verify everything yourself

---

**Built with privacy in mind. Always.**

Version 3.0 | MIT License | Open Source
```

**Commit message:** `Add ChromeExtension README`

**Click:** "Commit changes"

---

## ✅ **Done! Your READMEs are Updated!**

Your repository now has:
```
✅ Main README.md (updated with extension info)
✅ ChromeExtension/README.md (complete installation guide)
✅ PRIVACY-POLICY.md (for Chrome Web Store)
✅ Complete file structure
