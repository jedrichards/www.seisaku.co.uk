var twitter = require('../services').twitter;
var moment = require('moment');

module.exports = {
    method: 'GET',
    path: '/api/twitter',
    handler: function (request, reply) {

        twitter.call(function (err, res) {
            if ( err ) {
                reply(500, err);
            } else {
                var tweet = res[0];
                reply({
                    text: tweet.text,
                    time: moment(new Date(tweet.created_at)).fromNow(),
                    link: 'https://twitter.com/' + tweet.user.screen_name+'/status/' + tweet.id_str
                });
            }
        });
    }
};
