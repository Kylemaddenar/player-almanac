# Player Almanac

**Version**: 6.3 (December 28, 2025)  
**Type**: Single-file D&D 5e Character Sheet Application

## What This Project Is

Player Almanac is a self-contained, browser-based character sheet for tabletop RPGs (primarily D&D 5th Edition). The entire application lives in a single HTML file with embedded CSS and JavaScript—no build step, no dependencies to install, no server required.

### What It Does

- **Character Management**: Create, edit, duplicate, and delete multiple characters
- **Combat Tracking**: HP, temporary HP, conditions, concentration, death saves
- **Dice Rolling**: Click-to-roll with advantage/disadvantage modes, roll history log
- **Spellcasting**: Spell slots, spell list with sorting/filtering, prepared spells, expandable descriptions
- **Campaign Maps**: Upload maps, place pins, plot routes, measure distances
- **Rest System**: Short rest (hit dice healing) and long rest with configurable rules
- **Theming**: 8 color themes with particle background effects
- **Offline-First**: All data stored locally (localStorage + IndexedDB)
- **Mobile-Optimized**: Responsive design with full-screen overlay menus on mobile
- **Export/Import**: Full character backup with portraits, multi-character restore
- **One-Page Sheet**: Single-page PDF character sheet generator
- **Rules Toggle**: 2014/2024 rules version support with badge display

---

## How It's Structured

### Single-File Architecture

```
player_almanac.html (31,011 lines)
│
├─ Lines 1-464        Version history / changelog comments
├─ Lines 465-474      <head> meta tags, fonts, GSAP CDN
├─ Lines 475-14,163   <style> - All CSS (themes, layouts, responsive)
├─ Lines 14,216-15,500 <body> - HTML structure (boot screen, app, modals)
└─ Lines 15,592-31,010 <script> - JavaScript application
```

### JavaScript Architecture

```javascript
// Main application class (line ~18,024)
class SheetApp {
  state: SheetState      // Single source of truth for character data
  dom: DOMRefs           // Cached DOM element references
  charIndex: CharMeta[]  // List of all characters (id, name, timestamps)
  activeCharId: string   // Currently loaded character
}

// Supporting classes
class PortraitStore     // IndexedDB wrapper for portrait images (line ~17,459)
class MapStore          // IndexedDB wrapper for map images (line ~17,557)
class Particles         // Canvas-based background animation (line ~17,816)
```

### Data Flow (Unidirectional)

```
User Action → Event Handler → State Mutation → fixInvariants() 
                                                    ↓
                                            updateDerived()
                                                    ↓
                                              render*()
                                                    ↓
                                            scheduleSave()
```

---

## How Data/State Is Stored

### Storage Layers

| Layer | Technology | Purpose | Keys |
|-------|------------|---------|------|
| Character State | localStorage | All character data (JSON) | `cmCharState_v1:{id}` |
| Character Index | localStorage | List of characters | `cmCharIndex_v1` |
| Active Character | localStorage | Current character ID | `cmCharActive_v1` |
| Portraits | IndexedDB | Character images (Blob) | `cm_portrait_db_v1` |
| Map Images | IndexedDB | Campaign map images (Blob) | `cm_map_db_v1` |
| Preferences | localStorage | Theme, motion, mode settings | Various keys |

### State Schema (SheetState)

```typescript
interface SheetState {
  version: number;           // Schema version (currently 4)
  name: string;              // Character name
  species: string;           // Race/species
  class: string;             // Class(es)
  level: number;             // 1-20
  abilities: Record<AbilityKey, {score, prof, misc}>;
  skills: Record<SkillKey, {p, e, misc}>;  // p=proficient, e=expertise
  hp: {cur, max, tmp};
  hd: {spent, max, die};     // Hit dice
  death: {suc, fail};        // Death saves
  conds: string[];           // Active conditions
  concentration: {active, spell, promptOnDamage};
  weapons: Weapon[];
  features: Feature[];
  spells: Spell[];
  slots: Record<string, {t, e}>;  // t=total, e=expended
  coins: {cp, sp, ep, gp, pp};
  // ... more fields (see makeBaseDefaults() at line ~16,975)
}
```

---

## Codebase Map

### CSS Sections (Lines 475-14,163)

