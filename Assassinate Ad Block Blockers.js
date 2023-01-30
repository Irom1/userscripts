// ==UserScript==
// @name         Assassinate Ad Block Blockers
// @namespace    http://tampermonkey.net/
// @version      1.54
// @description  You know those annoying content blockers that demand you remove your AdBlock so you can read the content? This script removes them by force. Please note, this is not UNIVERSAL like AdBlock Plus. It operates on a per-site basis.
// @author       Kxmode
// @run-at       document-idle
// @license		 Creative Commons, Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
// @match        *://*.vg247.com/*
// @match        *://*.businessinsider.com/*
// @match        *://*.cnn.com/*
// @match        *://*.curbed.com/*
// @match        *://*.dailymail.co.uk/*
// @match        *://*.eurogamer.net/*
// @match        *://*.forbes.com/*
// @match        *://*.fortune.com/*
// @match        *://*.gamesradar.com/*
// @match        *://*.houstonchronicle.com/*
// @match        *://*.inquirer.com/*
// @match        *://*.insider.com/*
// @match        *://*.latimes.com/*
// @match        *://*.makeuseof.com/*
// @match        *://markets.businessinsider.com/*
// @match        *://metro.co.uk/*
// @match        *://*.nationalgeographic.com/*
// @match        *://*.nbcnews.com/*
// @match        *://*.nymag.com/*
// @match        *://*.nytimes.com/*
// @match        *://*.rottentomatoes.com/*
// @match        *://*.sfchronicle.com/*
// @match        *://*.thecut.com/*
// @match        *://*.thedailybeast.com/*
// @match        *://*.vulture.com/*
// @match        *://*.washingtonpost.com/*
// @match        *://*.fresnobee.com/*
// @match        *://*.kbb.com/*
// ==/UserScript==

/* jshint esversion: 6 */
/* eslint-disable */

// Loads jQuery and triggers a callback function when jQuery has finished loading
function addJQuery(callback) {
    let script = document.createElement('script');
    script.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
    script.addEventListener('load', function() { callback(); }, false);
    document.body.appendChild(script);
}

