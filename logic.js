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
     browser.storage.local.set({main_value:1,search_value:1,title_value:1,desc_value:1})
            .then(Set,Error);
    }
    else {
     browser.storage.local.remove(["main_value","search_value","title_value","desc_value"]);
    }
  });
}

document.querySelector('#main').addEventListener('change',main)
