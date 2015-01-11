var request = require('request');
var util = require('util');
var https = require('https');

module.exports = FoursquareService;

function FoursquareService () {
}

FoursquareService.prototype.init = function (ops) {

    this.ops = ops;

    this.hostname = 'api.foursquare.com';
    this.path = '/v2/users/self/checkins?oauth_token='+this.ops.token+'&limit=1&v=20140131';
};

FoursquareService.prototype.call = function (cb) {

    var req = https.request({
        method: 'GET',
        path: this.path,
        hostname: this.hostname
    }, function (res) {
        res.setEncoding('utf8');
        res.on('error', function (err) {
            cb(err);
        });
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            data = JSON.parse(data);
            cb(null, data);
        });
    });

    req.end();
};
