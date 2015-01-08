var Twit = require('twit');

module.exports = TwitterService;

function TwitterService () {
}

TwitterService.prototype.init = function (ops) {

    this.ops = ops;

    this.twit = new Twit({
        consumer_key: ops.consumerKey,
        consumer_secret: ops.consumerSecret,
        access_token: ops.token,
        access_token_secret: ops.tokenSecret
    });
};

TwitterService.prototype.call = function (cb) {

    var endpoint = 'statuses/user_timeline';
    var params = {
        'screen_name': this.ops.user,
        count: "1",
        exclude_replies: "true"
    };

    this.twit.get(endpoint, params, cb);
};
