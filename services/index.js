var CachedService = require('./cached-service');
var TwitterService = require('./twitter-service');

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

module.exports = {
    twitter: twitterCached
};
