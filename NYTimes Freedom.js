// ==UserScript==
// @name        NYTimes Freedom
// @description Hide the banners on nytimes pages
// @match       *://www.nytimes.com/*
// ==/UserScript==

window.freedom = {};
window.freedom.add = function() {
    // add to header
    let value = `
<span class="css-ni9it0 e1j3jvdr0" onclick="window.freedom.run()">NYTimes Freedom</span>
`;
    let elem = document.querySelector(".css-y3sf94.e1j3jvdr1");
    //if(elem.innerHTML != value) elem.innerHTML = value;
    // add top bottom right
    value = `
    <div style="position:fixed;height:60px;font-size:40px;padding:10px;box-sizing:border-box;bottom:20px;right:20px;z-index:1000000121;background:yellow;border-radius:50%;cursor:pointer;" onclick="window.freedom.run()" id="fireIcon">🔥</div>
    `;
    document.body.innerHTML = value + document.body.innerHTML;
}
window.freedom.run = function() {
    document.querySelector("#fireIcon").style.background = "orange";
    //window.clearInterval(window.freedom.loop);
    let hideIDs = {
        ".css-mcm29f":"setAttribute('class','')",
        "#site-content":"setAttribute('style','')",
        "#gateway-content":"remove()",
        "#standalone-footer":"remove()",
        ".css-gx5sib":"remove()",
        ".css-bs95eu":"remove()",
        ".css-1ichrj1":"remove()"
    }
    Object.keys(hideIDs).forEach(id => {
        let action = hideIDs[id];
        action = "document.querySelectorAll('" + id + "').forEach(elem => {elem." + action + "})";
        //console.log(action)
        if(document.querySelectorAll(id).length > 0) eval(action);
    });
}
window.freedom.add();
window.onload = function() {
    //window.freedom.add();
    //window.freedom.loop = setInterval(window.freedom.add,500);
}