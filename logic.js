'use strict';

function Set() {
  console.log("Set");
}

function Error(error) {
  console.log(error);
}

async function main() {
  var p;
   await browser.storage.local.get("main_value",item=>{
    p=item.main_value;
    if(p===undefined){
     browser.storage.local.set({main_value:1})
            .then(Set,Error);
          document.querySelector('#search').disabled=false;
          document.querySelector('#title').disabled=false;
    }
    else {
     browser.storage.local.remove(["main_value"]);
     document.querySelector('#search').disabled=true;
           document.querySelector('#title').disabled=true;
    }
  });
}

document.querySelector('#main').addEventListener('change',main);

function test(){
  var p,register=null;
    browser.storage.local.get("main_value",item=>{
    p=item.main_value;
    if(p===undefined){
      cr();
         document.querySelector('#main').checked=false;
      document.querySelector('#search').disabled=true;
      document.querySelector('#title').disabled=true;

}
else {
scr();
   document.querySelector('#main').checked=true;
 document.querySelector('#search').disabled=false;
  document.querySelector('#title').disabled=false;
}
});
}

setInterval(test,200);

async function scr(){
  const code="document.querySelector('#secondary').style.display='none'";
await browser.tabs.executeScript({
  code: code
});
}
async function cr(){
  const code="document.querySelector('#secondary').style.display='block'";
await browser.tabs.executeScript({
  code: code
});
}
