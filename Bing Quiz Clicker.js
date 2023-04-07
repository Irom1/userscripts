// ==UserScript==
// @name        Bing Quiz Clicker
// @match       https://www.bing.com/search*
// ==/UserScript==

setTimeout(function(){
    let a = document.querySelector(".rqOption:not(.optionDisable)");
    let b = document.querySelector(`[iscorrectoption="True"]:not(.btsel)`);
    let c = document.querySelector(".wk_choicesInstLink");
    let d = document.querySelector(".bt_correctOp");
    if(a) {
        a.click();
    } else if(b) {
        b.click();
    } else if(c) {
        c.click();
    } else if(d) {
        d.click();
    }
}, 2000);