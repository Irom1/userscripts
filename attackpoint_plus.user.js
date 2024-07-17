// ==UserScript==
// @name        AttackPoint+
// @match       https://*.attackpoint.org/log.jsp/*
// @match       https://*.attackpoint.org/viewlog.jsp/*
// @version     1.0
// @author      irom1
// @description Make attackpoint great again
// @grant       none
// ==/UserScript==

// enable when loaded into the browser
window.ATdeployed = true;

function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

if(window.ATdeployed) {
    dynamicallyLoadScript("https://irom1.github.io/attackpoint/script.js");
} else {
    dynamicallyLoadScript("/script.js")
}