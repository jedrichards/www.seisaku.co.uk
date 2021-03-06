'use strict';

var xhr = require('xhr');
var dom = require('ampersand-dom');

var twitterEl = document.querySelector('.js-twitter');
var githubEl = document.querySelector('.js-github');
var lastFmEl = document.querySelector('.js-lastfm');
var foursquareEl = document.querySelector('.js-foursquare');
var stravaEl = document.querySelector('.js-strava');

xhr({uri: '/api/twitter', json: true}, makeHandler(twitterEl, updateTweet));
xhr({uri: '/api/lastfm', json: true}, makeHandler(lastFmEl, updateLastFm));
xhr({uri: '/api/foursquare', json: true}, makeHandler(foursquareEl, updateFoursquare));
xhr({uri: '/api/github', json: true}, makeHandler(githubEl, updateGitHub));
xhr({uri: '/api/strava', json: true}, makeHandler(stravaEl, updateStrava));

function makeHandler (el, f) {

    return function (err, res, body) {

        if ( err ) return;

        dom.removeClass(el, 'u-hidden');

        f(el, body);
    };
}

function updateGitHub (el, body) {

    var shaEl = el.querySelector('.js-sha');
    var repoEl = el.querySelector('.js-repo');
    var timeEl = el.querySelector('.js-time');

    shaEl.href = body.link;
    repoEl.href = body.link;

    shaEl.textContent = body.sha;
    repoEl.textContent = body.repo;
    timeEl.textContent = body.time;
}

function updateFoursquare (el, body) {

    var venueEl = el.querySelector('.js-venue');
    var cityEl = el.querySelector('.js-city');
    var timeEl = el.querySelector('.js-time');

    venueEl.href = body.link;
    cityEl.href = body.link;

    venueEl.textContent = body.venue;
    cityEl.textContent = body.city;
    timeEl.textContent = body.time;
}

function updateLastFm (el, body) {

    var verbStemEl = el.querySelector('.js-verb-stem');
    var trackEl = el.querySelector('.js-track');
    var artistEl = el.querySelector('.js-artist');
    var timeEl = el.querySelector('.js-time');

    trackEl.href = body.link;
    artistEl.href = body.link;

    verbStemEl.textContent = body.time === 'now' ? 'ing' : 'ed';
    trackEl.textContent = body.track;
    artistEl.textContent = body.artist;
    timeEl.textContent = body.time;
}

function updateTweet (el, body) {

    var twitterTweetLinkEl = el.querySelector('.js-link');
    var twitterTextEl = el.querySelector('.js-text');
    var twitterTimeEl = el.querySelector('.js-time');

    twitterTweetLinkEl.href = body.link;
    twitterTextEl.innerHTML = '“' + body.text + '”';
    twitterTimeEl.textContent = body.time;
}

function updateStrava (el, body) {

    var stravaLinkEl = el.querySelector('.js-link');
    var stravaDistanceEl = el.querySelector('.js-distance');
    var stravaPaceMinutesEl = el.querySelector('.js-pace-minutes');
    var stravaPaceSecondsEl = el.querySelector('.js-pace-seconds');
    var stravaLocationEl = el.querySelector('.js-location');
    var stravaTimeEl = el.querySelector('.js-time');

    stravaLinkEl.href = body.profile;
    stravaDistanceEl.textContent = body.distance;
    stravaPaceMinutesEl.textContent = body.paceMins;
    stravaPaceSecondsEl.textContent = body.paceSecs;
    stravaLocationEl.textContent = body.location;
    stravaTimeEl.textContent = body.time;
}
