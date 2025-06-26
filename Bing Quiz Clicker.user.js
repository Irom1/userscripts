// ==UserScript==
// @name        Bing Quiz Clicker
// @match       https://www.bing.com/search*
// ==/UserScript==

setTimeout(function(){
    let a = document.querySelector(".rqOption:not(.optionDisable)");
    let b = document.querySelector(`[iscorrectoption="True"]:not(.btsel)`);
    let c = document.querySelector(".wk_choicesInstLink");
    let d = document.querySelectorAll("[data-serpquery]");
    if(a) {
        a.click();
    } else if(b) {
        b.click();
    } else if(c) {
        c.click();
    } else if(d.length > 0) {
      if(location.href.includes("pointsScript=true")) return;
      let x = window.open(d[1].getAttribute("data-serpquery") + "&pointsScript=true");
      let y = window.open(d[0].getAttribute("data-serpquery") + "&pointsScript=true");
      setTimeout(function(){
        x.close();
        y.close();
      }, 5000);
    }
}, 2000);