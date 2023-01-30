// ==UserScript==
// @name        Gimkit Search
// @description Quickly look up gimkit questions
// @match       *://*.gimkit.com/join*
// ==/UserScript==

window.gimkitSearch = {};
window.gimkitSearch.run = function(showError = true) {
    console.log("running!");
    let elm = document.querySelectorAll(".notranslate.lang-en")[0];
    if(!elm) {
        if(showError) alert("Error!");
        return;
    }
    let text = elm.innerText;
    let custom = "https://www.spanishdict.com/translate/";
    let url = (custom || "https://duckduckgo.com/") + encodeURIComponent(text);
    if(!window.gimkitSearch.activeWindow || window.gimkitSearch.activeWindow.closed) {
        window.gimkitSearch.activeWindow = window.open();
    }
    window.gimkitSearch.activeWindow.location.href = url;
    window.gimkitSearch.activeWindow.focus();
}
window.gimkitSearch.setup = function() {
    console.log("loading gimkitSearch");
    window.gimkitSearch.button = document.createElement("button");
    window.gimkitSearch.button.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        display: block;
        z-index: 23232032323;
        background: yellow;
        border: none;
        border-radius: 50%;
        cursor: pointer;
    `;
    window.gimkitSearch.button.id = "gimkitSearchButton";
    window.gimkitSearch.button.setAttribute("onclick","window.gimkitSearch.run()");
    document.body.appendChild(window.gimkitSearch.button);
    //document.body.setAttribute("onclick","window.gimkitSearch.run()");
    console.log("loaded gimkitSearch");
}
//window.gimkitSearch.setup();




var space_bar = 32;
window.onkeydown= function(gfg){
    if(gfg.keyCode === space_bar){
        window.gimkitSearch.run(false);
    }
}
