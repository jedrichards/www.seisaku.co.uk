var service = require('../services').twitter;
var moment = require('moment');
var twitterText = require('twitter-text');

module.exports = {
    method: 'GET',
    path: '/api/twitter',
    handler: function (request, reply) {

        service.call(function (err, res) {
            if ( err ) {
                reply(500, err);
            } else {
                var tweet = res[0];
                reply({
                    text: twitterText.autoLink(tweet.text),
                    time: moment(new Date(tweet.created_at)).fromNow(),
                    link: 'https://twitter.com/' + tweet.user.screen_name+'/status/' + tweet.id_str
                });
            }
        });
    }
};
