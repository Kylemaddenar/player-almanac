// Test-only adapters for the container's about:blank Chromium test document.
// Production application retains its real IndexedDBDriver, localStorage and worker.
class TestMemoryDriver {
  constructor() { this.stores=new Map(); this.queue=Promise.resolve(); }
  async open() { return this; }
  close() {}
  run(names,mode,work) {
    const task=this.queue.then(async()=>{
      const next=structuredClone(this.stores);
      for(const name of names) if(!next.has(name)) next.set(name,new Map());
      const api={get:async(s,k)=>structuredClone(next.get(s).get(k)),put:async(s,v,k)=>{next.get(s).set(k,structuredClone(v));return k;},delete:async(s,k)=>next.get(s).delete(k),all:async s=>structuredClone([...next.get(s).values()]),keys:async s=>[...next.get(s).keys()]};
      const result=await work(api); if(mode==='readwrite') this.stores=next;return result;
    }); this.queue=task.catch(()=>{});return task;
  }
}
class TestLocalStorage {
 constructor(){this.data=new Map();} getItem(k){return this.data.has(k)?this.data.get(k):null;} setItem(k,v){this.data.set(k,String(v));} removeItem(k){this.data.delete(k);} get length(){return this.data.size;} key(i){return [...this.data.keys()][i]??null;}
}
class TestMedia extends PlayerAlmanac.MediaStore {
 constructor(){super();this.data={portrait:new Map(),map:new Map(),addon:new Map()};}
 async transaction(kind,mode,action){let value;const store={get:k=>({result:structuredClone(this.data[kind].get(k))}),getAll:()=>({result:structuredClone([...this.data[kind].values()])}),getAllKeys:()=>({result:[...this.data[kind].keys()]}),add:(v,k)=>{k??=v.id;if(this.data[kind].has(k))throw new Error('duplicate media');this.data[kind].set(k,structuredClone(v));return {result:k};}};return action(store).result;}
}
window.testDriver=new TestMemoryDriver();window.testStorage=new TestLocalStorage();window.testMedia=new TestMedia();
const repo=new PlayerAlmanac.Repository(testDriver);
window.testOptions={repo,storage:testStorage,media:testMedia,pwa:false,skipMigration:true,scope:'/test/'};
if(!crypto.subtle) Object.defineProperty(crypto,'subtle',{value:{digest:async(alg,buffer)=>new Uint8Array(await window.testDigest(Array.from(new Uint8Array(buffer)))).buffer}});
window.app=new PlayerAlmanac.Application(testOptions); app.boot();