| Lines | Section | Description |
|-------|---------|-------------|
| 476-600 | CSS Variables | `:root` with colors, spacing, typography |
| 542-600 | Density Toggle | `.density-compact` modifier classes |
| 600-2000 | Core Layout | Grid, cards, panels, forms |
| 2000-4000 | Components | Buttons, modals, popovers, tabs |
| 4000-6000 | Character Sheet | Abilities, skills, weapons, spells |
| 6000-8000 | Quickbar | Top navigation, stats, actions |
| 8000-10,000 | Map System | Map viewer, tools, panels |
| 10,000-14,163 | Mobile/Print | Responsive breakpoints, print styles, mobile overlays |

### HTML Sections (Lines 14,216-15,500)

| Lines | Element | ID | Purpose |
|-------|---------|-----|---------|
| 14,221-14,790 | Boot Screen | `#boot` | Intro/launcher screen |
| 14,790-15,100 | Quickbar | `#quickBar` | Top navigation bar |
| 15,100-15,350 | Character Sheet | `#app` | Main content area |
| 15,364-15,500 | Modals | Various | HP, conditions, rest, import |

### JavaScript Sections (Lines 15,592-31,010)

| Lines | Section | Key Functions |
|-------|---------|---------------|
| 15,692-15,960 | Constants | Storage keys, themes, skills data |
| 15,903-15,960 | CONDITIONS | Condition definitions array |
| 16,975-17,050 | State Schema | `makeBaseDefaults`, `normalizeState` |
| 17,459-17,556 | PortraitStore | IndexedDB for portraits |
| 17,557-17,815 | MapStore | IndexedDB for map images |
| 17,816-18,023 | Particles | Background animation class |
| 18,024-18,400 | SheetApp Class | Main application controller |
| 18,200-18,400 | Boot Logic | `init()`, `runBoot()`, `skipBoot()` |
| 18,400-20,000 | Event Binding | `bindEvents()`, all event handlers |
| 20,000-22,000 | State Management | `fixInvariants`, `scheduleSave`, `persist` |
| 22,000-24,000 | Rendering | `renderAll`, `renderAbilities`, `renderSkills`... |
| 24,000-26,000 | Modals | HP modal, conditions, short/long rest |
| 26,000-28,000 | Rolling | Dice rolling, roll log, roll modes |
| 28,000-30,000 | Map System | Map viewer, pins, routes, tools |
| 30,000-31,010 | Footer/Credits | License, credits dialog, secret skip |

---

## Common Tasks

### Where to Change UI

| Task | Location |
|------|----------|
| Colors/themes | CSS variables (line ~476) + `THEMES` object (line ~15,696) |
| Spacing/padding | CSS variables `--space-*`, `--card-pad` (line ~520) |
| Fonts | CSS variables `--font-*` (line ~510) |
| Add new button | HTML (line ~14,790+), then add event in `bindEvents()` |
| Modify card layout | Look for `.card` styles (line ~2000+) |

### Where to Add Features

| Feature Type | Where to Add |
|--------------|--------------|
| New character field | 1. Add to `makeBaseDefaults()` 2. Add to `normalizeState()` 3. Add HTML input 4. Add render function |
| New modal | 1. Add HTML (before `</body>`) 2. Add to `buildDOMRefs()` 3. Add open/close functions |
| New dice roll type | Add to `rollDice()` family or create new `rollX()` method |
| New condition | Add to `CONDITIONS` array (line ~15,903) |

### Where Settings Live

| Setting | Storage Key | Default |
|---------|-------------|---------|
| Theme | `cmTheme_v1` | `'arcane'` |
| Motion (particles) | `motion` | `true` |
| High Contrast | `contrastHigh` | `false` |
| Edit/Play Mode | `cmMode` | `'edit'` |
| Roll Mode | `cmRollMode` | `'normal'` |
| Roll Log Collapsed | `cmRollLogCollapsed_v1` | `false` |
| Quickbar Collapsed | `cmQuickbarCollapsed_v1` | `false` |
| Skip Intro | `cmSkipIntro_v1` | `'0'` |
| Print Mode | `cmPrintMode_v1` | `false` |
| Rules Version | `cmRulesVersion_v1` | `'2014'` |

### Where Saves/Storage Happen

```javascript
// Main save flow
scheduleSave()           // Debounces (900ms)
  → persist()            // Writes to localStorage
    → localStorage.setItem(CHAR_STATE_PREFIX + id, JSON.stringify(state))

// IndexedDB for media
PortraitStore.put(blob)  // Line ~17,500 - stores portrait
MapStore.put(blob)       // Line ~17,600 - stores map image

// Emergency save on page hide/unload
visibilitychange → persist({ force: true })
beforeunload → persist({ force: true })
```

