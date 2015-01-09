'use strict';

var xhr = require('xhr');
var dom = require('ampersand-dom');
var GlitchText = require('./glitch-text');

var twitterEl = document.querySelector('.js-twitter');
var twitterTweetLinkEl = document.querySelector('.js-twitter .js-link');
var twitterTextEl = document.querySelector('.js-twitter .js-text');
var twitterTimeEl = document.querySelector('.js-twitter .js-time');

var lastFmEl = document.querySelector('.js-lastfm');
var lastFmTrackEl = document.querySelector('.js-lastfm .js-track');
var lastFmArtistEl = document.querySelector('.js-lastfm .js-artist');
var lastFmTimeEl = document.querySelector('.js-lastfm .js-time');

xhr({uri: '/api/twitter', json: true}, onTwitterReq);
xhr({uri: '/api/lastfm', json: true}, onLastFmReq);

function onLastFmReq (err, resp, body) {

    if ( err ) return;

    dom.removeClass(lastFmEl, 'u-hidden');

    lastFmTrackEl.href = body.link;
    lastFmArtistEl.href = body.link;

    lastFmTrackEl.innerHTML = body.track;
    lastFmArtistEl.innerHTML = body.artist;
    lastFmTimeEl.innerHTML = body.time;
}

function onTwitterReq (err, resp, body) {

    if ( err ) return;

    dom.removeClass(twitterEl, 'u-hidden');

    twitterTweetLinkEl.href = body.link;
    twitterTextEl.innerHTML = '“' + body.text + '”';
    twitterTimeEl.innerHTML = body.time;
}
