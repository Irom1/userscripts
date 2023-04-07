// ==UserScript==
// @name        Search
// @description Redirects DDG to Neeva or Bing
// @match       https://duckduckgo.com/*
// @match       https://neeva.com/search*
// ==/UserScript==

let term = location.href.split("q=")[1].split("&")[0];
let bing = "https://www.bing.com/search?q=";
let neeva = "https://neeva.com/search?q=";
if(false && location.host == "duckduckgo.com") {
    location.href = location.href.replace("https://duckduckgo.com/?q=", neeva);
}
if(false && location.host == "duckduckgo.com") {
    let url = bing + term;
    let x = window.open(url, "_blank");
    setTimeout(function() {
        x.close();
    }, 3000);
}
if(true && location.host == "duckduckgo.com") {
    window.open(neeva + term, "_blank");
}
if(false && location.host == "duckduckgo.com") {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", bing + term);
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    document.body.appendChild(ifrm);
}