### How to Build/Release

No build step required. The file is self-contained.

**To deploy:**
1. Copy `player_almanac.html` to any web server
2. Or host on GitHub Pages, Netlify, etc.
3. Or share the file directly (works offline)

**For development:**
- Use a local server to avoid CORS issues with IndexedDB
- `python3 -m http.server 8000` or `npx serve .`
- Open `http://localhost:8000/player_almanac.html`

---

## Do Not Break

These are critical invariants. Breaking them will cause data loss or crashes:

| Invariant | Why It Matters | Where It Lives |
|-----------|----------------|----------------|
| `STATE_VERSION = 4` | Migration system depends on this | Line ~15,693 |
| `cmCharState_v1:` prefix | All saved data uses this key format | Line ~15,680 |
| `normalizeState()` always runs on load | Ensures backward compatibility | Line ~17,048 |
| `fixInvariants()` after every state mutation | Keeps derived values consistent | SheetApp class |
| `scheduleSave()` called after changes | Prevents data loss | After state changes |
| `escapeHtml()` on all user input → innerHTML | Prevents XSS | Throughout render functions |

---

## Troubleshooting

### What to Check When

| Issue | First Check | Likely Cause |
|-------|-------------|--------------|
| Changes don't persist | localStorage quota | Try `localStorage.clear()` or check DevTools |
| Blank screen on load | Console errors (F12) | JS error in boot sequence |
| Imports fail silently | JSON format | Check `normalizeState()` logs |
| Roll button does nothing | Click handler | Look in `bindEvents()` |
| Mobile tap not working | Test on real device | Touch event handler missing |

### Where Logs/Errors Show Up

```javascript
// All console logs use this prefix:
console.log('[PlayerAlmanac] ...');

// Enable debug mode for visual badges:
window.__CM_DEBUG = true;

// Inspect current state:
window.app.state

// Check storage:
localStorage.getItem('cmCharIndex_v1')
localStorage.getItem('cmCharState_v1:' + window.app.activeCharId)
```

### How to Verify Fixes

1. **Save/Load**: Make change → reload → verify data persists
2. **State integrity**: `JSON.parse(localStorage.getItem('cmCharState_v1:' + id))` should match `app.state`
3. **Mobile**: Test on actual device or Chrome DevTools device mode
4. **Accessibility**: Tab through all interactive elements
5. **Print mode**: Toggle print mode, verify layout
6. **Themes**: Cycle through all 8 themes

### Debug Console Commands

```javascript
// Force save
app.persist({ force: true, toast: true });

// Dump current state
JSON.stringify(app.state, null, 2);

// Check character index
app.charIndex;

// Manually trigger render
app.renderAll();

// Reset roll mode
app.setRollMode('normal');
```

---

## Conventions

### Naming Rules

| Type | Convention | Example |
|------|------------|---------|
| CSS Variables | `--kebab-case` | `--card-bg`, `--text-primary` |
| CSS Classes | `kebab-case` | `.skill-row`, `.card-title` |
| JS Variables | `camelCase` | `activeCharId`, `rollMode` |
| JS Constants | `SCREAMING_SNAKE` | `MAX_ROLL_LOG`, `STATE_VERSION` |
| DOM IDs | `camelCase` | `rollLogBody`, `qbHealDmgBtn` |
| Storage Keys | `camelCase` with prefix | `cmCharState_v1:`, `cmTheme_v1` |

### Folder Rules

N/A - Single file application. However, keep these logical sections:
1. CSS before `</style>`
2. HTML body structure
3. JavaScript after `<script>` before `</script>`

### Patterns Used

**Event Delegation:**
```javascript
// Instead of attaching to each element:
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="weapon-del"]');
  if (btn) { /* handle */ }
});
```

**State-First Updates:**
```javascript
// Always: State → Render → Save
this.state.hp.cur = newValue;  // 1. Mutate state
this.renderHP();                // 2. Update DOM
this.scheduleSave();            // 3. Persist
```

**Safe HTML Rendering:**
```javascript
// NEVER: element.innerHTML = userInput;
// ALWAYS: element.innerHTML = escapeHtml(userInput);
// OR: element.textContent = userInput;
```

