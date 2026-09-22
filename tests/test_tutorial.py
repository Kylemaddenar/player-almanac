#!/usr/bin/env python3
"""Run isolated Chromium UI/interaction tests with in-memory storage adapters.
Usage: python tests/test_tutorial.py --browser /usr/bin/chromium --output test-results
Requires Python playwright and a compatible Chromium executable. No user profile
or existing Library is opened. Native persistence, installation, online services,
physical printing and completed browser downloads are NOT verified by this suite.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import argparse, json, traceback, time
from support import mount, ROOT

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--browser', default='/usr/bin/chromium')
parser.add_argument('--output', type=Path, default=Path('test-results'))
parser.add_argument('--case', default='', help='Run only one named case; empty runs all')
args=parser.parse_args();args.output.mkdir(parents=True,exist_ok=True)
results=[];errors=[];shots=[]

def check(condition, name, detail=''):
    results.append({'check':name, 'passed':bool(condition), 'detail':detail})
    print(('PASS ' if condition else 'FAIL ')+name, flush=True)
    if not condition: raise AssertionError(name+': '+str(detail))

def key(p,k): return p.locator('[data-focus-key='+json.dumps(k)+']')
def settle(p): p.wait_for_timeout(100)
def step(p,s): p.wait_for_function('(s)=>app.help.step===s',arg=s);settle(p)
def t(p,k): return p.evaluate('(k)=>PlayerAlmanac.t(k)',k)
def snapshot(p): return p.evaluate('async()=>{const l=await app.repo.readLibrary();return JSON.stringify({ids:l.ids,revision:l.revision,records:l.records});}')
def screenshot(p,name,full=False):
    p.screenshot(path=str(args.output/(name+'.png')), full_page=full);shots.append(name+'.png')
def create(p,name='Test Rowan'):
    if p.evaluate('app.route.kind')!='library':p.evaluate('app.go("#/library")')
    key(p,'library-create').click();key(p,'create-blank').click()
    key(p,'form:new-character:name').fill(name)
    key(p,'form:new-character:class').fill('Wizard')
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'action.create'),exact=True).click()
    p.wait_for_function('!!app.activeId && !app.dialogs.open');settle(p)
    return p.evaluate('app.activeId')
def enter(p,path,value):
    key(p,'field:'+path).fill(str(value));key(p,'field:'+path).press('Tab');settle(p)
def guide(p,topic=''):
    p.evaluate('(topic)=>app.go("#/help"+(topic?"/"+topic:""))',topic);settle(p)
def tour(p,branch='existing'):
    guide(p);key(p,'help-start').click();key(p,'tour-path-'+branch).click();settle(p)
def open_card(p,id):key(p,'open:'+id).click();settle(p)
def next_step(p,expected):key(p,'tour-next').click();step(p,expected)
def no_overlap(p):
    return p.evaluate('''()=>{const t=app.help.target,p=app.help.host;if(!t)return false;const a=t.getBoundingClientRect(),b=p.getBoundingClientRect();return a.bottom<=b.top||a.top>=b.bottom||a.right<=b.left||a.left>=b.right;}''')

def landing(p):
    check(p.evaluate('app.library.ids.length')==0,'Fresh Library is empty')
    check(key(p,'welcome-start').is_visible(),'First-use offer is visible and optional')
    check(not p.locator('#pa-tutorial').is_visible(),'No forced walkthrough overlay at boot')
    before=snapshot(p);key(p,'welcome-dismiss').click();check(snapshot(p)==before,'Dismissing offer leaves Library unchanged')
    check(key(p,'help-entry').is_visible(),'Persistent Help entry exists without a character')
    guide(p);check(p.locator('[data-help-topic]').count()==26,'All 26 task topics are reachable')
    key(p,'help-start').click();step(p,'choose');key(p,'tour-skip').click()
    check(not p.locator('#pa-tutorial').is_visible(),'Skip walkthrough closes it')
    check(snapshot(p)==before,'Starting/skipping never creates sample records')
    screenshot(p,'library-after-skip')

def creation(p):
    key(p,'welcome-start').click();key(p,'tour-path-create').click();step(p,'create')
    check(not key(p,'tour-next').is_enabled(),'Create step waits for a real creation')
    ident=create(p);step(p,'identity')
    check(p.evaluate('app.help.state.characterId')==ident,'Successful creation advances to its actual identity screen')
    check(p.evaluate('app.help.target?.dataset.focusKey')=='field:name','Identity points to the real Character name field')
    original=snapshot(p);key(p,'tour-back').click();step(p,'create')
    check(p.evaluate('app.help.data.id')=='open','Back after creation teaches opening, not creating another copy')
    check(p.evaluate('app.library.ids.length')==1,'Back does not duplicate the created character')
    next_step(p,'identity');next_step(p,'abilities')
    check(p.evaluate('app.help.target?.dataset.focusKey')=='field:abilities.str.score','Ability target resolves to actual score')
    enter(p,'abilities.str.score',16)
    check(p.evaluate('PlayerAlmanac.commands.selectors(app.controller.state).mod("str")')==3,'Real ability edit commits and derives +3')
    next_step(p,'vitals');enter(p,'hp.max',20);enter(p,'hp.cur',20);enter(p,'level',4)
    check(p.evaluate('app.state.hd.max')==4,'Level automatically updates total hit dice, as taught')
    next_step(p,'play');check(p.evaluate('app.state.hp.cur')==20,'Tutorial does not demonstrate damage by changing HP')
    key(p,'damage-amount').fill('3');key(p,'apply-damage').click();settle(p)
    check(p.evaluate('app.state.hp.cur')==17,'Normal Damage control works during walkthrough')
    key(p,'undo').click();settle(p);check(p.evaluate('app.state.hp.cur')==20,'Undo still restores the real action')
    next_step(p,'dice');before=snapshot(p);key(p,'open-dice').click();settle(p)
    check(p.locator('dialog #pa-tutorial').count()==1,'Companion joins existing native dialog')
    key(p,'dice-expression').fill('1d20');p.locator('dialog .pa-dialog-body').get_by_role('button',name=t(p,'dice.roll'),exact=True).click();settle(p)
    check(p.evaluate('app.help.state.observed')=='roll','Real dice result is detected')
    check(snapshot(p)==before,'Practice roll does not mutate character record')
    p.evaluate('app.dialogs.close()');settle(p)
    next_step(p,'sections');key(p,'nav:spells').first.click();settle(p)
    check(p.evaluate('app.route.kind')=='spells','Section navigation remains usable')
    next_step(p,'export');p.evaluate('()=>{window.testDownloads=[];PlayerAlmanac.ui.download=(name,data)=>testDownloads.push({name,data});}')
    key(p,'more').click();p.locator('dialog').get_by_role('button',name=t(p,'backup.exportCharacter'),exact=True).click();settle(p)
    check(p.locator('dialog > header h2').inner_text()==t(p,'backup.coverage'),'Export retains the Backup coverage review')
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'action.export'),exact=True).click();settle(p)
    check(p.evaluate('testDownloads.length')==1,'Existing exporter serialized a file for the download adapter')
    check(p.evaluate('testDownloads[0].data.schema.name==="player-almanac-sheet" && testDownloads[0].data.schema.version===1 && testDownloads[0].data.app.stateVersion===4'),'Export preserves sheet-v1 and state-version-4 metadata')
    check(p.evaluate('app.help.state.observed')=='export','Companion reports download requested, not externally verified')
    check('saved' in p.locator('#pa-tutorial').inner_text().lower(),'Backup completion wording asks user to verify saved file')
    next_step(p,'finish');screenshot(p,'walkthrough-finish-desktop');key(p,'tour-next').click();settle(p)
    check(p.evaluate('app.route.kind')=='help' and not p.evaluate('app.help.running'),'Finish opens persistent Help')
    check(p.evaluate('app.help.saved.completed'),'Completion metadata is separate from character state')
    check(p.evaluate('app.library.ids.length')==1,'Full create path created exactly one user-requested record')


def imports(p):
    key(p,'welcome-start').click();key(p,'tour-path-import').click();step(p,'import')
    check(p.evaluate('!app.help.sequence.includes("create")'),'Import path excludes creation step')
    key(p,'library-import').click();key(p,'import-json').fill('{invalid')
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'import.preview'),exact=True).click();settle(p)
    check(p.evaluate('app.library.ids.length')==0 and p.evaluate('app.help.step')=='import','Invalid JSON neither imports nor advances')
    # The canonical exporter uses schema:{name,version}, app.stateVersion and data.
    contract=p.evaluate("()=>({schema:{name:'player-almanac-sheet',version:1},app:{stateVersion:4},data:{...PlayerAlmanac.compat.makeBaseDefaults(),name:'Imported Aster',class:'Ranger'}})")
    parsed=p.evaluate('(q)=>PlayerAlmanac.interchange.parseImport(JSON.stringify(q))',contract)
    check(len(parsed['entries'])==1 and not parsed['problems'],'Canonical sheet-v1 fixture is accepted without parser problems')
    check(parsed['entries'][0]['payload']['name']=='Imported Aster','Import fixture matches the implemented sheet-v1 contract')
    key(p,'import-json').fill(json.dumps(contract));p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'import.preview'),exact=True).click();settle(p)
    check(p.evaluate('app.dialogs.stack.length')==2,'Import preview remains a nested native dialog')
    check(p.evaluate('app.library.ids.length')==0,'Preview alone does not import records')
    check(p.locator('dialog').last.inner_text().find(t(p,'import.add'))>=0,'Add as new characters remains the default')
    checks=p.locator('dialog').last.locator('input[type=checkbox]')
    # Only acknowledge the normalization list, when the fixture needs it.
    for i in range(checks.count()):
        label=checks.nth(i).evaluate('(n)=>n.closest(".pa-field")?.textContent||""')
        if 'adjust' in label.lower() or 'accept' in label.lower():checks.nth(i).check()
    p.locator('dialog').last.locator('.pa-dialog-footer').get_by_role('button',name=t(p,'action.import'),exact=True).click();step(p,'open')
    check(p.evaluate('app.route.kind')=='library' and p.evaluate('app.library.ids.length')==1,'Successful import advances to Open in the Library')
    ident=p.evaluate('app.library.ids[0]');open_card(p,ident)
    check(t(p,'nav.play') in p.locator('#pa-tutorial').inner_text(),'Open success uses state-aware Play instructions')
    next_step(p,'identity');check(key(p,'field:name').input_value()=='Imported Aster','Imported values are preserved')
    before=snapshot(p);key(p,'tour-restart').click();step(p,'choose')
    check(snapshot(p)==before,'Restarting after import preserves imported record')
    screenshot(p,'import-path-completed')


def existing(p):
    ident=create(p,'Existing Rowan');before=snapshot(p);tour(p);open_card(p,ident);next_step(p,'identity')
    for expected in ['abilities','vitals','play','dice','sections','export','finish']:next_step(p,expected)
    check(snapshot(p)==before,'Review-only existing-character path changes no payload, revision, media refs or Library membership')
    key(p,'tour-close').click();check(not p.evaluate('app.help.running'),'Close preserves resumable place')
    guide(p);check(key(p,'help-restart').is_visible(),'Restart and resume are available from Help')
    key(p,'help-restart').click();step(p,'choose');check(snapshot(p)==before,'Restart instructions does not reset character data')


def interruption(p):
    ident=create(p);tour(p);open_card(p,ident);next_step(p,'identity');next_step(p,'abilities');before=snapshot(p)
    p.evaluate('''async()=>{await app.dispose();window.app=new PlayerAlmanac.Application(testOptions);await app.boot();}''');settle(p)
    check(not p.evaluate('app.help.running'),'Interrupted session does not force an overlay on remount')
    guide(p);check(key(p,'help-start').inner_text()==t(p,'help.resume'),'Help offers resume after adapter-backed remount')
    key(p,'help-start').click();step(p,'abilities')
    check(p.evaluate('app.activeId')==ident,'Resume returns to selected character and step')
    check(snapshot(p)==before,'Resuming does not alter character data')
    key(p,'tour-close').click()
    p.evaluate('()=>{testStorage.setItem=(k,v)=>{if(k.startsWith("pa:tutorial:"))throw new Error("test storage failure");testStorage.data.set(k,String(v));};}')
    guide(p);key(p,'help-restart').click();key(p,'tour-close').click()
    check(snapshot(p)==before,'Unavailable tutorial preference storage does not block or mutate work')


def navigation(p):
    first=create(p,'First');p.evaluate('app.go("#/library")');second=create(p,'Second');tour(p);open_card(p,first);next_step(p,'identity');before=snapshot(p)
    p.evaluate('(id)=>app.go(app.characterRoute("play",id))',second);settle(p)
    check(not key(p,'tour-next').is_enabled(),'Switching to another character pauses tutorial progression')
    check(p.evaluate('app.help.target===null'),'No unrelated target is highlighted on the other character')
    key(p,'tour-return').click();settle(p)
    check(p.evaluate('app.activeId')==first,'Explicit Return to this step restores intended character')
    p.evaluate('app.go("#/settings")');settle(p);check(key(p,'tour-return').is_visible(),'Unrelated navigation offers a safe return instead of a phantom target')
    key(p,'tour-return').click();settle(p);check(snapshot(p)==before,'Navigating away and back leaves both characters unchanged')
    p.evaluate('window.oldTestToken=app.coordinator.token;app.coordinator.token=null;app.render()');settle(p)
    check('Editing is currently unavailable' in p.locator('#pa-tutorial').inner_text(),'Simulated read-only state is explained')
    check(not key(p,'tour-show').is_enabled(),'Disabled input is not highlighted as usable')
    p.evaluate('app.coordinator.token=window.oldTestToken;app.render()');settle(p)
    key(p,'tour-close').click();check(p.locator('.pa-tutorial-target').count()==0,'Closing removes every highlight')
    check(p.locator('[aria-describedby*="pa-tour-target-description"]').count()==0,'Closing restores target descriptions')


def validation(p):
    ident=create(p);tour(p);open_card(p,ident);next_step(p,'identity');next_step(p,'abilities');next_step(p,'vitals')
    before=snapshot(p);key(p,'field:hp.max').fill('20000');key(p,'tour-next').click();settle(p)
    check(p.evaluate('app.help.step')=='vitals' and p.evaluate('app.route.section')=='vitals','Invalid field still blocks tutorial navigation through the existing save barrier')
    check(snapshot(p)==before,'Invalid HP is not committed as a demonstration value')
    key(p,'field:hp.max').fill('12');key(p,'field:hp.max').press('Tab');settle(p)
    key(p,'tour-next').click();step(p,'play')
    check(p.evaluate('app.state.hp.max')==12,'Correcting the field allows normal continuation')


def help_content(p):
    guide(p);screenshot(p,'help-desktop',True)
    key(p,'help-search').fill('temporary');settle(p)
    check(0<p.locator('[data-help-topic]').count()<26,'Help search filters actual task content')
    p.locator('[data-help-topic="hp"]').click();settle(p)
    check(p.locator('#help-article-title').inner_text()==t(p,'help.topic.hp.title'),'Clicking a search result opens its article')
    check(key(p,'help-search').input_value()=='','Opening a task clears the result query')
    key(p,'help-search').fill('zzzz-unfindable');settle(p)
    check(t(p,'help.noResults') in p.locator('main').inner_text(),'No-match search has a readable explanation')
    key(p,'help-search-clear').click();check(p.locator('#help-article-title').count()==1,'Clearing search restores the task article')
    p.evaluate('app.prefs.set("language","de")');settle(p)
    check(p.locator('html').get_attribute('lang')=='de','Existing language preference translates Help')
    check(p.locator('#help-article-title').inner_text()==t(p,'help.topic.hp.title'),'German task article is localized')
    pairs=p.evaluate('''()=>{const keys=Object.keys(PlayerAlmanac.messages.en).filter(k=>k.startsWith('help.'));return {n:keys.length,missing:keys.filter(k=>!PlayerAlmanac.messages.de[k])};}''')
    check(not pairs['missing'] and pairs['n']>=310,'All 310 tutorial translation keys have German content')
    for lang in ['en','de']:
        p.evaluate('(l)=>app.prefs.set("language",l)',lang);settle(p)
        ids=p.evaluate('PlayerAlmanac.helpData.topics.map(t=>t.id)')
        for id in ids:
            guide(p,id)
            txt=p.locator('main').inner_text()
            check('[[' not in txt and 'help.topic.' not in txt, f'{lang}: {id} has no unresolved label tokens')
    p.set_viewport_size({'width':390,'height':844});guide(p,'hp');screenshot(p,'help-hp-german-phone',True)
    check(p.locator('.pa-help-mobile-index').is_visible(),'Phone guide has compact task navigation')
    p.evaluate('app.prefs.set("language","en")');settle(p)


def keyboard(p):
    key(p,'welcome-start').focus();p.keyboard.press('Enter');step(p,'choose')
    check(p.evaluate('document.activeElement.id')=='pa-tour-title','Starting gives meaningful heading focus')
    key(p,'tour-path-create').focus();p.keyboard.press('Enter');step(p,'create')
    key(p,'tour-show').focus();p.keyboard.press('Enter');check(p.evaluate('document.activeElement.dataset.focusKey')=='library-create','Show control reaches target by keyboard')
    p.keyboard.press('Enter');settle(p)
    check(p.locator('dialog #pa-tutorial').count()==1,'Keyboard-opened native dialog owns companion')
    for _ in range(20):p.keyboard.press('Tab')
    check(p.evaluate('app.dialogs.current.node.contains(document.activeElement)'),'Tab remains within existing native modal trap')
    p.keyboard.press('Escape');settle(p)
    check(not p.evaluate('app.dialogs.open') and p.evaluate('app.help.running'),'Escape closes native dialog without ending walkthrough')
    key(p,'tour-close').focus();p.keyboard.press('Escape');settle(p)
    check(not p.evaluate('app.help.running'),'Escape within nonmodal companion closes instructions')
    check(p.evaluate('document.activeElement.dataset.focusKey')=='library-create','Close restores focus to a usable real control')
    check(not p.evaluate('document.getElementById("pa-app").inert'),'Tutorial never leaves the application inert')


def responsive(p):
    ident=create(p);tour(p);open_card(p,ident);next_step(p,'identity');next_step(p,'abilities');next_step(p,'vitals');enter(p,'hp.max',20);enter(p,'hp.cur',20);next_step(p,'play')
    for width,height in [(1440,1000),(1024,768),(768,1024),(390,844),(320,640),(844,390)]:
        p.set_viewport_size({'width':width,'height':height});settle(p);key(p,'tour-show').click();settle(p)
        check(p.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),f'No horizontal overflow at {width}x{height}')
        check(no_overlap(p),f'Target stays outside companion after resize/show at {width}x{height}')
        check(key(p,'tour-close').is_visible(),f'Close remains available at {width}x{height}')
        check(key(p,'tour-skip').is_visible() and key(p,'tour-restart').is_visible(),f'Skip and Restart remain reachable at {width}x{height}')
        if width in [1440,390,320]:screenshot(p,f'tour-play-{width}')
    p.set_viewport_size({'width':390,'height':844});p.emulate_media(reduced_motion='reduce');settle(p)
    check(p.evaluate('app.reducedMotion'),'System reduced motion is honored')
    check(p.evaluate('getComputedStyle(app.help.host).animationName')=='none','Walkthrough does not animate under reduced motion')
    for theme in ['arcane','ember','forest','ocean','blood','golden','void','frost']:
        p.evaluate('(t)=>app.prefs.set("theme",t)',theme);settle(p)
        check(p.evaluate('document.documentElement.dataset.theme')==theme,f'Existing {theme} theme remains selectable during walkthrough')
    p.evaluate('app.prefs.set("contrast",true)');settle(p)
    check(p.evaluate('document.documentElement.dataset.contrast')=='high','High contrast remains available')
    key(p,'tour-close').click();check(p.evaluate('!document.documentElement.hasAttribute("data-tutorial")'),'Close removes responsive layout reservation')


def dialogs_close(p):
    ident=create(p);tour(p);open_card(p,ident);next_step(p,'identity')
    for name in ['abilities','vitals','play','dice']:next_step(p,name)
    before=snapshot(p);key(p,'open-dice').click();settle(p)
    key(p,'tour-close').click();settle(p)
    check(p.evaluate('app.dialogs.open') and not p.evaluate('app.help.running'),'Closing companion keeps the real dice dialog open')
    check(p.evaluate('app.dialogs.current.node.contains(document.activeElement)'),'Focus stays inside native dialog after companion closes')
    check(snapshot(p)==before,'Closing companion in a dialog changes no character data')
    p.keyboard.press('Escape');settle(p)
    check(not p.evaluate('app.dialogs.open') and not p.evaluate('app.root.inert'),'Original dialog closes cleanly afterward')


def regression(p):
    ident=create(p);tour(p);open_card(p,ident);next_step(p,'identity');next_step(p,'abilities');next_step(p,'vitals')
    enter(p,'hp.max',30);enter(p,'hp.cur',20);enter(p,'hp.tmp',5)
    next_step(p,'play');key(p,'damage-amount').fill('8');key(p,'apply-damage').click();settle(p)
    check(p.evaluate('app.state.hp.tmp===0&&app.state.hp.cur===17'),'Damage uses temporary HP before current HP')
    key(p,'damage-amount').fill('50');key(p,'apply-heal').click();settle(p)
    check(p.evaluate('app.state.hp.cur')==30,'Healing caps at maximum')
    key(p,'undo').click();settle(p);check(p.evaluate('app.state.hp.cur')==17,'Undo works after healing')
    key(p,'redo').click();settle(p);check(p.evaluate('app.state.hp.cur')==30,'Redo reuses committed healing')
    key(p,'tour-close').click();p.evaluate('app.go(app.characterRoute("edit/spellsetup"))');settle(p)
    enter(p,'slots.1.t',2);p.evaluate('app.go(app.characterRoute("spells"))');settle(p)
    spend=p.get_by_role('button',name='Level 1: Spend one slot',exact=True)
    check(spend.count()==1,'Guide describes actual accessible spell-slot control label')
    spend.click();settle(p);check(p.evaluate('app.state.slots[1].e')==1,'Configured spell-slot spend commits normally')
    p.get_by_role('button',name='Level 1: Restore one slot',exact=True).click();settle(p)
    check(p.evaluate('app.state.slots[1].e')==0,'Configured spell-slot restore commits normally')
    p.evaluate('app.go(app.characterRoute("journal"))');settle(p)
    p.get_by_role('button',name='Edit',exact=True).first.click();settle(p)
    p.locator('dialog textarea').fill('Test-only session document.')
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name='Save',exact=True).click();settle(p)
    check('Test-only session document.' in p.locator('main').inner_text(),'Journal explicit Save still applies document')
    p.evaluate('app.go("#/library")');settle(p);key(p,'character-more:'+ident).click();p.locator('dialog').get_by_role('button',name='Duplicate',exact=True).click();settle(p)
    check(p.evaluate('app.library.ids.length')==2,'Library duplication still adds a separate character')
    key(p,'character-more:'+ident).click();p.locator('dialog').get_by_role('button',name='Delete',exact=True).click();settle(p)
    check(p.evaluate('app.dialogs.open'),'Deleting still requires confirmation')
    p.locator('dialog').get_by_role('button',name='Cancel',exact=True).click();settle(p)
    check(p.evaluate('app.library.ids.length')==2,'Cancel deletion preserves both records')


def media_maps(p):
    ident=create(p,'Synthetic media test');before=snapshot(p)
    guide(p,'maps');check(snapshot(p)==before,'Reading map Help does not add maps or media')
    key(p,'help-open-workspace').click();settle(p)
    check(p.get_by_role('button',name=t(p,'map.add'),exact=True).is_visible(),'Map Help opens actual empty map workspace')
    check(p.locator('.pa-map-viewport').count()==0,'Map tools are absent before a map exists, as taught')
    p.evaluate('''async()=>{const c=document.createElement('canvas');c.width=320;c.height=240;const x=c.getContext('2d');x.fillStyle='#999';x.fillRect(0,0,320,240);window.testFile=await new Promise(r=>c.toBlob(b=>r(new File([b],'test-map.png',{type:'image/png'}))));PlayerAlmanac.ui.pickFile=async()=>testFile;}''')
    p.get_by_role('button',name=t(p,'map.add'),exact=True).click();settle(p)
    check(p.evaluate('app.state.campaigns.length')==0,'Staging a map image does not add the map before Save')
    p.locator('dialog input').first.fill('Test atlas')
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'action.save'),exact=True).click();settle(p)
    check(p.evaluate('app.state.campaigns[0].name')=='Test atlas','Map Save commits the named campaign')
    check(p.locator('.pa-map-viewport img').is_visible(),'Staged map image renders through the test media adapter')
    before=snapshot(p)
    p.get_by_role('button',name=t(p,'map.zoomIn'),exact=True).click();p.get_by_role('button',name=t(p,'map.fit'),exact=True).click();settle(p)
    check(snapshot(p)==before,'Zoom and Fit map do not change saved character records')
    p.locator('summary').filter(has_text=t(p,'map.manage')).click()
    p.get_by_role('button',name=t(p,'map.addPin'),exact=True).click();settle(p)
    p.locator('dialog').get_by_label(t(p,'common.name'),exact=True).fill('Test waypoint')
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'action.save'),exact=True).click();settle(p)
    check(p.evaluate('app.state.campaigns[0].pins[0].name')=='Test waypoint','Add pin uses the original explicit Save form')
    marker=p.locator('.pa-map-pin').first;marker.focus();marker.press('ArrowRight');settle(p)
    check(p.evaluate('app.state.campaigns[0].pins[0].x')>.5,'Keyboard arrow moves an unlocked pin')
    before=snapshot(p);guide(p,'map-tools');key(p,'help-open-workspace').click();settle(p)
    check(snapshot(p)==before,'Opening and leaving map tools Help preserves map data')
    p.evaluate('app.go(app.characterRoute("edit/identity"))');settle(p)
    p.get_by_role('button',name=t(p,'portrait.upload'),exact=True).click();settle(p)
    check(bool(p.evaluate('app.controller.record.mediaRefs.portrait')),'Choosing a portrait commits its media reference after staging')
    enter(p,'portraitView.scale',1.2)
    check(p.evaluate('app.state.portraitView.scale')==1.2,'Actual Zoom field applies portrait framing')
    before=snapshot(p);guide(p,'portrait');check(snapshot(p)==before,'Portrait Help is non-mutating')
    p.set_viewport_size({'width':390,'height':844});key(p,'help-open-workspace').click();settle(p)
    check(p.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),'Identity with portrait has no phone overflow after Help')


def rest_print(p):
    ident=create(p,'Test rest and print');p.evaluate('app.go(app.characterRoute("edit/vitals"))');settle(p)
    enter(p,'hp.max',20);enter(p,'hp.cur',10);enter(p,'hp.tmp',3);enter(p,'level',2);enter(p,'death.suc',1)
    p.evaluate('app.go(app.characterRoute("play"))');settle(p);key(p,'add-condition').click()
    condition=p.locator('dialog [data-focus-key^="condition:"]').first
    condition_key=condition.get_attribute('data-focus-key').split(':',1)[1];condition.check();settle(p)
    check(p.evaluate('(k)=>app.state.conds.includes(k)',condition_key),'A condition commits while its dialog stays open')
    p.evaluate('app.dialogs.close()');settle(p);key(p,'open-rest').click()
    p.locator('dialog').get_by_role('button',name=t(p,'rest.short'),exact=True).click();settle(p)
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'rest.spend'),exact=True).click();settle(p)
    check(p.evaluate('app.state.hd.spent')==1,'Spend & roll hit dice commits before closing the dialog')
    p.evaluate('app.dialogs.close()');settle(p)
    check(p.evaluate('app.state.hd.spent')==1,'Closing a short-rest dialog does not refund the spent die')
    key(p,'undo').click();settle(p);check(p.evaluate('app.state.hd.spent')==0,'Undo refunds the committed short-rest die')
    key(p,'open-rest').click();p.locator('dialog').get_by_role('button',name=t(p,'rest.long'),exact=True).click();settle(p)
    before=snapshot(p);check(p.evaluate('app.state.hp.cur')==10,'Long-rest review alone has not recovered HP')
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'action.cancel'),exact=True).click();settle(p)
    check(snapshot(p)==before,'Cancelling long-rest review changes no character data')
    key(p,'open-rest').click();p.locator('dialog').get_by_role('button',name=t(p,'rest.long'),exact=True).click();settle(p)
    p.locator('dialog .pa-dialog-footer').get_by_role('button',name=t(p,'rest.confirm'),exact=True).click();settle(p)
    check(p.evaluate('app.state.hp.cur===20&&app.state.hp.tmp===0&&app.state.death.suc===0'),'Recording a long rest applies configured HP and clears temporary HP/death counters')
    check(p.evaluate('(k)=>app.state.conds.includes(k)',condition_key),'Long rest leaves conditions unchanged, as taught')
    before=snapshot(p);guide(p,'print');key(p,'help-open-workspace').click();settle(p)
    check(p.evaluate('app.route.kind')=='print','Print Help opens the original saved-snapshot print workspace')
    check(p.evaluate('app.printSnapshot.revision===app.controller.record.revision'),'Print preview uses a committed character snapshot')
    p.get_by_label(t(p,'print.paper'),exact=True).select_option('Letter');settle(p)
    p.get_by_label(t(p,'print.mode'),exact=True).select_option('full');settle(p)
    check('Letter' in p.locator('#pa-print-page-style').text_content(),'Actual paper control prepares Letter print CSS')
    p.get_by_role('button',name=t(p,'print.fitPage'),exact=True).click();p.get_by_role('button',name=t(p,'print.fitWidth'),exact=True).click();settle(p)
    check(snapshot(p)==before,'Print content, paper and fit controls do not change character data')
    check(p.get_by_role('button',name=t(p,'print.now'),exact=True).is_visible(),'Native Print / save PDF entry is present (not invoked)')


def phone_dialogs(p):
    p.set_viewport_size({'width':390,'height':844});key(p,'welcome-start').click();key(p,'tour-path-import').click();key(p,'library-import').click();settle(p)
    check(p.locator('dialog #pa-tutorial').count()==1,'Phone import keeps the companion inside the original modal')
    key(p,'tour-show').click();settle(p)
    check(p.evaluate('document.activeElement.dataset.focusKey')=='import-json','Phone Show control reaches the real import textarea')
    check(p.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),'Phone import tutorial has no horizontal overflow')
    screenshot(p,'phone-import-dialog')
    p.keyboard.press('Escape');settle(p);key(p,'tour-restart').click();key(p,'tour-path-create').click();create(p,'Phone character');step(p,'identity')
    next_step(p,'abilities');next_step(p,'vitals');next_step(p,'play');next_step(p,'dice');key(p,'open-dice').click();settle(p)
    key(p,'tour-show').click();settle(p)
    check(p.evaluate('document.activeElement.dataset.focusKey')=='dice-expression','Phone dice instructions reach a usable expression field')
    check(p.evaluate('document.documentElement.scrollWidth<=innerWidth+1'),'Phone dice tutorial has no horizontal overflow')
    screenshot(p,'phone-dice-dialog')
    p.emulate_media(reduced_motion='reduce');p.set_viewport_size({'width':320,'height':640});settle(p)
    check(p.locator('dialog').is_visible() and key(p,'tour-close').is_visible(),'Narrow reduced-motion dialog retains its Close control')


cases=[landing,creation,imports,existing,interruption,navigation,validation,help_content,keyboard,responsive,dialogs_close,regression,media_maps,rest_print,phone_dialogs]
if args.case: cases=[c for c in cases if c.__name__==args.case]
if not cases: raise SystemExit("No matching case")
start=time.monotonic()
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=args.browser,headless=True,args=['--no-sandbox'])
    for case in cases:
        print('\nCASE '+case.__name__,flush=True)
        ctx=browser.new_context(viewport={'width':1440,'height':1000});page=ctx.new_page();page.set_default_timeout(4000)
        local_errors=[];requests=[];page.on('pageerror',lambda e:local_errors.append(str(e)))
        page.on('request',lambda r:requests.append(r.url) if r.url.startswith(('https:','http:')) else None)
        try:
            mount(page);case(page)
            check(not local_errors,case.__name__+': no uncaught JavaScript errors',local_errors)
            check(not requests,case.__name__+': no online requests from tutorial/help',requests)
        except Exception as exc:
            errors.append({'case':case.__name__,'error':str(exc),'trace':traceback.format_exc(),'pageErrors':local_errors})
            print(traceback.format_exc(),flush=True)
            try:screenshot(page,'FAIL-'+case.__name__)
            except Exception:pass
        finally:ctx.close()
    browser.close()
report={'suite':'Rendered Chromium UI with isolated memory adapters','nativeStorageVerified':False,'nativeOfflineVerified':False,'externalDownloadVerified':False,'elapsedSeconds':round(time.monotonic()-start,1),'checks':results,'errors':errors,'screenshots':shots}
(args.output/'results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print('\nRESULT',sum(x['passed'] for x in results),'passed checks;',len(errors),'failed cases',flush=True)
raise SystemExit(bool(errors) or any(not x['passed'] for x in results))
