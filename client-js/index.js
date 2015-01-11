'use strict';

var xhr = require('xhr');
var dom = require('ampersand-dom');
var GlitchText = require('./glitch-text');

var twitterEl = document.querySelector('.js-twitter');
var twitterTweetLinkEl = document.querySelector('.js-twitter .js-link');
var twitterTextEl = document.querySelector('.js-twitter .js-text');
var twitterTimeEl = document.querySelector('.js-twitter .js-time');

var lastFmEl = document.querySelector('.js-lastfm');
var lastFmVerbStem = document.querySelector('.js-lastfm .js-verb-stem');
var lastFmTrackEl = document.querySelector('.js-lastfm .js-track');
var lastFmArtistEl = document.querySelector('.js-lastfm .js-artist');
var lastFmTimeEl = document.querySelector('.js-lastfm .js-time');

var foursquareEl = document.querySelector('.js-foursquare');
var foursquareVenue = document.querySelector('.js-foursquare .js-venue');
var foursquareCity = document.querySelector('.js-foursquare .js-city');
var foursquareTimeEl = document.querySelector('.js-foursquare .js-time');

xhr({uri: '/api/twitter', json: true}, onTwitterReq);
xhr({uri: '/api/lastfm', json: true}, onLastFmReq);
xhr({uri: '/api/foursquare', json: true}, onFoursquareReq);

function onFoursquareReq (err, resp, body) {

    if ( err ) return;

    dom.removeClass(foursquareEl, 'u-hidden');

    foursquareVenue.href = body.link;
    foursquareCity.href = body.link;

    foursquareVenue.innerHTML = body.venue;
    foursquareCity.innerHTML = body.city;
    foursquareTimeEl.innerHTML = body.time;
}

function onLastFmReq (err, resp, body) {

    if ( err ) return;

    dom.removeClass(lastFmEl, 'u-hidden');

    lastFmTrackEl.href = body.link;
    lastFmArtistEl.href = body.link;

    lastFmVerbStem.innerHTML = body.time === 'now' ? 'ing' : 'ed';
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
