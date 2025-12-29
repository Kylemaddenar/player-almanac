# Quick Start Guide

Get Player Almanac running in under 5 minutes.

## 📋 Requirements

- Modern web browser (Chrome 120+, Firefox 120+, Safari 17+, Edge 120+)
- That's it! No installation, no build tools, no server required.

## 🚀 Launch the App

### Option 1: Double-Click (Simplest)

Just double-click `player_almanac.html` in your file browser.

### Option 2: Command Line

```bash
# macOS
open player_almanac.html

# Windows  
start player_almanac.html

# Linux
xdg-open player_almanac.html
```

### Option 3: Local Server (for development)

```bash
# Python
python3 -m http.server 8000
# Then open: http://localhost:8000/player_almanac.html

# Node.js
npx serve .
# Then open the URL shown
```

## ✅ First-Time Setup

1. **See the boot screen** - Purple intro with particle effects
2. **Click "+ New Character"** - Creates your first character
3. **Edit something** - Change the name, adjust a stat
4. **Check "Saved"** - Look for the indicator in the bottom bar
5. **Reload the page** - Your character should still be there

🎉 **You're ready to play!**

## 🎮 Quick Feature Guide

| What | Where | How |
|------|-------|-----|
| Roll dice | Any stat modifier | Click the +X number |
| Change HP | Bottom quickbar | Use +/- buttons |
| Switch theme | Settings (⚙️) | Theme dropdown |
| Export character | More menu (⋮) | Export Character |
| Print sheet | Settings (⚙️) | Print Layout toggle |
| Switch rules | Settings (⚙️) | Rules Version toggle |

## 💾 Backup Your Characters

### Export Single Character
More menu (⋮) → Export Character

### Export Everything  
Settings (⚙️) → Export All Characters

### Restore Backup
Settings (⚙️) → Restore Backup

## 📱 Mobile Tips

- **Full menus**: Tap Settings or More for full-screen menus
- **Scroll tabs**: Swipe horizontally on the tab bar
- **Quickbar**: Tap to expand/collapse the bottom bar
- **Touch targets**: All buttons are 44px minimum

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Blank screen | Open browser console (F12) and check for errors |
| Not saving | Check that localStorage isn't blocked |
| Fonts look different | Normal - offline build uses system fonts |
| Import failed | Verify file is a valid JSON export |

### Enable Debug Mode

```javascript
// Open browser console (F12) and run:
window.__CM_DEBUG = true;
// Then reload the page
```

## 🌐 Works Offline

Player Almanac works with **zero internet** from the first open:

- ✅ All features work offline
- ✅ Data stored locally on your device  
- ✅ No external servers or CDNs
- ✅ GSAP animations bundled inline

**Test it**: Disconnect WiFi, clear cache, open the file fresh.

## 📁 File Structure

```
player_almanac.html   # The complete app (everything in one file)
├── CSS               # Lines 500-14,200
├── HTML              # Lines 14,200-15,600  
└── JavaScript        # Lines 15,600-34,000
```

**Tip**: Use Ctrl/Cmd+F to search. Look for section comments like `// Section B:` to navigate.

## 🧪 Pre-Release Smoke Test

Before distributing, verify:

- [ ] **Offline**: Works with network disconnected
- [ ] **Fresh start**: Works after clearing browser data
- [ ] **Export/Import**: Character round-trips correctly
- [ ] **Full backup**: Export All → Clear data → Restore works
- [ ] **Core features**: Dice, HP, themes, print mode work
- [ ] **Mobile**: Menus and scroll work on touch devices

## 📚 More Documentation

- [README.md]([README.md](https://github.com/Kylemaddenar/player-almanac/blob/main/README.md)) - Full project documentation
- [CHANGELOG.txt]([CHANGELOG.txt](https://github.com/Kylemaddenar/player-almanac/blob/main/Changelog.md)) - Version history
- In-app Help (❓) - Feature guides

---

**Need help?** Open an issue on [GitHub](https://github.com/Kylemaddenar/player-almanac)

**Version 6.15.1** | December 2025
