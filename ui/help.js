/* Help is a read-only client of Application. No domain command, import, file
 * selection, network request, ownership takeover or addon enable originates
 * here. Successful real actions emit the small notifications below.
 * The companion joins native dialogs instead of opening a competing modal.
 */
(function (PA) {
  'use strict';
  const U = PA.ui, { el, button, row, stack } = U;
  const H = (key, args) => PA.t('help.' + key, args);
  const TEXT_TOKEN = /\[\[([^\]]+)\]\]/g;
  const plain = key => PA.t(key).replace(TEXT_TOKEN, (_, token) => PA.t(token));
  function rich(key, tag = 'p', attrs = {}) {
    const node = el(tag, attrs); let start = 0; const value = PA.t(key);
    for (const match of value.matchAll(TEXT_TOKEN)) {
      node.append(document.createTextNode(value.slice(start, match.index)), el('strong', { class: 'pa-help-control' }, PA.t(match[1])));
      start = match.index + match[0].length;
    }
    node.append(document.createTextNode(value.slice(start))); return node;
  }
  const groups = ['begin', 'prepare', 'play', 'explore', 'protect', 'preferences'];
  const common = ['identity', 'abilities', 'vitals', 'play', 'dice', 'sections', 'export', 'finish'];
  const visible = node => !!node && node.isConnected && !node.hidden && !node.disabled && !node.closest('[hidden],[inert]') && node.getClientRects().length > 0 && getComputedStyle(node).visibility !== 'hidden';
  function safeFocus(node) { if (visible(node)) { if (!node.matches('button,a,input,select,textarea,[tabindex]')) node.setAttribute('tabindex', '-1'); node.focus({ preventScroll: true }); return true; } return false; }
  const searchText = topic => [topic.title, topic.intro, ...topic.tasks.flatMap(t => [t.title, t.body])].map(plain).join(' ').toLocaleLowerCase(PA.language);
  const topicRoute = (app, topic) => ['library', 'backup', 'settings', 'questionnaire'].includes(topic.route) ? '#/' + topic.route : app.activeId ? app.characterRoute(topic.route) : null;

  function guide(app) {
    const help = app.help, topic = PA.helpData.topics.find(t => t.id === app.route.topic);
    if (topic) help.query = ''; // A selected search result opens its article, not the result list again.
    const search = U.field({ label: H('search'), type: 'search', value: help.query || '', key: 'help-search' });
    search.input.placeholder = H('searchPlaceholder');
    const resultCount = el('p', { class: 'pa-help-count', role: 'status', 'aria-live': 'polite' });
    const body = el('div', { class: 'pa-help-reading' });
    const indexLink = U.link(H('allTopics'), '#/help', { active: !topic, key: 'help-topic:all' });
    const navigation = el('nav', { class: 'pa-help-index', 'aria-label': H('onThisPage') }, indexLink,
      ...groups.map(group => el('section', {}, el('h2', {}, H('group.' + group)), ...PA.helpData.topics.filter(t => t.group === group).map(t =>
        U.link(PA.t(t.title), '#/help/' + t.id, { active: topic?.id === t.id, key: 'help-topic:' + t.id })) )));
    const mobileIndex = el('details', { class: 'pa-help-mobile-index' }, el('summary', {}, H('onThisPage')),
      el('nav', { 'aria-label': H('onThisPage') }, U.link(H('allTopics'), '#/help'), ...PA.helpData.topics.map(t => U.link(PA.t(t.title), '#/help/' + t.id, { active: topic?.id === t.id }))));
    function cards(list) {
      return el('div', { class: 'pa-help-topic-grid' }, ...list.map(t => el('a', { href: '#/help/' + t.id, class: 'pa-help-topic-card', dataset: { helpTopic: t.id } },
        el('small', { class: 'pa-eyebrow' }, H('group.' + t.group)), el('h2', {}, PA.t(t.title)), rich(t.intro), el('span', { 'aria-hidden': 'true', class: 'pa-help-arrow' }, '\u2192'))));
    }
    function article(t) {
      const route = topicRoute(app, t);
      const open = button(route ? H('openTask') : H('openLibrary'), () => {
        if (t.route === 'print' && app.activeId) return PA.openPrint(app);
        return app.go(route || '#/library');
      }, { key: 'help-open-workspace', icon: 'arrow' });
      return el('article', { class: 'pa-help-article', 'aria-labelledby': 'help-article-title' },
        el('p', { class: 'pa-eyebrow' }, H('group.' + t.group)), el('h1', { id: 'help-article-title' }, PA.t(t.title)), rich(t.intro, 'p', { class: 'pa-help-lede' }),
        route ? open : stack(U.muted(H('needsCharacter')), open),
        el('ol', { class: 'pa-help-tasks' }, ...t.tasks.map((task, i) => el('li', {}, el('span', { class: 'pa-help-task-number', 'aria-hidden': 'true' }, String(i + 1).padStart(2, '0')), el('section', {}, el('h2', {}, PA.t(task.title)), rich(task.body))))),
        el('footer', { class: 'pa-help-article-footer' }, U.link(H('backTopics'), '#/help'), el('small', {}, H('guideVersion') + ' ' + PA.VERSION)));
    }
    function update() {
      help.query = search.read(); const q = help.query.trim().toLocaleLowerCase(PA.language);
      const terms = q.split(/\s+/).filter(Boolean);
      const matches = PA.helpData.topics.filter(t => terms.every(term => searchText(t).includes(term)));
      resultCount.textContent = q ? H('results', { n: matches.length }) : '';
      body.replaceChildren(q ? (matches.length ? cards(matches) : U.notice(H('noResults'))) : topic ? article(topic) : cards(PA.helpData.topics));
      U.prepareView(body);
    }
    search.input.addEventListener('input', update);
    const clear = button(PA.t('action.clear'), () => { search.input.value = ''; update(); search.input.focus(); }, { key: 'help-search-clear' });
    update();
    const intro = el('header', { class: 'pa-help-hero' }, el('div', {}, el('p', { class: 'pa-eyebrow' }, H('title')), el(topic ? 'h2' : 'h1', {}, H('intro')), el('p', {}, H('description'))),
      el('div', { class: 'pa-help-start' }, button(H(help.canResume ? 'resume' : 'start'), () => help.start({ resume: help.canResume }), { kind: 'primary', key: 'help-start', icon: 'play' }),
        help.canResume ? button(H('restart'), () => help.start(), { key: 'help-restart' }) : null,
        el('small', {}, help.canResume ? H('welcomeBack') : H('bannerBody'))));
    return el('div', { class: 'pa-help-workspace' }, intro, row(search.node, clear), resultCount, mobileIndex,
      el('div', { class: 'pa-help-layout' }, navigation, body));
  }

  class HelpController {
    constructor(app) {
      this.app = app; this.key = 'pa:tutorial:v1:' + app.scope; this.running = false; this.query = ''; this.disposed = false;
      this.saved = this.read(); this.state = { ...this.saved }; this.target = null; this.signature = ''; this.expanded = true;
      this.host = el('aside', { id: 'pa-tutorial', class: 'pa-tour', role: 'region', 'aria-label': H('tourLabel'), hidden: true });
      document.body.append(this.host);
      this.cleanups = [];
      this.listen(window, 'resize', () => { this.layout(); this.revealTargetSoon(); });
      this.listen(window, 'scroll', () => this.scheduleLayout(), { passive: true });
      if (window.visualViewport) { this.listen(window.visualViewport, 'resize', () => { this.layout(); this.revealTargetSoon(); }); this.listen(window.visualViewport, 'scroll', () => this.scheduleLayout(), { passive: true }); }
      this.listen(document, 'focusin', event => { if (this.running && !this.host.contains(event.target)) requestAnimationFrame(() => this.keepFocusedVisible(event.target)); });
      this.listen(this.host, 'keydown', event => {
        if (event.key === 'Escape' && !app.dialogs.open) { event.preventDefault(); event.stopPropagation(); this.close(); }
      });
      this.resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(() => this.scheduleLayout()) : null;
      this.resizeObserver?.observe(this.host);
    }
    listen(target, type, fn, opts) { target.addEventListener(type, fn, opts); this.cleanups.push(() => target.removeEventListener(type, fn, opts)); }
    read() {
      try {
        const raw = JSON.parse(this.app.storage?.getItem(this.key) || 'null');
        if (raw?.version !== 1) return {};
        return { version: 1, dismissed: !!raw.dismissed, completed: !!raw.completed,
          branch: ['create', 'import', 'existing'].includes(raw.branch) ? raw.branch : null,
          step: PA.helpData.steps.some(s => s.id === raw.step) ? raw.step : 'choose',
          characterId: typeof raw.characterId === 'string' ? raw.characterId : null,
          observed: raw.observed === 'roll' || raw.observed === 'export' ? raw.observed : null };
      } catch { return {}; }
    }
    persist() {
      this.state.version = 1; this.saved = { ...this.state };
      try { this.app.storage?.setItem(this.key, JSON.stringify(this.saved)); } catch { /* Tutorial storage must never block a save. */ }
    }
    get canResume() { return !!this.saved.step && !this.saved.completed; }
    get sequence() { return ['choose', ...(this.state.branch === 'import' ? ['import', 'open'] : this.state.branch === 'existing' ? ['open'] : ['create']), ...common]; }
    get step() { return this.state.step || 'choose'; }
    get characterExists() { return !!this.state.characterId && this.app.library.ids.includes(this.state.characterId); }
    get followsCharacter() { return this.characterExists && this.app.activeId === this.state.characterId && !!this.app.route.characterId; }
    get revisitingCreation() { return this.step === 'create' && this.characterExists; }
    get data() { const data = PA.helpData.steps.find(s => s.id === (this.revisitingCreation ? 'open' : this.step)); return this.step === 'open' && this.followsCharacter ? { ...data, instruction: 'help.openDone', control: 'help.openControl' } : data; }
    async start({ resume = false } = {}) {
      await this.app.saveBarrier('tutorial-start');
      if (this.app.dialogs.open && !await this.app.dialogs.closeAll('tutorial-start')) return;
      this.returnFocus = U.focusSnapshot(); this.returnElement = document.activeElement;
      this.state = resume ? { ...this.saved } : { version: 1, dismissed: true, completed: false, branch: null, step: 'choose', characterId: null, observed: null };
      if (common.includes(this.step) && this.step !== 'finish' && !this.characterExists) this.state.step = this.app.library.ids.length ? 'open' : 'choose';
      if (!this.sequence.includes(this.step)) this.state.step = 'choose';
      this.running = true; this.expanded = true; this.signature = ''; this.persist();
      try { await this.navigateToStep(); this.draw(true); this.focusTitle(); }
      catch (error) { this.close({ restore: false }); throw error; }
    }
    async choose(branch) {
      if (!['create', 'import', 'existing'].includes(branch)) return;
      await this.app.saveBarrier('tutorial-path');
      this.state.branch = branch; this.state.characterId = null;
      this.state.step = branch === 'existing' ? 'open' : branch; this.persist();
      await this.navigateToStep(); this.draw(true); this.focusTitle();
    }
    routeForStep() {
      if (['choose', 'create', 'import', 'open'].includes(this.step)) return '#/library';
      if (!this.characterExists) return '#/library';
      const view = ['identity', 'abilities', 'vitals'].includes(this.step) ? 'edit/' + this.step : 'play';
      return this.app.characterRoute(view, this.state.characterId);
    }
    async navigateToStep() { this.moving = true; try { await this.app.go(this.routeForStep()); } finally { this.moving = false; } }
    async move(direction, { skip = false } = {}) {
      if (this.app.dialogs.open) return;
      await this.app.saveBarrier('tutorial-step');
      if (this.step === 'finish' && direction > 0) { await this.finish(); return; }
      if (direction > 0 && !skip && !this.canContinue()) return;
      const before = { ...this.state }, i = this.sequence.indexOf(this.step);
      let next = this.sequence[Math.max(0, Math.min(this.sequence.length - 1, i + direction))];
      if (skip && direction > 0 && !this.characterExists && ['create', 'import', 'open'].includes(this.step)) next = 'finish';
      this.state.step = next; this.state.observed = null; this.expanded = true;
      try { await this.navigateToStep(); this.persist(); this.draw(true); this.focusTitle(); }
      catch (error) { this.state = before; this.draw(true); throw error; }
    }
    canContinue() {
      if (this.app.dialogs.open || this.step === 'choose') return false;
      if (this.step === 'create') return this.characterExists;
      if (this.step === 'import') return false; // Only successful actual import advances to Open.
      if (this.step === 'open') return this.followsCharacter;
      if (this.step !== 'finish' && !this.followsCharacter) return false;
      return true;
    }
    async finish() {
      await this.app.saveBarrier('tutorial-finish');
      this.state.completed = true; this.close({ restore: false });
      this.query = ''; await this.app.go('#/help'); this.app.live.textContent = H('completed');
    }
    close({ restore = true, skipped = false } = {}) {
      const focusWasInside = this.host.contains(document.activeElement);
      const focusTarget = this.target;
      this.running = false; this.state.dismissed = true; if (skipped) this.state.completed = true;
      this.persist(); this.clearTarget(); this.host.hidden = true; this.host.removeAttribute('data-dialog');
      document.body.append(this.host); document.documentElement.removeAttribute('data-tutorial');
      document.documentElement.style.removeProperty('--pa-tour-space'); this.signature = '';
      if (restore && focusWasInside) {
        if (!safeFocus(focusTarget) && !safeFocus(this.returnElement) && !U.restoreFocus(this.returnFocus))
          safeFocus(this.app.header.querySelector('[data-focus-key="help-entry"]')) || safeFocus(this.app.main);
      }
    }
    dismissBanner() { this.state.dismissed = true; this.persist(); this.app.main.querySelector('[data-help-welcome]')?.remove(); safeFocus(this.app.main.querySelector('[data-focus-key="library-create"]')); }
    addBanner() {
      if (this.running || this.saved.dismissed || !this.app.ready || this.app.route.kind !== 'library' || this.app.main.querySelector('[data-help-welcome]')) return;
      this.app.main.prepend(el('section', { class: 'pa-help-welcome', dataset: { helpWelcome: 'true' }, 'aria-labelledby': 'pa-help-welcome-title' },
        el('div', {}, el('h2', { id: 'pa-help-welcome-title' }, H('bannerTitle')), el('p', {}, H('bannerBody'))),
        row(button(H('start'), () => this.start(), { key: 'welcome-start', kind: 'primary' }), button(H('notNow'), () => this.dismissBanner(), { key: 'welcome-dismiss', kind: 'ghost' }))));
    }
    afterRender() {
      this.addBanner(); if (!this.running) return;
      if (this.app.route.kind === 'help' && !this.moving) { this.close({ restore: false }); return; }
      if (this.step === 'open' && this.app.route.characterId) { this.state.characterId = this.app.activeId; this.persist(); }
      this.draw();
    }
    // Notifications happen after successful application operations, never before confirmation.
    created(id) {
      if (!this.running || this.step !== 'create') return;
      this.expanded = true; this.state.characterId = id; this.state.step = 'identity'; this.state.observed = null; this.persist(); this.draw(true); this.focusTitle();
    }
    imported() { if (!this.running || this.step !== 'import') return; this.state.step = 'open'; this.state.characterId = null; this.persist(); this.draw(true); this.focusTitle(); }
    observed(kind) { if (!this.running || (kind === 'roll' ? this.step !== 'dice' : this.step !== 'export')) return; this.state.observed = kind; this.persist(); this.schedule(); }
    schedule() { if (!this.running || this.disposed || this.frame) return; this.frame = requestAnimationFrame(() => { this.frame = null; this.draw(); }); }
    scheduleLayout() { if (!this.running || this.disposed || this.layoutFrame) return; this.layoutFrame = requestAnimationFrame(() => { this.layoutFrame = null; this.layout(); }); }
    dialogChanged() { this.schedule(); }
    onCorrectScreen() {
      if (this.step === 'sections') return this.followsCharacter;
      if (this.step === 'open' && this.followsCharacter) return true;
      return this.app.route.hash === this.routeForStep();
    }
    resolveTarget() {
      const modal = this.app.dialogs.current?.node, root = modal || this.app.root;
      const key = value => [...root.querySelectorAll('[data-focus-key]')].find(n => n.dataset.focusKey === value && !this.host.contains(n) && visible(n));
      const byText = token => [...root.querySelectorAll('button,a')].find(n => !this.host.contains(n) && visible(n) && n.textContent.trim() === PA.t(token));
      if (modal) {
        if (this.step === 'create' && !this.revisitingCreation) return key('create-blank') || key('form:new-character:name') || null;
        if (this.step === 'import') {
          if (modal.querySelector('h2')?.textContent === PA.t('import.preview')) return byText('action.import') || modal.querySelector('.pa-dialog-body > .pa-stack');
          return key('import-json') || byText('action.chooseFile');
        }
        if (this.step === 'dice') return key('dice-expression');
        if (this.step === 'export') return byText('backup.exportCharacter') || (modal.querySelector('h2')?.textContent === PA.t('backup.coverage') ? byText('action.export') : null);
        if (this.step === 'sections' && modal.querySelector('h2')?.textContent === PA.t('nav.more')) return byText('nav.map');
        return null;
      }
      if (!this.onCorrectScreen()) return null;
      if (this.step === 'choose' || this.step === 'create' && !this.revisitingCreation) return key('library-create');
      if (this.step === 'import') return key('library-import') || byText('action.import');
      if (this.step === 'open' || this.revisitingCreation) return this.followsCharacter ? key('nav:play') : (this.characterExists ? key('open:' + this.state.characterId) : [...root.querySelectorAll('[data-focus-key^="open:"]')].find(visible));
      if (this.step === 'identity') return key('field:name');
      if (this.step === 'abilities') return key('field:abilities.str.score');
      if (this.step === 'vitals') return key('field:hp.max');
      if (this.step === 'play') return key('damage-amount');
      if (this.step === 'dice') return key('open-dice');
      if (this.step === 'sections') return key('nav:spells');
      if (this.step === 'export') return key('more') || key('nav:more');
      if (this.step === 'finish') return key('help-entry');
      return null;
    }
    clearTarget() {
      if (!this.target) return;
      this.target.classList.remove('pa-tutorial-target');
      if (this.targetTabIndex === null && this.target.getAttribute('tabindex') === '-1') this.target.removeAttribute('tabindex');
      const tokens = (this.target.getAttribute('aria-describedby') || '').split(/\s+/).filter(t => t && t !== 'pa-tour-target-description');
      if (tokens.length) this.target.setAttribute('aria-describedby', tokens.join(' ')); else this.target.removeAttribute('aria-describedby');
      this.target = null;
    }
    updateTarget() {
      const next = this.resolveTarget();
      if (next === this.target) return;
      this.clearTarget(); this.target = next; this.targetTabIndex = next?.getAttribute('tabindex');
      if (next) { next.classList.add('pa-tutorial-target'); const old = next.getAttribute('aria-describedby'); next.setAttribute('aria-describedby', (old ? old + ' ' : '') + 'pa-tour-target-description'); }
    }
    draw(force = false) {
      if (!this.running || this.disposed) return;
      const modal = this.app.dialogs.current;
      const signature = [this.step, this.state.branch, this.state.characterId, this.characterExists, this.app.route.hash, modal?.token, PA.language, this.app.canEdit, this.state.observed, this.expanded, this.app.library.ids.join('|')].join(':');
      if (!force && this.signature === signature && this.host.isConnected) { this.updateTarget(); this.layout(); return; }
      const focus = this.host.contains(document.activeElement) ? document.activeElement.dataset.focusKey : null;
      const reveal = this.revealSignature !== [this.step, this.app.route.hash, modal?.token].join(':');
      this.revealSignature = [this.step, this.app.route.hash, modal?.token].join(':');
      this.signature = signature; this.clearTarget(); const data = this.data;
      this.host.hidden = false; this.host.dataset.step = this.step; this.host.setAttribute('aria-label', H('tourLabel'));
      if (modal && this.lastDialog !== modal.token) this.expanded = false;
      this.lastDialog = modal?.token;
      this.host.dataset.dialog = modal ? 'true' : 'false'; this.host.dataset.expanded = String(this.expanded);
      (modal?.body || document.body).prepend(this.host);
      document.documentElement.dataset.tutorial = modal ? 'dialog' : 'docked';
      const n = this.sequence.indexOf(this.step) + 1, total = this.sequence.length;
      const progressText = H('progress', { n, total });
      const title = el('h2', { id: 'pa-tour-title', tabindex: '-1' }, PA.t(data.title));
      const toggle = button(H(this.expanded ? 'collapse' : 'expand'), () => { this.expanded = !this.expanded; this.draw(true); }, { key: 'tour-toggle', icon: 'chevron', iconOnly: true });
      toggle.setAttribute('aria-expanded', String(this.expanded)); toggle.setAttribute('aria-controls', 'pa-tour-explanation');
      const header = el('header', { class: 'pa-tour-header' }, el('div', {}, el('p', { class: 'pa-eyebrow', role: 'status', 'aria-live': 'polite' }, progressText), title), toggle,
        button(H('closeTour'), () => this.close(), { key: 'tour-close', icon: 'close', iconOnly: true }));
      const instruction = rich(data.instruction, 'p', { class: 'pa-tour-instruction', id: 'pa-tour-target-description' });
      const explanation = el('div', { class: 'pa-tour-explanation', id: 'pa-tour-explanation', hidden: !this.expanded },
        el('p', { class: 'pa-tour-why' }, plain(data.why)),
        el('div', { class: 'pa-tour-success' }, el('strong', {}, H('expected')), rich(data.expected)));
      const targetHint = el('p', { class: 'pa-tour-control' }, el('strong', {}, H('control') + ': '), rich(data.control, 'span'));
      const unavailable = !this.app.canEdit && ['choose', 'create', 'import', 'identity', 'abilities', 'vitals', 'play'].includes(this.step);
      const warnings = el('div', { class: 'pa-tour-notices' });
      if (unavailable) warnings.append(U.notice(H('readonly')));
      if (this.state.characterId && this.app.route.characterId && this.app.activeId !== this.state.characterId) warnings.append(U.notice(H('otherCharacter')));
      if (this.state.observed) warnings.append(el('p', { class: 'pa-tour-observed', role: 'status' }, H(this.state.observed === 'export' ? 'exportObserved' : 'observed')));
      const choices = this.step === 'choose' ? stack(
        button(H('chooseCreate'), () => this.choose('create'), { kind: 'primary', key: 'tour-path-create', disabled: !this.app.canEdit }),
        button(H('chooseImport'), () => this.choose('import'), { key: 'tour-path-import', disabled: !this.app.canEdit }),
        this.app.library.ids.length ? button(H('chooseExisting'), () => this.choose('existing'), { key: 'tour-path-existing' }) : null) : null;
      const show = button(H('show'), () => this.showTarget(), { key: 'tour-show', icon: 'arrow' });
      const back = button(H('back'), () => this.move(-1), { key: 'tour-back', disabled: n <= 1 || !!modal });
      const next = button(H(this.step === 'finish' ? 'finish' : 'next'), () => this.move(1), { kind: 'primary', key: 'tour-next', disabled: !this.canContinue() });
      const skip = button(H(this.step === 'choose' ? 'skipTour' : 'skipStep'), () => this.step === 'choose' ? this.close({ skipped: true }) : this.move(1, { skip: true }), { key: 'tour-skip', kind: 'ghost', disabled: !!modal || this.step === 'finish' });
      const restart = button(H('restart'), () => this.start(), { key: 'tour-restart', kind: 'ghost', disabled: !!modal });
      const body = el('div', { class: 'pa-tour-body' }, instruction, explanation, choices, targetHint, warnings);
      const toolbar = el('div', { class: 'pa-tour-target-actions' }, show);
      this.host.replaceChildren(...[header, el('progress', { max: total, value: n, 'aria-label': progressText }), body, toolbar,
        modal ? el('p', { class: 'pa-tour-dialog-note' }, H('continueDialog')) : null,
        el('footer', { class: 'pa-tour-footer' }, row(back, next), row(skip, restart))].filter(Boolean));
      this.updateTarget(); show.disabled = !this.target;
      if (!this.target && this.step !== 'choose' && !unavailable) {
        warnings.append(el('p', {}, H(modal ? 'continueDialog' : 'missing')));
        if (!modal) toolbar.append(button(H('return'), async () => { await this.navigateToStep(); this.draw(true); this.showTarget(); }, { key: 'tour-return' }));
      }
      U.prepareView(this.host); this.layout();
      if (reveal) this.revealTargetSoon();
      if (focus) safeFocus([...this.host.querySelectorAll('[data-focus-key]')].find(n => n.dataset.focusKey === focus));
    }
    focusTitle() { if (this.running && !this.app.dialogs.open) safeFocus(this.host.querySelector('h2')); }
    layout() {
      if (!this.running) return;
      const viewport = window.visualViewport, height = viewport?.height || innerHeight;
      this.host.style.setProperty('--pa-tour-viewport', Math.max(160, height) + 'px');
      this.host.dataset.smallViewport = String(height < 480);
      if (this.app.dialogs.open) { document.documentElement.style.setProperty('--pa-tour-space', '0px'); return; }
      // Very short viewports use an inline companion so every action stays reachable.
      document.documentElement.dataset.tutorial = height < 480 ? 'inline' : 'docked';
      const bottom = !this.app.bottom.hidden && getComputedStyle(this.app.bottom).display !== "none" ? this.app.bottom.getBoundingClientRect().height : 0;
      this.host.style.setProperty('--pa-tour-bottom', bottom + 'px');
      const keyboardInset = Math.max(0, innerHeight - height - (viewport?.offsetTop || 0));
      this.host.style.setProperty('--pa-tour-keyboard', keyboardInset + 'px');
      document.documentElement.style.setProperty('--pa-tour-space', (height < 480 ? 0 : this.host.getBoundingClientRect().height + bottom + 32) + 'px');
    }
    revealTargetSoon() {
      if (this.revealFrame) cancelAnimationFrame(this.revealFrame);
      this.revealFrame = requestAnimationFrame(() => {
        this.revealFrame = null;
        if (!this.running || this.disposed) return;
        this.updateTarget(); const node = this.target;
        if (!visible(node) || node.closest('.pa-bottom-nav')) return;
        if (this.app.dialogs.open) {
          // Leave form focus alone; scroll only the dialog body when necessary.
          const r = node.getBoundingClientRect(), body = this.app.dialogs.current.body;
          const b = body.getBoundingClientRect();
          if (r.top < b.top || r.bottom > b.bottom) node.scrollIntoView({ block: 'center', behavior: 'instant' });
        } else {
          const r = node.getBoundingClientRect();
          if (r.top < 12 || r.bottom > innerHeight - 16) node.scrollIntoView({ block: 'center', behavior: 'instant' });
          this.keepFocusedVisible(node);
        }
      });
    }
    keepFocusedVisible(node) {
      if (!this.running || this.app.dialogs.open || !visible(node) || innerWidth >= 1400 || this.host.contains(node)) return;
      const r = node.getBoundingClientRect(), p = this.host.getBoundingClientRect();
      if (r.bottom > p.top - 12 && r.top < p.bottom && r.left < p.right && r.right > p.left && !node.closest('.pa-bottom-nav'))
        window.scrollBy({ top: r.bottom - p.top + 28, behavior: 'instant' });
    }
    showTarget() {
      this.updateTarget(); if (!this.target) { this.draw(true); return; }
      // A visible outline belongs to the real element; no intercepting overlay.
      this.target.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' });
      safeFocus(this.target); this.keepFocusedVisible(this.target);
    }
    dispose() {
      if (this.running) this.close({ restore: false });
      this.disposed = true; cancelAnimationFrame(this.frame); cancelAnimationFrame(this.layoutFrame); cancelAnimationFrame(this.revealFrame);
      this.resizeObserver?.disconnect(); this.cleanups.forEach(fn => fn()); this.host.remove();
    }
  }
  PA.HelpController = HelpController; PA.helpRichText = rich; PA.helpPlainText = plain;
  PA.workspaces.help = guide;
})(globalThis.PlayerAlmanac);
