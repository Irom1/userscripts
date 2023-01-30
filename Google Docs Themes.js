// ==UserScript==
// @name        Google Docs Themes
// @description Make Docs look the way you want it to look
// @match       https://docs.google.com/document/*
// ==/UserScript==


(function() {
    'use strict';
    var alignCSS = `
    .kix-appview-editor {
        background: linear-gradient(#ffffff44, #ffffff44), linear-gradient(45deg, #dc3b3e, #3b99dc 50%, #3bdc90 75%, rgb(255 141 0) 100%) no-repeat fixed;
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
    #docs-chrome {
        background: #ffffffbb !important;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        animation: colorchange 5s linear infinite;
    }
    .docs-titlebar-buttons {
        background-color: #00000000 !important;
    }`;
    var style = alignCSS;
    window.classoomThemeCSS = document.createElement('style');
    window.classoomThemeCSS.type = 'text/css';
    window.classoomThemeCSS.innerHTML = style;
    window.classoomThemeCSS.id = "easyFind";
    document.head.appendChild(window.classoomThemeCSS);
})();