**Debounced Saves:**
```javascript
// Don't save on every keystroke
scheduleSave()  // Waits 900ms, then persists
```

### How New Code Should Be Added

1. **New State Field:**
   ```javascript
   // 1. Add default in makeBaseDefaults()
   myField: '',
   
   // 2. Add normalization in normalizeState()
   if (typeof raw.myField === 'string') out.myField = raw.myField.slice(0, 100);
   
   // 3. Add DOM input in HTML
   // 4. Add to buildDOMRefs() if needed
   // 5. Add render function
   // 6. Add event handler
   ```

2. **New Modal:**
   ```html
   <!-- Add before </body> -->
   <div class="modal" id="myModal" hidden>
     <div class="modal-content">...</div>
   </div>
   ```
   ```javascript
   // Add to buildDOMRefs()
   myModal: $('myModal'),
   
   // Add open/close functions
   openMyModal() { this.dom.myModal.hidden = false; }
   closeMyModal() { this.dom.myModal.hidden = true; }
   ```

3. **New Theme:**
   ```javascript
   // Add to THEMES object (line ~15,696)
   myTheme: {
     name: 'My Theme',
     bgDeep: '#...',
     // ... all required color properties
   }
   ```

---

## Audit Notes (Code Review Findings)

### Security ✔ PASS
- **XSS Protection**: All user content uses `escapeHtml()` before innerHTML
- **Input Sanitization**: `normalizeState()` validates and clamps all imported data
- **No Dangerous APIs**: Zero uses of `eval()`, `Function()`, `document.write()`, or `outerHTML`
- **Safe Text Handling**: `safeText()` strips null bytes and trims all strings

### Data Safety ✔ PASS
- **Emergency Saves**: `beforeunload` + `visibilitychange` flush pending saves
- **Debounced Persistence**: 900ms debounce prevents excessive writes
- **State Versioning**: `STATE_VERSION = 4` enables future migrations
- **Defensive Cloning**: `deepClone()` prevents reference mutations
- **QuotaExceededError**: User notification when storage is full

### Accessibility ✔ PASS
- **Focus Traps**: `createFocusTrap()` implemented for all modals
- **ARIA Labels**: Interactive elements have proper `aria-label`, `aria-haspopup`, `aria-expanded`
- **Keyboard Navigation**: ESC closes modals, Tab cycles, Enter/Space activates
- **Touch Targets**: 44px minimum via `--tap-target` CSS variable (WCAG 2.5.5)

### Performance ✔ PASS
- **DOM Caching**: `buildDOMRefs()` caches all element references
- **Event Delegation**: Click handlers use `.closest()` for efficiency
- **Bounded Collections**: Roll log capped at 50 entries (`MAX_ROLL_LOG`)
- **Lazy Rendering**: Map/particles only active when visible

### Memory Management ✔ PASS
- **Object URL Cleanup**: `revokeObjectURL()` called in PortraitStore/MapStore
- **Event Cleanup**: Pin drag listeners properly removed
- **Canvas Cleanup**: Particles cleared when motion disabled

### Error Handling ✔ PASS  
- **100+ try-catch blocks** throughout codebase
- **Storage Fallbacks**: `storageGet/Set` return null/false on failure
- **IndexedDB Fallbacks**: Operations return null on DB unavailable
- **Boot Error Modal**: Dedicated error UI for initialization failures

### Code Quality ✔ PASS
- **Consistent Naming**: camelCase for JS, kebab-case for CSS
- **Type Annotations**: JSDoc types for all major functions
- **Clear Comments**: Section markers (`// Section B:`, etc.)
- **Logical Organization**: Constants → Utilities → Classes → Initialization

### Test Verification Checklist
When making changes, verify:
- [ ] Character create/edit/delete works
- [ ] Save indicator shows "Saved" after changes
- [ ] Page reload preserves all data
- [ ] All 8 themes apply correctly  
- [ ] Mobile layout works at 375px width
- [ ] Print mode generates clean output
- [ ] Import/export round-trips correctly
- [ ] Mobile menu overlays work correctly

---

## Maintenance

**When to update this documentation:**
- Adding new major features
- Changing storage schema
- Adding new DOM IDs that are referenced programmatically
- Modifying the boot flow or state management
- Changing CSS variable names used throughout

**Version History Location:** Lines 1-464 of `player_almanac.html`
