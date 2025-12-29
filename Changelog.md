# Changelog

All notable changes to Player Almanac are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [6.15.1] - 2025-12-29

### 🔒 Security
- Fixed XSS vulnerability in print sheet conditions rendering
- Conditions now properly escaped with `esc()` before display

### 🛡️ Stability
- **Spam Click Protection**: Export/import functions guard against duplicate rapid clicks
  - Added `_exportingJSON`, `_exportingWithMap`, `_importingData` flags
  - All operations check flags and reset after 500ms delay
- **Resource Cleanup**: Auto-backup uses AbortController for proper listener cleanup
- **Memory Leak Prevention**: Added `cleanupAutoBackup()` method for hot reload scenarios

### ✅ Verified Patterns
All security patterns audited and passing:
- Double-init guard prevents re-initialization
- State versioning (`STATE_VERSION = 4`) enables migrations
- `normalizeState()` validates all imported data
- `fixInvariants()` enforces bounds on all numeric values
- `VALIDATION_LIMITS` centralizes all string/array/numeric limits
- `ErrorTracker` with bounded queue (50 max errors)
- `escapeHtml()` applied to all user content
- CSP configured for offline mode (no external domains)
- Portrait/map validation blocks unsafe patterns (SVG blocked)

---

## [6.15.0] - 2025-12-29

### 🎉 Major Release: Fully Offline

Player Almanac now works **completely offline from first open**—no internet required, ever.

### Added
- **GSAP Bundled Inline**: Animation library (~71.5 KB) included in HTML file
- **System Font Fallbacks**: Works without Google Fonts
  - Cinzel → Times New Roman, Georgia, serif
  - Inter → Segoe UI, system-ui, sans-serif
  - JetBrains Mono → Consolas, Monaco, monospace
- **Boot Recovery Screen**: Shows recovery options instead of blank screen on crash
  - Export All Data button for data recovery
  - Reset UI Only option (keeps data)
  - Hard Reset option (last resort)
- **Auto-Backup System**: Rolling snapshots every 5 minutes
  - Backup on visibility change and before page unload
  - Up to 3 automatic backups maintained
  - Restore from auto-backup functionality
- **Addon Security Warnings**: SHA-256 hash displayed when enabling addons
- **Offline Validator**: Debug mode shows if any external URLs detected

### Changed
- **Single-File Release**: `player_almanac.html` IS the complete offline build
- **CSP Updated**: Content-Security-Policy no longer references external domains
- Removed Google Fonts CDN dependency
- Removed GSAP CDN dependency
- Removed Cloudflare email-decode scripts

### Fixed
- UTF-8 encoding issues throughout codebase
- Documentation encoding artifacts
- UI copy now accurately reflects offline capability

---

## [6.14.0] - 2025-12-28

### Fixed
- **Critical Bug**: `window.app` was undefined
  - App instance stored as `window.__PA_INSTANCE`
  - Updated all handlers to check both references
  - Fixed "Cannot read properties of undefined" errors

---

## [6.13.0] - 2025-12-27

### Fixed
- **Mobile Delete Button**: Complete rewrite for touch devices
  - Direct event handlers on each button (not delegation)
  - Added touchstart/touchend handlers for mobile
  - Touch events prevent ghost clicks
  - Added `touch-action: manipulation` CSS

---

## [6.12.0] - 2025-12-26

### Fixed
- Broken unicode in boot screen ellipsis button
- Changed `textContent` to `innerHTML` for HTML entity parsing

---

## [6.4.0] - 2025-12-20

### 🔒 Security Hardening Release

### Added
- **Content Security Policy**: CSP meta tag restricting script/style sources
- **Portrait Validation**: Strict data URL validation blocks SVG (XSS vector)
- **Import Validation**: Media validation prevents malicious data URLs
- **Enhanced Quota Handling**: Reports which key failed, shows storage stats
- **`getStorageStats()`**: Returns storage usage by key
- **`VALIDATION_LIMITS`**: Centralized constants for all limits
- **`getLastValidationReport()`**: Tracks dropped keys and truncated values
- **Template Helpers**: `escapeAttr()`, `dataAttr()`, `fmtMod()`, `clamp()`
- **ARIA Labels**: All icon buttons have proper accessibility labels

### Fixed
- XSS prevention: All user content uses `escapeHtml()` before innerHTML
- Enhanced `fixInvariants()` validates coin values, checks array shapes

---

## [6.0.0] - 2025-12-15

### 🗺️ Campaign Maps Release

### Added
- **Campaign Map System**: Upload maps, place pins, plot routes
- **Pin Types**: Origin, Last Seen, Towns, Points of Interest
- **Route Planning**: Plot travel routes with distance calculation
- **Scale Calibration**: Set map scale for accurate measurements
- **Measure Tool**: Click-to-measure distances
- **Pin Browser**: Search and filter pins by type, character, session
- **Character Context**: Pins tied to specific characters

---

## [5.0.0] - 2025-12-01

### 🎨 Theming & Mobile Release

### Added
- **8 Color Themes**: With animated particle backgrounds
- **Mobile-First Design**: Full-screen overlay menus on mobile
- **Quickbar**: Fixed bottom bar with HP, actions, mode toggle
- **Print Mode**: Clean PDF output toggle
- **One-Page Sheet**: Generate printable character summary

### Changed
- Responsive layout works from 320px to 4K
- Touch targets minimum 44px

---

## [4.0.0] - 2025-11-15

### ⚔️ Combat & Spells Release

### Added
- **Death Saves**: Track successes and failures
- **Conditions**: Apply and track status conditions
- **Concentration**: Track concentration with damage prompts
- **Spell Slots**: Visual slot tracking per level
- **Spell List**: Sortable, filterable spell management
- **Prepared Spells**: Toggle spell preparation
- **Dice Rolling**: Click-to-roll with advantage/disadvantage

---

## [3.0.0] - 2025-11-01

### 💾 Multi-Character Release

### Added
- **Multiple Characters**: Create, switch, duplicate, delete
- **Character Index**: Persistent list of all characters
- **Portrait Storage**: IndexedDB for character images
- **Export/Import**: Full character backup and restore
- **Auto-Save**: Changes saved automatically

---

## [2.0.0] - 2025-10-15

### 📊 Full Sheet Release

### Added
- **Abilities**: All six ability scores with modifiers
- **Skills**: Full skill list with proficiency/expertise
- **Combat Stats**: AC, Initiative, Speed, Proficiency
- **Hit Points**: Current, Max, Temporary HP
- **Hit Dice**: Track usage and recovery
- **Weapons**: Attack and damage tracking
- **Features**: Class features and traits
- **Equipment**: Inventory management
- **Coins**: Currency tracking (CP, SP, EP, GP, PP)

---

## [1.0.0] - 2025-10-01

### 🎉 Initial Release

### Added
- Single-file HTML application
- Basic character information (name, class, level)
- localStorage persistence
- Responsive design
- Offline capability

---

## License

**ZNAL v1.1** (Zagreous Noncommercial Attribution License)

See [README.md](README.md) for full license details.
