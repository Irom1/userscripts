// ==UserScript==
// @name        Clean SpanishDict
// @description Prevent adblock blocker script on the website
// @match       https://www.spanishdict.com/*
// ==/UserScript==

function cleanUp() {
    let sidebar = document.querySelector("#sidebar-container-video");
    if(sidebar) sidebar.remove();
    let mainCard = document.querySelector("#main-container-video");
    if(mainCard) mainCard.style.flex = 1;
    let button = document.querySelector("div.ZqVKq7gT > div.e6x3wJZE > button")
    if(button) button.click()
    else setTimeout(cleanUp, 100);
}

cleanUp();

localStorage.sd_support_us_views_2 = 3;