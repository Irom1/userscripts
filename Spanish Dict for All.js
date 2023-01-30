// ==UserScript==
// @name         Spanish Dict for All
// @version      0.1
// @description  try to take over the world!
// @match        https://www.spanishdict.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
.ReactModalPortal {
  display: none;
}
div[class^='premiumButton'] {
  display: none;
}
#sidebar-container-video {
display: none;
}
#main-container-video {
width: 100%;
flex: none;
}`;
    document.getElementsByTagName('head')[0].appendChild(style);
})();