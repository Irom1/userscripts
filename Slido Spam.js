// ==UserScript==
// @name        Slido Spam
// @match       https://app.sli.do/event/*
// ==/UserScript==

window.attemptFix = function() {
if(location.href.startsWith("https://app.sli.do/event/cJtpsW4DQX96KVbg4MtDRb/login")) {
        console.warn("I tried twice")
        document.querySelector(".btn-primary").click();
}
}
        console.warn("I tried")
setTimeout(window.attemptFix,2500);

window.newToken = async function () {
    let x = await (await fetch("https://app.sli.do/eu1/api/v0.5/events/5f02a6fa-6bd5-47e7-befb-49924607be00/auth", {
    "body": "{\"initialAppViewer\":\"browser--other\",\"granted_consents\":[\"StoreEssentialCookies\"]}",
    "cache": "default",
    "credentials": "omit",
    "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
        "X-Client-Id": "1KzoObWcesgiIRC"
    },
    "method": "POST",
    "mode": "cors",
    "redirect": "follow",
    "referrer": "https://app.sli.do/event/cJtpsW4DQX96KVbg4MtDRb/live/questions"
})).json();
    x = x.access_token;
    document.cookie = "Slido.EventAuthTokens=" + `"` + x + `"` + "; expires=18 Dec 2033 12:00:00 UTC;path=/";
    return x;
}
window.cycle = async function(state="current") {
    if((state == "enable") || (state == "current" && localStorage.enableCycle && localStorage.enableCycle == "true")) {
        localStorage.enableCycle = true;
    } else {
        localStorage.enableCycle = false;
        return;
    }
    document.querySelector(`[aria-label="Order questions by date; recent first"]`).click();
    setTimeout(window.clickForCycle, 2000);
}
window.clickForCycle = async function() {
    //window.open(location.href);
    await window.newToken();
    let button = document.querySelector('[data-qid="' + window.questionID + '"] button');
    button.click();
    let popupButtons = document.querySelectorAll(".modal-dialog.modal-dialog--confirm button");
    if(popupButtons.length == 2) {
        popupButtons[1].click();
    }
    //setTimeout(window.clickForCycle,1000);
    //setTimeout(window.close, 1000);
    setTimeout(function(){
        location.reload();
    }, 1000);
}
window.questionID = "54882603";
setTimeout(window.cycle, 3000);




window.clientID = "1KzoObWcesgiIRC";
window.like = async function() {
    let token = await window.newToken();
    fetch("https://app.sli.do/eu1/api/v0.5/events/5f02a6fa-6bd5-47e7-befb-49924607be00/questions/54879301/like", {
    "body": "{\"score\":1}",
    "cache": "default",
    "credentials": "include",
    "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Content-Type": "application/json",
        "X-Client-Id": window.clientID,
        "X-Slidoapp-Version": "SlidoParticipantApp/47.172.3 (web)",
        "Authorization": "Bearer " + token
    },
    "method": "POST",
    "mode": "cors"
});
}