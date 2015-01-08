'use strict';

var xhr = require('xhr');
var dom = require('ampersand-dom');
var GlitchText = require('./glitch-text');

var twitterBoltEl = document.querySelector('.js-twitter .js-bolt');
var twitterTimeLinkEl = document.querySelector('.js-twitter .js-time-link');
var twitterTextEl = document.querySelector('.js-twitter .js-text');

xhr({uri: '/api/twitter', json: true}, onTwitterReq);

function onTwitterReq (err, resp, body) {

    if ( err ) return;

    dom.removeClass(twitterBoltEl, 'u-hidden');

    twitterTimeLinkEl.href = body.link;

    var gt = new GlitchText(body.time, twitterTimeLinkEl, 800, 30, function () {
        twitterTextEl.innerHTML = '“' + body.text + '”';
    });
    gt.start();
}
