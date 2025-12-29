# 🎲 Player Almanac

<p align="center">
  <img src="https://img.shields.io/badge/version-6.4-blue" alt="Version 6.4">
  <img src="https://img.shields.io/badge/D%26D-5th%20Edition-red" alt="D&D 5e">
  <img src="https://img.shields.io/badge/license-ZNAL%20v1.1-green" alt="License">
  <img src="https://img.shields.io/badge/offline-ready-brightgreen" alt="Offline Ready">
</p>

**A beautiful, offline-first D&D 5e character sheet that runs entirely in your browser.**

No accounts. No servers. No subscriptions. Just download one HTML file and play.

---

## ✨ Features

### 📋 Complete Character Management
- Create, edit, duplicate, and delete multiple characters
- Full ability scores, skills, and saving throws
- Hit points with temp HP and damage tracking
- Death saving throws with visual indicators
- Conditions and concentration tracking

### 🎯 Combat Ready
- **Click-to-roll** any stat, skill, or attack
- Advantage/Disadvantage toggle modes
- Roll history log with natural 1/20 highlighting
- HP quick-adjust buttons (+/- in one tap)

### 📖 Spellcasting
- Spell slot tracking with one-click expend/restore
- Full spell list with sorting and filtering
- Prepared spell marking
- Expandable spell descriptions
- Spellcasting DC and attack bonus auto-calculation

### 🗺️ Campaign Maps
- Upload your own maps (PNG, JPG, WebP)
- Place location pins with notes
- Plot travel routes
- Measure distances with scale calibration
- Multiple campaign support

### 🎨 8 Beautiful Themes
- Arcane Purple
- Forest Green
- Ocean Blue
- Ember Orange
- Midnight Black
- Parchment Classic
- Blood Moon
- Frost White

Each theme includes animated particle backgrounds (optional).

### 📱 Mobile Optimized
- Responsive design works on any screen size
- Full-screen overlay menus on mobile
- Touch-friendly 44px+ tap targets
- Safe area support for notched devices

### 💾 Your Data, Your Control
- **100% offline** - works without internet after first load
- Data stored in your browser's localStorage
- Export characters as JSON files
- Import single characters or full backups
- One-page PDF character sheet generator

### ♿ Accessible
- Full keyboard navigation
- Focus traps for modals
- ARIA labels throughout
- High contrast mode available

---

## 🚀 Quick Start

### Option 1: Download and Open
1. Download `player_almanac.html`
2. Open it in any modern browser
3. That's it! Start creating characters.

### Option 2: Local Development Server
```bash
# Clone the repo
git clone https://github.com/Kylemaddenar/player-almanac.git
cd player-almanac

# Serve with Python
python3 -m http.server 8000

# Or with Node.js
npx serve .

# Open http://localhost:8000/player_almanac.html
```

---

## 📸 Screenshots

| Boot Screen | Character Sheet | Mobile View |
|-------------|-----------------|-------------|
| ![Boot](docs/boot.png) | ![Sheet](docs/sheet.png) | ![Mobile](docs/mobile.png) |

---

## 🔒 Security (v6.4)

Player Almanac takes security seriously:

- **Content Security Policy** - Restricts what can run in the page
- **XSS Prevention** - All user input escaped before rendering
- **Import Validation** - Imported data strictly validated
- **No Tracking** - Zero analytics, telemetry, or external calls
- **SVG Blocking** - Portrait/map uploads block potentially dangerous SVG

---

## 📦 What's in the Box

```
player_almanac.html    # The entire app (31k lines, ~1MB)
README.md              # Full documentation
QUICKSTART.md          # Get running in 10 minutes
```

That's it. One file does everything.

---

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid
- **Vanilla JavaScript** - No frameworks, no dependencies
- **localStorage** - Character data persistence
- **IndexedDB** - Portrait and map image storage
- **GSAP** - Optional animations (CDN, graceful fallback)

---

## 📋 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Mobile Safari | iOS 14+ | ✅ Full Support |
| Chrome Android | 90+ | ✅ Full Support |

---

## 🎮 D&D Rules Support

| Feature | 2014 PHB | 2024 PHB |
|---------|----------|----------|
| Ability scores | ✅ | ✅ |
| Skills & proficiencies | ✅ | ✅ |
| Spell slots | ✅ | ✅ |
| Conditions | ✅ | ✅ |
| Rest rules | ✅ | ✅ |

Toggle between rule versions in Settings.

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Follow existing code conventions
4. Test on desktop and mobile
5. Submit a pull request

### Code Style

- **JavaScript**: camelCase variables, SCREAMING_SNAKE constants
- **CSS**: kebab-case classes, BEM-ish naming
- **HTML**: camelCase IDs, semantic elements
- **Always use `escapeHtml()` for user content in innerHTML**

---

## 📜 License

**ZNAL v1.1** (Zagreous Noncommercial Attribution License)

- ✅ Free for personal and noncommercial use
- ✅ Modify and distribute freely
- ✅ Must include attribution and link-back
- ❌ Commercial use requires separate license

For commercial licensing: [Kinzle.MA@gmail.com](mailto:Kinzle.MA@gmail.com)

---

## 🙏 Credits

- **Created by**: Zagreous
- **Fonts**: [Cinzel](https://fonts.google.com/specimen/Cinzel), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Animations**: [GSAP](https://greensock.com/gsap/) (optional)
- **Inspired by**: D&D Beyond, Roll20, and the TTRPG community

---

## 📣 Changelog

### v6.4 (December 28, 2025) - Security Hardening
- Added Content Security Policy
- Enhanced import validation with `VALIDATION_LIMITS`
- Portrait/map validation blocks SVG (XSS prevention)
- Improved storage quota error reporting
- Added debug mode with `window.__CM_DEBUG`
- Fixed license version consistency

### v6.3 (December 28, 2025) - Mobile Menu Redesign
- Full-screen overlay menus on mobile
- Touch-friendly 54px+ buttons
- Improved scrollable content areas

### v6.0 (December 2025) - Major Features
- One-page PDF character sheet
- 2014/2024 rules version toggle
- Multi-character backup/restore
- Spell descriptions
- Portrait export/import

[See full changelog in player_almanac.html](player_almanac.html)

---

<p align="center">
  <strong>Made with ❤️ for tabletop gamers everywhere</strong>
</p>

<p align="center">
  <a href="https://github.com/Kylemaddenar/player-almanac">⭐ Star on GitHub</a> •
  <a href="https://github.com/Kylemaddenar/player-almanac/issues">🐛 Report Bug</a> •
  <a href="https://github.com/Kylemaddenar/player-almanac/discussions">💬 Discussions</a>
</p>

