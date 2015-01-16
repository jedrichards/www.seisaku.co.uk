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
    }
}

function updateGitHub (el, body) {

    var githubShaEl = el.querySelector('.js-sha');
    var githubRepoEl = el.querySelector('.js-repo');
    var githubTimeEl = el.querySelector('.js-time');

    githubShaEl.href = body.link;
    githubRepoEl.href = body.link;

    githubShaEl.innerHTML = body.sha;
    githubRepoEl.innerHTML = body.repo;
    githubTimeEl.innerHTML = body.time;
}

function updateFoursquare (el, body) {

    var foursquareVenue = el.querySelector('.js-venue');
    var foursquareCity = el.querySelector('.js-city');
    var foursquareTimeEl = el.querySelector('.js-time');

    foursquareVenue.href = body.link;
    foursquareCity.href = body.link;

    foursquareVenue.innerHTML = body.venue;
    foursquareCity.innerHTML = body.city;
    foursquareTimeEl.innerHTML = body.time;
}

function updateLastFm (el, body) {

    var lastFmVerbStem = el.querySelector('.js-verb-stem');
    var lastFmTrackEl = el.querySelector('.js-track');
    var lastFmArtistEl = el.querySelector('.js-artist');
    var lastFmTimeEl = el.querySelector('.js-time');

    lastFmTrackEl.href = body.link;
    lastFmArtistEl.href = body.link;

    lastFmVerbStem.innerHTML = body.time === 'now' ? 'ing' : 'ed';
    lastFmTrackEl.innerHTML = body.track;
    lastFmArtistEl.innerHTML = body.artist;
    lastFmTimeEl.innerHTML = body.time;
}

function updateTweet (el, body) {

    var twitterTweetLinkEl = el.querySelector('.js-link');
    var twitterTextEl = el.querySelector('.js-text');
    var twitterTimeEl = el.querySelector('.js-time');

    twitterTweetLinkEl.href = body.link;
    twitterTextEl.innerHTML = '“' + body.text + '”';
    twitterTimeEl.innerHTML = body.time;
}
