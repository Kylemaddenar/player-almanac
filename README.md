# Player Almanac

[![Version](https://img.shields.io/badge/version-6.15.1-blue.svg)](https://github.com/Kylemaddenar/player-almanac)
[![License](https://img.shields.io/badge/license-ZNAL%20v1.1-green.svg)](#license)
[![Offline](https://img.shields.io/badge/offline-ready-brightgreen.svg)](#offline-first)

**A single-file, offline-first character sheet for D&D 5th Edition**

> No server. No build step. No internet required. Just open the HTML file and play.

## 📸 Screenshots

<p align="center">
  <img src="https://i.imgur.com/cgQ7xPp.png" alt="Mobile UI" width="250"/>
  &nbsp;&nbsp;&nbsp;
  <img src="https://i.imgur.com/5rG7nOW.png" alt="Main Layout" width="500"/>
</p>

<p align="center">
  <em>Welcome screen (mobile) &nbsp;•&nbsp; Full character sheet (desktop)</em>
</p>

<p align="center">
  <img src="https://i.imgur.com/CniMuqi.png" alt="Campaign Map" width="800"/>
</p>

<p align="center">
  <em>Campaign map with pins, routes, and measurement tools</em>
</p>

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎭 **Character Management** | Create, edit, duplicate, and delete multiple characters |
| ⚔️ **Combat Tracking** | HP, temporary HP, conditions, concentration, death saves |
| 🎲 **Dice Rolling** | Click-to-roll with advantage/disadvantage modes |
| ✨ **Spellcasting** | Spell slots, prepared spells, filtering, expandable descriptions |
| 🗺️ **Campaign Maps** | Upload maps, place pins, plot routes, measure distances |
| 🛏️ **Rest System** | Short rest (hit dice) and long rest with configurable rules |
| 🎨 **8 Themes** | Color themes with animated particle backgrounds |
| 📱 **Mobile-First** | Responsive design with touch-friendly controls |
| 💾 **Export/Import** | Full backup with portraits, multi-character restore |
| 📄 **One-Page Sheet** | Generate printable PDF character sheets |
| 📖 **Rules Toggle** | Switch between 2014 and 2024 rules |

## 🚀 Quick Start

### Just Open It

```bash
# macOS
open player_almanac.html

# Windows
start player_almanac.html

# Linux
xdg-open player_almanac.html
```

### Or Use a Local Server

```bash
# Python
python3 -m http.server 8000
# Open http://localhost:8000/player_almanac.html

# Node.js
npx serve .
```

**That's it!** No npm install, no build process, no configuration.

## 📦 What's in the Box

```
player_almanac.html   # The entire app (~1.2 MB, ~34,000 lines)
README.md             # This file
QUICKSTART.md         # Quick setup guide
CHANGELOG.txt         # Version history
```

Everything is in one HTML file:
- **Lines 1-500**: Version history
- **Lines 500-14,200**: CSS styles
- **Lines 14,200-15,600**: HTML structure  
- **Lines 15,600-34,000**: JavaScript application

## 🔒 Offline-First

Player Almanac works completely offline from the first open:

| Component | Status |
|-----------|--------|
| GSAP Animations | ✅ Bundled inline (71 KB) |
| Fonts | ✅ System fallbacks |
| External CDNs | ✅ None required |
| Data Storage | ✅ localStorage + IndexedDB |

**Verify offline status:**
```bash
grep -c 'https://fonts.google\|https://cdnjs' player_almanac.html
# Should output: 0
```

## 💾 Data Storage

All data stays on your device:

| Data | Storage | Key Pattern |
|------|---------|-------------|
| Character sheets | localStorage | `cmCharState_v1:{id}` |
| Character list | localStorage | `cmCharIndex_v1` |
| Portraits | IndexedDB | `cm_portrait_db_v1` |
| Campaign maps | IndexedDB | `cm_map_db_v1` |
| Preferences | localStorage | Various |

### Backup Your Data

- **Single character**: More menu → Export Character
- **All characters**: Settings → Export All Characters
- **Restore**: Settings → Restore Backup

## 🛡️ Security

- **XSS Protection**: All user input escaped with `escapeHtml()`
- **CSP Configured**: Content-Security-Policy blocks unsafe sources
- **Media Validation**: Portrait/map URLs validated (SVG blocked)
- **Sandboxed Addons**: Extensions run in isolated iframes
- **No External Calls**: Zero network requests in offline build

## 🐛 Debug Mode

Enable verbose logging:

```javascript
// In browser console (F12)
window.__CM_DEBUG = true;
// Reload to see debug output
```

Debug commands:
```javascript
getStorageStats();           // Storage usage by key
getLastValidationReport();   // Import validation details
app.state;                   // Current character state
app.charIndex;               // All characters
```

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 120+ | ✅ Tested |
| Firefox | 120+ | ✅ Tested |
| Safari | 17+ | ✅ Should work |
| Edge | 120+ | ✅ Should work |

**Requirements**: localStorage, IndexedDB, ES6+

## 📝 License

**ZNAL v1.1** (Zagreous Noncommercial Attribution License)

- ✅ Personal use
- ✅ Streaming/content creation (even monetized)
- ✅ Modification for personal use
- ❌ Commercial distribution without license
- ⚠️ Attribution and link-back required

**Required attribution:**
> Player Almanac by Zagreous  
> Licensed under ZNAL v1.1  
> https://github.com/Kylemaddenar/player-almanac

For commercial licensing: Kinzle.MA@gmail.com

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Test thoroughly (see QUICKSTART.md smoke test checklist)
4. Submit a pull request

## 📚 Documentation

- [QUICKSTART.md]([QUICKSTART.md](https://github.com/Kylemaddenar/player-almanac/blob/main/Quickstart.md) - Setup guide and smoke tests
- [CHANGELOG.txt]([CHANGELOG.txt](https://github.com/Kylemaddenar/player-almanac/blob/main/Changelog.md) - Full version history
- In-app Help (❓ button) - Feature documentation

## ⚠️ Trademark

Dungeons & Dragons® is a registered trademark of Wizards of the Coast LLC.  
Player Almanac is not affiliated with, endorsed, or approved by Wizards of the Coast.

---

**Version 6.15.1** | December 2025 | Made with ❤️ for tabletop gaming
