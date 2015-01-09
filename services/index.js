var CachedService = require('./cached-service');
var TwitterService = require('./twitter-service');
var LastFmService = require('./lastfm-service');

var twitter = new TwitterService();
twitter.init({
    user: process.env.TWITTER_USER,
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_TOKEN,
    tokenSecret: process.env.TWITTER_TOKEN_SECRET
});

var twitterCached = new CachedService();
twitterCached.init(twitter);

var lastFm = new LastFmService();
lastFm.init({
    user: process.env.LASTFM_USER,
    key: process.env.LASTFM_KEY
});

var lastFmCached = new CachedService();
lastFmCached.init(lastFm);

module.exports = {
    twitter: twitterCached,
    lastFm: lastFmCached
};
