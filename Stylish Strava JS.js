// ==UserScript==
// @name        Stylish Strava JS
// @description Make Strava look the way you want it to look
// @match       https://www.strava.com/*
// ==/UserScript==


(function() {
    'use strict';

    // CSS
    var style = `
/* CSS here */
#dashboard-feed {
    width: 75%;
}
#dashboard-sidebar {
    display:none;
}

#global-header {
  background: #ffffff77;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
}
#global-header .nav-group .drop-down-menu .selection {
  border: none !important;
}

/* Get rid of annoying things */
.upgrade,
.upsell,
div#your-privacy-zone.section,
div#suggested-follows.section,
div#your-challenges.section,
[data-cy="paywall-modal"]
/*, div[class^="PromoEntry"]*/
{
    display: none !important;
}

`;
    // Add css
    window.stylishStravaCSS = document.createElement('style');
    window.stylishStravaCSS.type = 'text/css';
    window.stylishStravaCSS.innerHTML = style;
    window.stylishStravaCSS.id = "easyFind";
    document.head.appendChild(window.stylishStravaCSS);

    /* delete css
    document.styleSheets.forEach(sheet => {
        //sheet.disabled = true;
    });*/

    // Page specific redirects
    let redirects = {
        "https://www.strava.com/dashboard":"https://www.strava.com/athlete/training"
    }
    if (location.href in redirects) {
        location.href = redirects[location.href];
    }
    document.querySelectorAll("a").forEach(linkElement => {
        if(linkElement.href in redirects) {
            linkElement.href = redirects[linkElement.href];
        }
    })

    // Remove other stuff
    let promos = document.querySelectorAll(`[data-react-class="FancyPromo"]`);
    promos.forEach(element => {
        element.parentElement.remove();
    });
    window.onload = function(){
        // overflow fix
        //document.body.style = "overflow: auto !important";
        // remove other stuff
        let noCSS = ["scroll-bars-hidden"];
        for (const sheet of document.styleSheets) {
            let deletes = false;
            try {
                for (var rule of sheet.rules) {
                    noCSS.forEach(statement => {
                        if(rule.selectorText.includes(statement)) {
                            deletes = true;
                        }
                    })
                }
            } catch(e) {
                //console.log(e);
            }
            if(deletes) {
                sheet.disabled = true;
            }
        }
    }
})();