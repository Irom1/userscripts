// ==UserScript==
// @name        CoverageMap.com Premium
// @description Get access to paid features for free!
// @match       https://map.coveragemap.com/
// ==/UserScript==

window.premium = function() {
    document.querySelectorAll("[disabled]").forEach(elm => {elm.removeAttribute("disabled")});
    CoverageMap.user.premiumOptions = true;
}
window.premium();