// The main script
function main() {

 	let currentStatus1, currentStatus2, currentStatus3, currentStatus4,
	 	currentStatus5, currentStatus6, currentStatus7, currentStatus8,
		currentStatus9, currentStatus10;
	let okayToProcess = true;

	const $ = (unsafeWindow || window).$;
	const URL_HOSTNAME = window.location.hostname;

	// For domains that uses a specific service blocking AdBlockers
	const STANDARD_BLOCKER_DOMAINS = [ 'www.vg247.com',
										'www.gamesradar.com',
										'www.cnn.com'].map(String);

	// For domains that follow a nonstandard or custom way of blocking AdBlockers
	const ABNORMAL_BLOCKER_DONAINS = [ 'www.makeuseof.com',
										'www.businessinsider.com',
										'www.thedailybeast.com',
										'www.nytimes.com',
										'cooking.nytimes.com',
										'www.forbes.com',
										'www.dailymail.co.uk',
										'www.washingtonpost.com',
										'www.insider.com',
										'www.latimes.com',
										'www.nationalgeographic.com',
										'www.sfchronicle.com',
										'seekingalpha.com',
										'www.eurogamer.net',
										'www.usatoday.com',
										'markets.businessinsider.com',
										'www.vulture.com',
										'nymag.com',
										'www.thecut.com',
										'www.curbed.com',
										'metro.co.uk',
										'fortune.com',
										'www.nbcnews.com',
										'www.inquirer.com',
										'www.houstonchronicle.com',
										'www.rottentomatoes.com',
										'editorial.rottentomatoes.com',
										'www.fresnobee.com',
										'www.kbb.com'].map(String);

	// For domains that typically launch third-party modals for random stuff like sign-ups
	const AUXILIARY_BLOCKER_DOMAINS = [ 'www.gamesradar.com'].map(String);

	const DOMAIN = {
		'BusinessInsider': ABNORMAL_BLOCKER_DONAINS[1],
		'BusinessInsiderMarkets': ABNORMAL_BLOCKER_DONAINS[15],
		'CNN': STANDARD_BLOCKER_DOMAINS[2],
		'Curbed': ABNORMAL_BLOCKER_DONAINS[19],
		'DailyMail': ABNORMAL_BLOCKER_DONAINS[6],
		'EuroGamer': ABNORMAL_BLOCKER_DONAINS[13],
		'Forbes': ABNORMAL_BLOCKER_DONAINS[5],
		'Fortune': ABNORMAL_BLOCKER_DONAINS[21],
		'FresnoBee': ABNORMAL_BLOCKER_DONAINS[27],
		'GamesRadar': STANDARD_BLOCKER_DOMAINS[1],
		'GamesRadarAuxiliary': AUXILIARY_BLOCKER_DOMAINS[0],
		'HoustonChronicle': ABNORMAL_BLOCKER_DONAINS[24],
		'Inquirer': ABNORMAL_BLOCKER_DONAINS[23],
		'Insider': ABNORMAL_BLOCKER_DONAINS[8],
		'KelleyBlueBook': ABNORMAL_BLOCKER_DONAINS[28],
		'LATimes': ABNORMAL_BLOCKER_DONAINS[9],
		'MakeUseOf': ABNORMAL_BLOCKER_DONAINS[0],
		'MetroUK': ABNORMAL_BLOCKER_DONAINS[20],
		'NationalGeographic': ABNORMAL_BLOCKER_DONAINS[10],
		'NBCNews': ABNORMAL_BLOCKER_DONAINS[22],
		'NewYorkTimes': ABNORMAL_BLOCKER_DONAINS[3],
		'NewYorkTimesCooking': ABNORMAL_BLOCKER_DONAINS[4],
		'NYMag': ABNORMAL_BLOCKER_DONAINS[17],
		'RottenTomatoes': ABNORMAL_BLOCKER_DONAINS[25],
		'RottenTomatoesEditorial': ABNORMAL_BLOCKER_DONAINS[26],
		'SeekingAlpha': ABNORMAL_BLOCKER_DONAINS[12],
		'SFChronicle': ABNORMAL_BLOCKER_DONAINS[11],
		'TheCut': ABNORMAL_BLOCKER_DONAINS[18],
		'TheDailyBeast': ABNORMAL_BLOCKER_DONAINS[2],
		'USAToday': ABNORMAL_BLOCKER_DONAINS[14],
		'VG247': STANDARD_BLOCKER_DOMAINS[0],
		'Vulture': ABNORMAL_BLOCKER_DONAINS[16],
		'WashingtonPost': ABNORMAL_BLOCKER_DONAINS[7],
	}

	function startingRemovalMessage(message) {
		$('body').prepend(`<div id="Injected-By-Assassinate-Ad-Block-Blockers" style="background-color: #D8070E; font-weight: bold; color: white; text-align: center; margin: auto; padding: 10px; position: relative; z-index: 9999999999 !important; top: 220px;"><style>#Injected-By-Assassinate-Ad-Block-Blockers img { width: unset; }</style><img src="https://i.imgur.com/velCxDX.gif" style="display: inline-block; vertical-align: middle;" /> <span>${ message }</span></div>`);
	}

	function successRemovalMessage() {
		$('#Injected-By-Assassinate-Ad-Block-Blockers').attr('style','background-color: green; font-weight: bold; color: white; text-align: center; margin: auto; padding: 10px; position: relative; z-index: 9999999999 !important; transition: .5s; top: 220px;');
		$('#Injected-By-Assassinate-Ad-Block-Blockers').find('img').attr('src','https://i.imgur.com/i5e5xp0.gif');
		$('#Injected-By-Assassinate-Ad-Block-Blockers').find('span').text('Success 😎. Enjoy!');
	}

	function clearCookie(name, domain, path){
		domain = domain || document.domain;
		path = path || "/";
		document.cookie = name + "=; expires=" + + new Date() + "; domain=" + domain + "; path=" + path;
	}

	/* A utility function, for Greasemonkey scripts, that detects and handles DOM mutation.
	* Author: https://gist.github.com/BrockA/2625891
	* License: Creative Commons, Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
	*
	* Dependency: jQuery
	* Usage example:
	*		waitForKeyElements (
	*		    "div.comments", commentCallbackFunction
	*       );
	*
	* Page-specific function to do what we want when the node is found.
	* Usage example:
	*       function commentCallbackFunction (jNode) {
	*           jNode.text ("This comment changed by waitForKeyElements().");
	*       }
	*
	* selectorTxt		<string>		Required: The jQuery selector string that specifies the desired element(s).
	* actionFunction	<string>		Required: The code to run when elements are found. It is passed a jNode to the matched element.
	* bWaitOnce      	<bool>			Optional: If false, will continue to scan for new elements even after the first match is found.
	* iframeSelector  	<string>		Optional: If set, identifies the iframe to search.
	*/
	function waitForTargetElements (selectorTxt, actionFunction, bWaitOnce, iframeSelector) {
		let targetNodes, btargetsFound;

		if (typeof iframeSelector == "undefined")
			targetNodes = $(selectorTxt);
		else
			targetNodes = $(iframeSelector).contents().find(selectorTxt);

		if (targetNodes  &&  targetNodes.length > 0) {
			btargetsFound = true;
			// Target node(s) found. Iterate through each and act if they are new.
			targetNodes.each ( function () {
				let jThis = $(this);
				let alreadyFound = jThis.data ('alreadyFound')  ||  false;

				if (!alreadyFound) {
					// Call the payload function
					let cancelFound = actionFunction (jThis);
					if (cancelFound)
						btargetsFound = false;
					else
						jThis.data ('alreadyFound', true);
				}
			});
		} else {
			btargetsFound = false;
		}

		// Get the timer-control variable for this selector
		let controlObj = waitForTargetElements.controlObj || {};
		let controlKey = selectorTxt.replace (/[^\w]/g, "_");
		let timeControl = controlObj [controlKey];

		// Now set or clear the timer as appropriate
		if (btargetsFound && bWaitOnce && timeControl) {
			// The only condition where we need to clear the timer
			clearInterval (timeControl);
			delete controlObj [controlKey];
		} else {
			// Set a timer, if needed
			if ( ! timeControl) {
				timeControl = setInterval ( function () {
						waitForTargetElements ( selectorTxt, actionFunction, bWaitOnce, iframeSelector);
					}, 300);
				controlObj [controlKey] = timeControl;
			}
		}
		waitForTargetElements.controlObj = controlObj;
	}

	// Sledgehammer 2.0 prototype
	function removeDOMElement(node)                 { node.remove(); }
	function removeContentHeightLock(node)          { node.attr('style','max-height: unset; overflow: unset;'); }

	// General
	function standardRemoval() {
		let isHTMLBlocked = $('html').attr('style');
		let isBodyBlocked = $('body').attr('style');
		let isHTMLClassBlocked = $('html').hasClass('sp-message-open');

		if (isHTMLBlocked !== undefined || isBodyBlocked !== undefined || isHTMLClassBlocked)
		{
			clearInterval(currentStatus1);
			// We're on a page that is blocked

			$('html').removeAttr('style');
			$('body').removeAttr('style');
			$('html').removeClass('sp-message-open');

			switch(URL_HOSTNAME)
			{
				case DOMAIN.VG247:
					$('[class*="sp_veil"]').remove();
					$('[id*="sp_message_id"]').remove();
					break;
			}
		}

		console.clear();
	}

	// Site specific
	function BusinessInsider() {
		$('.tp-modal').remove();
		$('.tp-backdrop').remove();
		$('body').removeClass('tp-modal-open');
	}
	function Curbed() {
		$('html').attr('style', 'overflow-y: unset;');
		$('body').attr('style', 'position: unset; width: 1100px; margin: 0 auto;');
		$('.article .article-header, .article .article-header.inline').attr('style', 'margin: unset;');
		$('.article .lede-image-wrapper.inline.horizontal').attr('style', 'margin: unset;');
		$('#paywall-reader-interface').remove();
		$('#cliff-takeover').remove();
		$('.tertiary').attr('style','');
	}
	function DailyMail() {
		/*
		// Existing Ad Block code
		$('#mol-ads-cmp-iframe').next().remove();
		$('html').removeAttr('class');
		$('body').removeAttr('class');
		*/

		// Updated code to make the site faster (I hope)
		$('iframe').remove();
		$('#chromelessPlayer').remove();
		$('.billboard-container.watermark').remove();
		$('.adHolder.watermark').remove();
		$('.mpu_puff_wrapper.watermark').remove();
		$('script').remove();
	}
	function EuroGamer() {
		$('html').removeAttr('style');
		$('html').removeClass('sp-message-open');
		$('body').removeAttr('style');
		$('[class*="sp_veil"]').remove();
		$('[id*="sp_message_id"]').remove();
	}
	function Forbes() {
		$('.top-ad-container').remove();
		$('.tp-modal').remove();
		$('.tp-backdrop.tp-active').remove();
		$('body').removeAttr('class');
		$('.page-loaded').remove();
		$('.article-fixed[_nghost-c11]').attr('style', 'position: unset;');
		// abnormal situation. these appear on certain pages.
		$('#lightboxjs-lightboxlib').remove();
		$('#aax_prefetch_frame').remove();
		$('#cok_aax').remove();
		$('body > iframe:nth-of-type(1)').remove(); // these run in sequence. we want to remove the first 7-9 iframes since iframes typically contain ABB-related injection code or advertisements.
		$('body > iframe:nth-of-type(1)').remove();
		$('body > iframe:nth-of-type(1)').remove();
		$('body > iframe:nth-of-type(1)').remove();
		$('body > iframe:nth-of-type(1)').remove();
		$('body > iframe:nth-of-type(1)').remove();
		$('.fbs-auth__container').remove();
		$('.fbs-ad--ntv-contentd-wrapper').remove();
		$('.body--no-scroll').attr('style', 'overflow: unset;');
		$.each($('script'), function() { // scans all scripts for a very specific paywall script
			let selector = $(this).attr('src');
			let target = String(selector).match(/(paywall)+.(unlock-protocol)+./g); // the script is found
			if (target !== null)
				$(this).remove(); // and removed so that it can't re-inject itself
		});
		$('#article-container-0').attr('style','position: unset;');
	}
	function Fortune() {
		$('[id*="Leaderboard"]').parent().remove();
		$('.paywall-selector').remove();
		$('[class*="paywall"]').attr('style','');
		$.each($('[class*="articleBody__wrapper-"]').find('div'), function() {
			const ATTR = $(this).attr('style');
			if (typeof ATTR != 'undefined' && ATTR !== false && ATTR.includes('grayscale(0.5) blur'))
				$(this).attr('style','');
		});
	}
	function FresnoBee() {
		$('#bcx_local_storage_frame').next().remove();
		$('#w_popup').remove();
		$('html').removeAttr('style');
		$('body').removeClass('paywalled').removeAttr('style');
	}
	function GamesRadar(interval) {
		if ($('.raleigh-optin-visible').is(':visible'))
			$('[class*="raleigh-optin-"]').remove();

		if (typeof interval !== 'undefined')
			clearInterval(interval);
		else
			clearAllIntervals();
	}
	function HoustonChronicle() {
		$('script').remove();
		$('iframe').remove();
		$('.fancybox-overlay').remove();
		$('.fancybox-lock').removeClass('fancybox-lock');
		$('.bc_header').remove();
		$.each($('style:last-child'), function() {
			if ($(this).attr('id') !== '') {
				$(this).remove();
			}
		});
	}
	function Inquirer() {
		$('.tp-modal').remove();
		$('.tp-backdrop').remove();
		$('body').attr('class','');
		$('.bx-base').remove();
	}
	function Insider() {
		$('.tp-modal').remove();
		$('.tp-backdrop.tp-active').remove();
		$('body').removeAttr('class');
	}
	function KelleyBlueBook() {
		$('#WhitelistOverlayModalBackground').remove();
		$('html').removeAttr('class');
	}
	function LATimes() {
		$('html').attr('style','overflow: unset;');
		$('body').removeAttr('style');
		$('.Page-body').removeAttr('style');
		$('.fc-ab-root').remove();
		$('.meter-modal').parent().remove();
		$('metering-modal').remove();
		$('modality-custom-element').remove();
	}
	function MakeUseOf() {
		$('[class*="unblockplease-overlay"]').remove();
		$('.unblockplease').removeAttr('style');
	}
	function MetroUK() {
		$('script').remove();
		$('iframe').remove();
		$('[class*="mol-ads-"]').remove();
		$('[id*="mol-ads-"]').remove();
		$('[class*="overlay-34_Kj"]').parent().parent().remove();
		$('body').removeClass('mol-fe-ab-dialog');
	}
	function NationalGeographic() {
		$('.fancybox-overlay').remove();
		$('#paywall-meter').remove();
		$('html').removeClass('fancybox-lock');
		$('body').removeAttr('style');
		$('.Modal.PaywallModal').remove();
		$('.Modal.EmailStickyFooter__Modal').parent().parent().remove();

		$('#Injected-By-Assassinate-Ad-Block-Blockers').remove();
		console.clear();
		console.log('%c 😎 Assassinate Ad Block Blockers — Blocker code removed', 'background: #0b801d; color: #fff;');
	}
	function NBCNews() {
		$('html').attr('style','');
		$('body').attr('style','');
		$.each($('h3'), function() {
			const str = $(this).text();
			if (~str.indexOf('Please support our journalism')) {
				$(this).parent().parent().parent().parent().remove();
			}
		});
	}
	function NewYorkTimes() {
		// nytimes
		if (window.location.pathname.includes('/slideshow/')) {
			if (okayToProcess) {
				$('#gateway-content').remove();
				$('div#app > div > div > [class*="css-"]:last-child').remove();
				okayToProcess = false;
			}
		} else {
			$('#standalone-footer').remove();
			$('#gateway-content').remove();
			$('body').attr('style', 'overflow: unset;');
			$('#site-content').attr('style','position: unset;');
			$('[id*="lire-ui-"]').remove();

			// nytimes' cooking
			$('[class*="modal_modal-window-container"]').parent().remove();
			$('body').attr('class','').attr('style','');
			$('[class*="mask_no-scroll"]').attr('class','');
			$('.nytc---modal-window---windowContainer').parents('#appContainer').remove(); // a modal with no close button. wtf nyt?!
			$('#container').attr('style','overflow: unset;');
			$('.nytc---modal-window---noScroll').attr('style','overflow: unset;');
			$('#site-content').attr('style','position: unset;');

			// nytimes' magazine and site-wide
			$('[class*="css-mcm"]').attr('style','position: unset;');

			if (window.location.pathname !== '/')
				$('div#app > div > div > [class*="css-"]:last-child').remove();
		}
	}
	function NYMag() {
		$('html').removeAttr('style');
		$('body').removeAttr('style');
		$('#paywall-reader-interface').remove();
		$('#cliff-takeover').remove();
		$('.tertiary').attr('style','');
	}
	function RottenTomatoes() {
		$('html').attr('style','');
		$('body').attr('style','');
		$.each($('h3'), function() {
			const str = $(this).text();
			if (~str.indexOf('Welcome to Rotten Tomatoes! Please support us by allowing ads')) {
				$(this).parent().parent().parent().parent().remove();
			}
		});
	}
	function SeekingAlpha() {
		$('body').removeAttr('style');
		$('[src*="chunk.SignInButton"]').prev().remove();
		$('.sticky-piano-placeholder').remove();
		waitForTargetElements('[data-test-id="article-content"]', removeContentHeightLock);
		waitForTargetElements('#paywall', removeDOMElement);
		waitForTargetElements('[src*="rollBar"]', removeDOMElement);
		waitForTargetElements('[src*="//js-sec.indexww.com/ht/p"]', removeDOMElement);
		waitForTargetElements('#px-captcha', removeDOMElement);
		waitForTargetElements('#px-captcha-wrapper', removeDOMElement);

		$('#google-one-tap-popup-container').remove();

		// Final pass removal - requires murdering cookies! :o
		var cookies = document.cookie.split(";");
		for (let key in cookies)
			clearCookie(cookies[key].split("=")[0], URL_HOSTNAME, '/');
	}
	function SFChronicle() {
		// version 1
		$('.fancybox-overlay').remove();
		$('html').removeAttr('class');
		$('.bcSlideOut').remove();
		$('body').attr('style', 'overflow: unset !important;');

		// version 2
		$('script').remove();
		$('iframe').remove();
		$('.fancybox-lock').removeClass('fancybox-lock');
		$('.bc_header').remove();
		$('html').css('overflow', 'unset');
		$.each($('style:last-child'), function() {
			if ($(this).attr('id') !== '') {
				$(this).remove();
			}
		});
	}
	function TheCut() {
		$('html').removeAttr('style');
		$('body').removeAttr('style');
		$('#paywall-reader-interface').remove();
		$('#cliff-takeover').remove();
		$('.tertiary').attr('style','');
	}
	function TheDailyBeast() {
		$('.tp-modal').remove();
		$('.tp-backdrop').remove();
		$('body').removeClass('tp-modal-open');
		$('[id*="offer-0-"]').remove();
		$('[displayname*="PianoTag"]').remove();
		$('[src*="tinypass.min.js"]').remove();
		$('#piano_bottom_ribbon_wrapper').remove();
		$('iframe').remove();
		$('body').removeAttr('style');
		$('#bottom_ribbon_modal_wrapper').remove();
		$('.StoryPage.is-locked').removeClass('is-locked');
		$('#bottom_ribbon_modal_expand_wrapper').remove();

		$('#Injected-By-Assassinate-Ad-Block-Blockers').remove();
		console.clear();
		console.log('%c 😎 Assassinate Ad Block Blockers — Blocker code removed', 'background: #0b801d; color: #fff;');
	}
	function USAToday() {
		$('html').removeAttr('style');
		$('html').removeClass('sp-message-open');
		$('body').removeAttr('style');
		$('[class*="sp_veil"]').remove();
		$('[id*="sp_message_id"]').remove();
	}
	function Vulture() {
		$('html').removeAttr('style');
		$('body').removeAttr('style');
		$('#paywall-reader-interface').remove();
		$('#cliff-takeover').remove();
		$('.tertiary').attr('style','');
	}
	function WashingtonPost() {
		$('html').removeAttr('style');
		$('body').removeAttr('style');
		$('[data-qa*="paywall"]').remove();
		$('[rel*="apple-touch-icon"]').last().next().next().remove(); // removes the blocker html
		$('[rel*="apple-touch-icon"]').last().next().next().remove(); // removes the blocker styles
		waitForTargetElements('[id*="paywall-"]', removeDOMElement);
	}

	function domStatusCheck() {
		if (STANDARD_BLOCKER_DOMAINS.indexOf(URL_HOSTNAME) > -1)
			standardRemoval();

		if (AUXILIARY_BLOCKER_DOMAINS.indexOf(URL_HOSTNAME) > -1)
		{
			switch(URL_HOSTNAME)
			{
				case DOMAIN.GamesRadarAuxiliary:
					if (typeof currentStatus2 !== 'undefined')
						GamesRadar(currentStatus2);
					else
						GamesRadar();

					break;
			}
		}

		if (ABNORMAL_BLOCKER_DONAINS.indexOf(URL_HOSTNAME) > -1)
		{
			switch(URL_HOSTNAME)
			{
				case DOMAIN.BusinessInsider:		BusinessInsider(); break;
				case DOMAIN.BusinessInsiderMarkets:	BusinessInsider(); break;
				case DOMAIN.Curbed:					Curbed(); false;
				case DOMAIN.DailyMail: 				DailyMail(); break;
				case DOMAIN.EuroGamer: 				EuroGamer(); break;
				case DOMAIN.Forbes:					Forbes(); break;
				case DOMAIN.Fortune:				Fortune(); break;
				case DOMAIN.FresnoBee:				FresnoBee(); break;
				case DOMAIN.Insider: 				Insider(); break;
				case DOMAIN.LATimes: 				LATimes(); break;
				case DOMAIN.MakeUseOf:				MakeUseOf(); break;
				case DOMAIN.MetroUK:				MetroUK(); break;
				case DOMAIN.NBCNews:				NBCNews(); break;
				case DOMAIN.NewYorkTimes:			NewYorkTimes(); break;
				case DOMAIN.NewYorkTimesCooking:	NewYorkTimes(); break;
				case DOMAIN.NYMag:					NYMag(); break;
				case DOMAIN.RottenTomatoes:			RottenTomatoes(); break;
				case DOMAIN.TheCut:					TheCut(); break;
				case DOMAIN.Vulture:				Vulture(); break;
				case DOMAIN.WashingtonPost: 		WashingtonPost(); break;
			}
		}
	}

	// Sledgehammer 1.0
	function sledgeHammerRemoval() {
		const REPEAT_INTERVAL = 1500; // 1.5 seconds
		switch (URL_HOSTNAME)
		{
			case DOMAIN.TheDailyBeast: 		successRemovalMessage(); setTimeout(function() { TheDailyBeast(); }, REPEAT_INTERVAL); break;
			case DOMAIN.HoustonChronicle: 	successRemovalMessage(); setTimeout(function() { HoustonChronicle(); }, REPEAT_INTERVAL); break;
			case DOMAIN.Inquirer: 			successRemovalMessage(); setTimeout(function() { Inquirer(); }, REPEAT_INTERVAL); break;
			case DOMAIN.KelleyBlueBook: 	successRemovalMessage(); setTimeout(function() { KelleyBlueBook(); }, REPEAT_INTERVAL); break;
			case DOMAIN.NationalGeographic: successRemovalMessage(); setTimeout(function() { NationalGeographic(); }, REPEAT_INTERVAL); break;
			case DOMAIN.SFChronicle: 		successRemovalMessage(); setTimeout(function() { SFChronicle(); }, REPEAT_INTERVAL); break;
		}
	}

	sledgeHammerRemoval();

	function displayMessage(domain) {
		return console.log(`%c 🚦 Assassinate Ad Block Blockers — Clear interval pass for ${ domain } then pause for a few seconds...`, 'background: #FFBF01; color: #222;');
	}

	// Periodicially clear everything and pause for a few seconds, then start again. Not as agreesive as Sledgehammer function
	function clearAllIntervals() {
		successRemovalMessage();

		setTimeout(function() {
			console.clear();

			if (URL_HOSTNAME != DOMAIN.TheDailyBeast)
			{
				switch(URL_HOSTNAME)
				{
					case DOMAIN.BusinessInsider: 			displayMessage(DOMAIN.BusinessInsider);			BusinessInsider(); break;
					case DOMAIN.BusinessInsiderMarkets:		displayMessage(DOMAIN.BusinessInsiderMarkets);	BusinessInsider(); break;
					case DOMAIN.Curbed:						displayMessage(DOMAIN.Curbed);					Curbed(); break;
					case DOMAIN.CNN:						displayMessage(DOMAIN.CNN);						break;
					case DOMAIN.DailyMail: 					displayMessage(DOMAIN.DailyMail);				DailyMail(); break;
					case DOMAIN.EuroGamer: 					displayMessage(DOMAIN.EuroGamer);				EuroGamer(); break;
					case DOMAIN.Forbes: 					displayMessage(DOMAIN.Forbes);					Forbes(); break;
					case DOMAIN.Fortune: 					displayMessage(DOMAIN.Fortune);					Fortune(); break;
					case DOMAIN.FresnoBee: 					displayMessage(DOMAIN.FresnoBee);				FresnoBee(); break;
					case DOMAIN.Insider: 					displayMessage(DOMAIN.Insider);					Insider(); break;
					case DOMAIN.LATimes: 					displayMessage(DOMAIN.LATimes);					LATimes(); break;
					case DOMAIN.MakeUseOf: 					displayMessage(DOMAIN.MakeUseOf);				MakeUseOf(); break;
					case DOMAIN.MetroUK: 					displayMessage(DOMAIN.MetroUK);					MetroUK(); break;
					case DOMAIN.NBCNews: 					displayMessage(DOMAIN.NBCNews);					NBCNews(); break;
					case DOMAIN.NewYorkTimes: 				displayMessage(DOMAIN.NewYorkTimes);			NewYorkTimes(); break;
					case DOMAIN.NewYorkTimesCooking: 		displayMessage(DOMAIN.NewYorkTimesCooking);		NewYorkTimes(); break;
					case DOMAIN.NYMag:						displayMessage(DOMAIN.NYMag);					NYMag(); break;
					case DOMAIN.RottenTomatoes:
					case DOMAIN.RottenTomatoesEditorial:	displayMessage(DOMAIN.RottenTomatoes);			RottenTomatoes(); break;
					case DOMAIN.TheCut:						displayMessage(DOMAIN.TheCut);					TheCut(); break;
					case DOMAIN.Vulture:					displayMessage(DOMAIN.Vulture);					Vulture(); break;
					case DOMAIN.WashingtonPost: 			displayMessage(DOMAIN.WashingtonPost);			WashingtonPost(); break;
				}

				clearInterval('SledgehammerRemoval');
				console.log('%c 👍 Assassinate Ad Block Blockers — Sledgehammer interval cleared', 'background: #0b801d; color: #fff;');
			}

			if (currentStatus1 !== undefined) currentStatus1 = undefined;
			if (currentStatus2 !== undefined) currentStatus2 = undefined;
			if (currentStatus3 !== undefined) currentStatus3 = undefined;
			if (currentStatus4 !== undefined) currentStatus4 = undefined;
			if (currentStatus5 !== undefined) currentStatus5 = undefined;
			if (currentStatus6 !== undefined) currentStatus6 = undefined;
			if (currentStatus7 !== undefined) currentStatus7 = undefined;
			if (currentStatus8 !== undefined) currentStatus8 = undefined;
			if (currentStatus9 !== undefined) currentStatus9 = undefined;
			if (currentStatus10 !== undefined) currentStatus10 = undefined;
			if (CI !== undefined) CI = undefined;
			console.log('%c 😎 Assassinate Ad Block Blockers — All intervals cleared', 'background: #0b801d; color: #fff;');

			$('#Injected-By-Assassinate-Ad-Block-Blockers').remove();
		}, 1500); // Wait 1.5 seconds for the success animation to finish
	}

    const PROCESSING_MESSAGE = 'The Assassinate Ad Block Blockers script is doing its jobs. Please wait a few seconds. 🚦';

	startingRemovalMessage(PROCESSING_MESSAGE);

    // Sets up listeners to supercede any blocker shenanigans
    if (STANDARD_BLOCKER_DOMAINS.indexOf(URL_HOSTNAME) > -1) currentStatus1 = setTimeout(domStatusCheck, 50); // deepscan-disable-line
    if (AUXILIARY_BLOCKER_DOMAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus2 = setTimeout(domStatusCheck, 50); } // deepscan-disable-line

    // Second pass after 1.5 seconds
    if (STANDARD_BLOCKER_DOMAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus3 = setTimeout(domStatusCheck, 1500); } // deepscan-disable-line
    if (ABNORMAL_BLOCKER_DONAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus4 = setTimeout(domStatusCheck, 1500); } // deepscan-disable-line

    // Third pass after 2.5 seconds
    if (STANDARD_BLOCKER_DOMAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus5 = setTimeout(domStatusCheck, 2500); } // deepscan-disable-line
    if (ABNORMAL_BLOCKER_DONAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus6 = setTimeout(domStatusCheck, 2500); } // deepscan-disable-line

    // Fourth pass after 5.5 seconds
    if (STANDARD_BLOCKER_DOMAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus7 = setTimeout(domStatusCheck, 5500); } // deepscan-disable-line
    if (ABNORMAL_BLOCKER_DONAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus8 = setTimeout(domStatusCheck, 5500); } // deepscan-disable-line

    // Fifth pass after 7 seconds
    if (STANDARD_BLOCKER_DOMAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus9 = setTimeout(domStatusCheck, 7000); } // deepscan-disable-line
    if (ABNORMAL_BLOCKER_DONAINS.indexOf(URL_HOSTNAME) > -1) { currentStatus10 = setTimeout(domStatusCheck, 7000); } // deepscan-disable-line

    // Last-pass guarantee after 7.05 seconds (We want this to fire immediately after the fifth pass)
    let CI = setTimeout(clearAllIntervals, 7050);

    // Perpetual check and removal every 2.5 seconds - The Peter Gabriel Sledgehammer Special
    if (ABNORMAL_BLOCKER_DONAINS.indexOf(URL_HOSTNAME) > -1) { setInterval(sledgeHammerRemoval, 2500); }

    console.clear();
}

// Load jQuery and then execute the main function
addJQuery(main);