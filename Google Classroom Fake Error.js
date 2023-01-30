// ==UserScript==
// @name         Google Classroom Fake Error
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fake Error (No Need To Do Work!!)
// @author       GSRHackZ
// @match        https://classroom.google.com/*
// @grant        none
// @license                  MIT
// @compatible               chrome
// @compatible               firefox
// @compatible               opera
// @compatible               safari
// ==/UserScript==
let fakeError=setInterval(function(){
    const phrases=[
        "Trying To Fix Errror....",
        "Error X4j#r has occured,  reloading...",
        "(Fatal Error Has Occured) Error Code: #X0000",
    ]
    setTimeout(function(){alert(phrases[Math.floor(Math.random() * phrases.length)]);location.reload();},2000)
    let classes_container=document.getElementsByClassName("JwPp0e")[0]
    classes_container.innerHTML="";
    document.getElementsByClassName("bg6sud")[0].innerText="";
    if(classes_container.innerHTML.includes("R4EiSb")==false){
        clearInterval(fakeError);
        document.getElementsByClassName("GmuOkf")[0].onclick=function(evt){
            evt.preventDefault();
            location.reload();
        }
        console.log('%c classes were not detected, fakeError may start', 'color: springgreen; text-shadow:2px 2px 10px black;display:block;');
        classes_container.innerHTML=`
<div id='container'>
<h1 id="title">oops..</h1><br/>
<p>An unexpected error has occured<br/>Please try again later...<p><br/>
<img id="error-img"><br/>
<a href="/">Retry</a>
</div>`;


        var container=document.getElementById("container");
        var title=document.getElementById("title");
        var img=document.getElementById("error-img");
        var imgs=[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMEt3g7qRMG6sSQNGeIOLGss9NAEwqp2RJXw&usqp=CAU",
            "https://optinmonster.com/wp-content/uploads/2018/06/11-brilliant-404-pages-to-turn-lost-visitors-into-loyal-customers-2.png",
            "data:image/jpeg;base64,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"
        ]
        container.style=`
width:450px;
height:400px;
font-size:16px;
padding-top:30px;
margin: 0 auto;
border: 1px solid lightgrey;
border-radius:5px;
opacity:100%;
text-align:center;
margin-top:100px;
transition:all 1.7s;
        `
        title.style=`
color:red;
font-size:30px;
margin-left:-10px;
margin-bottom:20px;
`
        img.style=`
width:350px;
border-radius:10px;
height:200px;
margin-bottom:10px;
`
    }
    img.src=imgs[Math.floor(Math.random()*imgs.length)]
},1700)