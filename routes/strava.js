var service = require('../services').strava;
var moment = require('moment');

module.exports = {
    method: 'GET',
    path: '/api/strava',
    handler: function (request, reply) {

        service.call(function (err, res) {

            if ( err ) return reply.code(500);

            var run = res[0];

            var metersPerSecond = run.average_speed;
            var secondsPerKm = 1000 / metersPerSecond;
            var minutesPerKm = secondsPerKm / 60;
            var paceMins = Math.floor(minutesPerKm);
            var paceSecs = Math.floor(minutesPerKm * 60) % 60;

            var location = run.location_city || run.location_state;

            reply({
              time: moment(new Date(run.start_date)).fromNow(),
              distance: (run.distance/1000).toFixed(2),
              pace: minutesPerKm,
              paceMins: paceMins,
              paceSecs: paceSecs,
              location: location,
              profile: 'https://www.strava.com/athletes/10486923'
            });

            // reply({
            //     venue: checkin.venue.name,
            //     time: moment(parseInt(checkin.createdAt, 10)*1000).fromNow(),
            //     city: checkin.venue.location.city,
            //     link: 'https://foursquare.com/v/'+checkin.venue.id
            // });
        });
    }
};
