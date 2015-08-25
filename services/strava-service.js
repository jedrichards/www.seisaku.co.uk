var strava = require('strava-v3');

module.exports = StravaService;

function StravaService () {
}

StravaService.prototype.init = function () {
};

StravaService.prototype.call = function (cb) {
  strava.athlete.listActivities({}, cb);
};
