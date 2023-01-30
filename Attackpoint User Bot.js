// ==UserScript==
// @name        Attackpoint User Bot
// @description Stuff
// @match       https://attackpoint.irom.ga/log/*
// ==/UserScript==

let script = document.createElement('script');
script.type = 'text/javascript';
script.innerHTML = 'setTimeout(function(){let user = parseFloat(window.currentUser.split("_")[1]);if(!user) {user = parseFloat(localStorage.user) + 1;} else {user += 1;}localStorage.user = user;location.href="https://attackpoint.irom.ga/new/user_" + user;},2000);';
document.getElementsByTagName('head')[0].appendChild(script);