var service = require('../services').lastFm;
var moment = require('moment');

module.exports = {
    method: 'GET',
    path: '/api/lastfm',
    handler: function (request, reply) {

        service.call(function (err, res) {

            if ( err ) return reply(500, err);

            var track;

            if ( Array.isArray(res.body.recenttracks.track) ) {
                track = res.body.recenttracks.track[0];
            } else {
                track = res.body.recenttracks.track;
            }

            var time;

            if ( track['@attr'] && track['@attr'].nowplaying === 'true' ) {
                time = 'now';
            } else {
                time = moment(new Date(track.date['#text'])).fromNow();
            }

            reply({
                track: track.name,
                artist: track.artist['#text'],
                link: track.url,
                time: time
            });
        });
    }
};
