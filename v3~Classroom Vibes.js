// ==UserScript==
// @name        v3~Classroom Vibes
// @description Automaticly Running Webtool
// @match       https://classroom.google.com/*
// ==/UserScript==

(function(){let loading = document.body.appendChild(document.createElement('div'));loading.id = "webToolLoader";loading.innerText = "Loading WebTool...";loading.style= "width:200px;background-color:#11111199;position:fixed;top:10px;height:auto;border-radius:10px;left:calc(50% - 100px);padding: 8px;color:white;font-family:arial;text-align:center;font-size:16pt;z-index:11111111;";window.webTool="classroom-vibes";let newTool = document.createElement('script');newTool.src='https://webtools.irom1.repl.co/scripts/classroom-vibes?type=script&pin=1068570';document.body.appendChild(newTool);newTool.onload=function(){document.getElementById("webToolLoader").remove();};})();