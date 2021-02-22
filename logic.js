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

async function title() {
  var p;
   await browser.storage.local.get("title_value",item=>{
    p=item.title_value;
    if(p===undefined){
     browser.storage.local.set({title_value:1})
            .then(Set,Error);
    }
    else {
     browser.storage.local.remove(["title_value"]);
    }
  });
}
async function videos() {
  var p;
   await browser.storage.local.get("videos_value",item=>{
    p=item.videos_value;
    if(p===undefined){
     browser.storage.local.set({videos_value:1})
            .then(Set,Error);
    }
    else {
     browser.storage.local.remove(["videos_value"]);
    }
  });
}
async function comments() {
  var p;
   await browser.storage.local.get("comments_value",item=>{
    p=item.comments_value;
    if(p===undefined){
     browser.storage.local.set({comments_value:1})
            .then(Set,Error);
    }
    else {
     browser.storage.local.remove(["comments_value"]);
    }
  });
}
async function search() {
  var p;
   await browser.storage.local.get("search_value",item=>{
    p=item.search_value;
    if(p===undefined){
     browser.storage.local.set({search_value:1})
            .then(Set,Error);
    }
    else {
     browser.storage.local.remove(["search_value"]);
    }
  });
}

async function description() {
  var p;
   await browser.storage.local.get("description_value",item=>{
    p=item.description_value;
    if(p===undefined){
     browser.storage.local.set({description_value:1})
            .then(Set,Error);
    }
    else {
     browser.storage.local.remove(["description_value"]);
    }
  });
}

document.querySelector('#main').addEventListener('change',main);
document.querySelector('#title').addEventListener('change',title);
document.querySelector('#videos').addEventListener('change',videos);
document.querySelector('#search').addEventListener('change',search);
document.querySelector('#comments').addEventListener('change',comments);
document.querySelector('#description').addEventListener('change',description);


function test(){
  var p,register=null;
    browser.storage.local.get("main_value",item=>{
    p=item.main_value;
    if(p===undefined){
      searchblock();
      videoblock();
      descriptionblock();  titleblock();
      commentsblock();
         document.querySelector('#main').checked=false;
      document.querySelector('#search').disabled=true;
      document.querySelector('#title').disabled=true;

}
else {
searchnone();
videonone();
descriptionnone();titlenone();
commentsnone();
   document.querySelector('#main').checked=true;
 document.querySelector('#search').disabled=false;
  document.querySelector('#title').disabled=false;
}
});
}

setInterval(test,100);

async function videonone(){
  const code="document.querySelector('#secondary').style.display='none'";
await browser.tabs.executeScript({
  code: code
});
}
async function videoblock(){
  const code="document.querySelector('#secondary').style.display='block'";
await browser.tabs.executeScript({
  code: code
});
}
async function titlenone(){
const code="document.querySelector('#info-contents').style.display='none'";
await browser.tabs.executeScript({
  code: code
});
}
async function titleblock(){
const code="document.querySelector('#info-contents').style.display='block'";
await browser.tabs.executeScript({
  code: code
});
}
async function commentsnone(){
const code="document.querySelector('#comments').style.display='none'";
await browser.tabs.executeScript({
  code: code
});
}
async function commentsblock(){
const code="document.querySelector('#comments').style.display='block'";
await browser.tabs.executeScript({
  code: code
});
}
async function descriptionnone(){
  const code="document.querySelector('#meta').style.display='none'";
await browser.tabs.executeScript({
  code: code
});
}
async function descriptionblock(){
  const code="document.querySelector('#meta').style.display='block'";
  await browser.tabs.executeScript({
  code: code
});
}
async function searchnone(){
  const code="document.querySelector('#voice-search-button').style.display='none';document.querySelector('#search').style.display='none';";
await browser.tabs.executeScript({
  code: code
});
}
async function searchblock(){
  const code="document.querySelector('#voice-search-button').style.display='block';document.querySelector('#search').style.display='block';";
await browser.tabs.executeScript({
  code: code
});
}
