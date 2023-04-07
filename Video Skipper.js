// ==UserScript==
// @name        Video Skipper
// @description Jumps to end of any playing video
// @match       https://player.vimeo.com/video/*
// ==/UserScript==

window.freedom = {};
window.freedom.add = function() {
    let elm  = document.createElement("span");
    elm.style = `position: fixed; height: 40px; font-size: 20px; padding: 5px 0; box-sizing: border-box; top: 10px; right: 10px; z-index: 1000000121; /* background: #ddd; */ border-radius: 50%; cursor: pointer; width: 40px; text-align: center; border: 1px solid grey;`;
    elm.id = "fireIcon";
    elm.setAttribute("onclick","window.freedom.run()");
    elm.innerHTML = `⏭️`;
    document.body.appendChild(elm);
}
window.freedom.run = function() {
    let video = document.querySelector("video");
    video.currentTime = video.duration - 0;
}
window.freedom.add();
window.onload = function() {
    //window.freedom.add();
    //window.freedom.loop = setInterval(window.freedom.add,500);
}