'use strict';

var xhr = require('xhr');
var dom = require('ampersand-dom');

var twitterEl = document.querySelector('.js-twitter');
var githubEl = document.querySelector('.js-github');
var lastFmEl = document.querySelector('.js-lastfm');
var foursquareEl = document.querySelector('.js-foursquare');

xhr({uri: '/api/twitter', json: true}, makeHandler(twitterEl, updateTweet));
xhr({uri: '/api/lastfm', json: true}, makeHandler(lastFmEl, updateLastFm));
xhr({uri: '/api/foursquare', json: true}, makeHandler(foursquareEl, updateFoursquare));
xhr({uri: '/api/github', json: true}, makeHandler(githubEl, updateGitHub));

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

    shaEl.innerHTML = body.sha;
    repoEl.innerHTML = body.repo;
    timeEl.innerHTML = body.time;
}

function updateFoursquare (el, body) {

    var venueEl = el.querySelector('.js-venue');
    var cityEl = el.querySelector('.js-city');
    var timeEl = el.querySelector('.js-time');

    venueEl.href = body.link;
    cityEl.href = body.link;

    venueEl.innerHTML = body.venue;
    cityEl.innerHTML = body.city;
    timeEl.innerHTML = body.time;
}

function updateLastFm (el, body) {

    var verbStemEl = el.querySelector('.js-verb-stem');
    var trackEl = el.querySelector('.js-track');
    var artistEl = el.querySelector('.js-artist');
    var timeEl = el.querySelector('.js-time');

    trackEl.href = body.link;
    artistEl.href = body.link;

    verbStemEl.innerHTML = body.time === 'now' ? 'ing' : 'ed';
    trackEl.innerHTML = body.track;
    artistEl.innerHTML = body.artist;
    timeEl.innerHTML = body.time;
}

function updateTweet (el, body) {

    var twitterTweetLinkEl = el.querySelector('.js-link');
    var twitterTextEl = el.querySelector('.js-text');
    var twitterTimeEl = el.querySelector('.js-time');

    twitterTweetLinkEl.href = body.link;
    twitterTextEl.innerHTML = '“' + body.text + '”';
    twitterTimeEl.innerHTML = body.time;
}
