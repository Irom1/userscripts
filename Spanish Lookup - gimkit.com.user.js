// ==UserScript==
// @name        Spanish Lookup - gimkit.com
// @match       https://www.gimkit.com/join*
// @match       https://www.gimkit.com/practice*
// @version     1.0
// @author      irom1
// @description 12/15/2023, 12:26:47 PM
// ==/UserScript==

window.addEventListener('keydown', (event) => {
  if(event.key === ' ') {
    console.log('Spacebar pressed');
    window.open("https://www.spanishdict.com/translate/" + document.querySelector(".notranslate").innerText)
  }
});

