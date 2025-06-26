// ==UserScript==
// @name        Route Choice Hack
// @description Keagan but a bot
// @match       https://www.routechoicegame.com/map.php
// ==/UserScript==

function hack() {
    let elm = document.querySelector(".map_with_routes.col-xs-12");
    if(elm) {
        elm.style.display = "block"
        console.log("hacked");
    } else {
        setTimeout(hack, 100);
    }
}

hack();