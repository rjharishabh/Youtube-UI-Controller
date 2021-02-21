const scriptObj = await browser.contentScripts.register({
  "js": [{file: "logic.js"}],
  "matches": ["://*.youtube.com/*"],
  "allFrames": true,
  "runAt": "document_start"
});
