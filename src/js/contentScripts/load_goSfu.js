(async () => {
    const src = chrome.runtime.getURL('src/js/contentScripts/goSfu.js');
    const script = await import(src);
    script.render();
})();