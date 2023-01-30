// ==UserScript==
// @name         Powerschool Grade Select
// @version      0.3
// @author       irom1
// @match        https://*.powerschool.com/guardian/*
// ==/UserScript==

(function() {
    'use strict';
    console.log('Grade select started');
    window.gradeSelect = function() {
        var i;
        var x = document.querySelectorAll('td');
        var y = document.querySelectorAll('th');
        var z = [];
        x.forEach(elem => {z.push(elem)});
        y.forEach(elem => {z.push(elem)});
        for(i=0; i<z.length; i++){
            z[i].setAttribute("onclick",`if(this.style.borderColor=='gray'){this.style.border='4px solid dodgerblue';this.style.background = "#def"}else{this.style.border='1px solid gray';this.style.background = "white"}`);
            z[i].style.border='1px solid gray';
            z[i].style.background = "white";
            z[i].style.cursor='pointer';
        }
    }
    window.gradeSelect();
    console.log('Grade select ready');
})();