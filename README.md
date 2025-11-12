# 🔒 Unbreakable Password Generator

**Your passwords. Your device. Nobody else.**

![Version](https://img.shields.io/badge/version-3.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Privacy](https://img.shields.io/badge/privacy-100%25%20offline-success)

100% offline password generator. Zero network requests. Cryptographically secure. Your passwords never leave your device.

---

## ⚡ Quick Start

**Three ways to use Unbreakable:**

1. **🌐 Web App** - [Download](https://github.com/jbryan79/Unbreakable/releases) and open `index.html`
2. **💻 Windows Installer** - [Download UnbreakableSetup-v3.0.exe](https://github.com/jbryan79/Unbreakable/releases)
3. **🔌 Chrome Extension** - [Install from Chrome Web Store](#) *(coming soon)* or [Load Manually](docs/extension-guide.md)

---

## 🎯 Why Unbreakable?

Most password generators run online. **That's a problem.**

When you use online password generators:
- ❌ Your passwords travel across the internet
- ❌ Servers can log what you generate
- ❌ You're trusting someone else with your security
- ❌ Man-in-the-middle attacks are possible
- ❌ You have no idea what happens server-side

**Unbreakable is different.**

✅ **100% Offline** - Works without internet  
✅ **Zero Network Requests** - Provably offline (check your browser's dev tools)  
✅ **Cryptographically Secure** - Uses Web Crypto API, not Math.random()  
✅ **No Data Collection** - Nothing is logged, stored, or transmitted  
✅ **Open Source** - Fully auditable code  
✅ **No Trust Required** - Verify everything yourself  

---

## 🔐 Features

### Core Features
- ⚡ **Instant password generation** - No delays, no servers
- 🎚️ **Customizable length** - 8 to 64 characters
- 🔤 **Character type selection** - Uppercase, lowercase, numbers, symbols
- 📊 **Entropy calculation** - Know how strong your password is
- ⏱️ **Crack time estimation** - See how long it would take to break
- 📋 **One-click copy** - Copy to clipboard instantly
- 🎨 **Clean, distraction-free UI** - Focus on what matters

### Privacy Features
- 🔒 **Trust Badge** - Real-time network monitoring
- 🔍 **Privacy verification modal** - Step-by-step verification guide
- 📡 **Zero network requests** - Guaranteed and verifiable
- 🛡️ **No analytics** - No tracking of any kind
- 💾 **No storage** - Passwords aren't saved anywhere

### Distribution Options
- 🌐 **Standalone web app** - Single HTML file, works offline
- 💻 **Windows installer** - Professional Inno Setup package
- 🔌 **Chrome extension** - Quick access from any page
- 📱 **Fully responsive** - Works on mobile, tablet, desktop

---

## 🚀 Installation

### Option 1: Web App (No Installation)

1. [Download the latest release](https://github.com/jbryan79/Unbreakable/releases)
2. Extract the ZIP file
3. Open `index.html` in any modern browser
4. Start generating passwords!

**No installation required. Works 100% offline.**

### Option 2: Windows Installer

1. [Download UnbreakableSetup-v3.0.exe](https://github.com/jbryan79/Unbreakable/releases)
2. Run the installer
3. Choose components (Web App + Chrome Extension)
4. Launch from desktop or Start Menu

**Includes both web app and Chrome extension.**

### Option 3: Chrome Extension

**Coming soon:** One-click install from Chrome Web Store

**Manual installation:**
1. [Download the latest release](https://github.com/jbryan79/Unbreakable/releases)
2. Extract the ZIP file
3. Open Chrome → `chrome://extensions/`
4. Enable "Developer mode"
5. Click "Load unpacked"
6. Select the `ChromeExtension` folder
7. Done!

[Full extension installation guide →](docs/extension-guide.md)

---

## 🔍 Verify Privacy Yourself

**Don't trust us. Verify for yourself that Unbreakable makes zero network requests:**

1. Open your browser's Developer Tools (press `F12`)
2. Go to the **Network** tab
3. Generate 10, 50, or 100 passwords
4. See **ZERO network requests**

That's our promise. Your passwords never leave your device.

---

## 🛡️ Security

### Cryptographically Secure Randomness

Unbreakable uses `window.crypto.getRandomValues()` for true cryptographic randomness:

```javascript
// Uses Web Crypto API
window.crypto.getRandomValues(array);

// NOT using Math.random() - that's predictable
```

### No Modulo Bias

We avoid modulo bias through rejection sampling - the same technique used by 1Password and LastPass:

```javascript
// Rejection sampling ensures uniform distribution
do {
  randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
} while (randomValue >= Math.floor(MAX_UINT32 / charset.length) * charset.length);
```

### Entropy Calculation

Password strength is measured by entropy:

```
Entropy = Length × log₂(Character Set Size)
```

**Example:** 16-character password with uppercase, lowercase, numbers, and symbols:
- Character set size: 94 characters
- Entropy: 16 × log₂(94) ≈ **105 bits**
- Time to crack: **Trillions of years** (at 100 billion attempts/second)

---

## 💻 Technical Details

### Browser Compatibility

- ✅ Chrome 11+
- ✅ Firefox 21+
- ✅ Safari 6.1+
- ✅ Edge 12+
- ✅ Opera 15+

Any browser that supports the Web Crypto API.

### System Requirements

- **Windows:** 7 or later (10/11 recommended)
- **macOS:** Any modern version (use web app)
- **Linux:** Any modern version (use web app)
- **Mobile:** iOS/Android (use web app in browser)
- **Disk space:** Less than 1 MB
- **Internet:** NOT required (100% offline)

### Architecture

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Crypto:** Web Crypto API
- **Extension:** Manifest V3
- **Installer:** Inno Setup
- **Dependencies:** ZERO (completely self-contained)

---

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug reports
- 💡 Feature suggestions
- 📝 Documentation improvements
- 🔧 Code contributions
- 🌍 Translations

**Before contributing:**
1. Check existing issues and PRs
2. Open an issue to discuss major changes
3. Follow the existing code style
4. Test thoroughly before submitting

---

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details.

**TL;DR:** Use it, modify it, distribute it. Just keep the copyright notice.

---

## 👨‍💻 Author

**James Bryan**  
Database Analyst → Full-Stack Developer  
Security-Conscious Builder

- 🌐 Portfolio: [jamesabryan.com](https://jamesabryan.com)
- 💼 LinkedIn: [linkedin.com/in/janthonyb](https://linkedin.com/in/janthonyb)
- 📧 Email: jamesbryan@gmail.com
- 🐙 GitHub: [@jbryan79](https://github.com/jbryan79)

---

## ⭐ Support

If you find Unbreakable useful:

- ⭐ **Star this repository**
- 🐛 **Report bugs** via [Issues](https://github.com/jbryan79/Unbreakable/issues)
- 💡 **Suggest features** via [Issues](https://github.com/jbryan79/Unbreakable/issues)
- 📢 **Share** with security-conscious friends
- 🍕 **Sponsor** via [GitHub Sponsors](#) *(optional)*

---

## 🔗 Links

- [Download Latest Release](https://github.com/jbryan79/Unbreakable/releases)
- [Chrome Web Store](#) *(coming soon)*
- [Extension Installation Guide](docs/extension-guide.md)
- [Report Bug](https://github.com/jbryan79/Unbreakable/issues)
- [Request Feature](https://github.com/jbryan79/Unbreakable/issues)

---

## 📊 Project Stats

![GitHub release (latest by date)](https://img.shields.io/github/v/release/jbryan79/Unbreakable)
![GitHub all releases](https://img.shields.io/github/downloads/jbryan79/Unbreakable/total)
![GitHub stars](https://img.shields.io/github/stars/jbryan79/Unbreakable)
![GitHub forks](https://img.shields.io/github/forks/jbryan79/Unbreakable)
![GitHub issues](https://img.shields.io/github/issues/jbryan79/Unbreakable)

---

## 🙏 Acknowledgments

Built with:
- ❤️ Privacy in mind
- 🔒 Security as priority #1
- 🎯 User trust through transparency
- 💻 No external dependencies
- 🌍 Open source principles

---

## 📝 Privacy Promise

We promise:

✅ **No servers** - We don't have any  
✅ **No logging** - Nothing is saved  
✅ **No network requests** - Provably offline  
✅ **No data collection** - We don't know you exist  
✅ **No analytics** - No tracking of any kind  
✅ **No cookies** - Nothing stored in your browser  

**Your passwords are yours. Period.**

---

<div align="center">

**Built by James Bryan | 2025 | MIT License**

[⬆ Back to top](#-unbreakable-password-generator)

</div>
