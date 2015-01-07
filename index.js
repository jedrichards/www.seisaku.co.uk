var hapi = require('hapi');

var server = new hapi.Server();

server.connection({
    port: process.env.PORT || 3000
});

server.views({
    engines: {
        hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views'
});

server.route(require('./routes/index'));

server.start(function () {
    console.log('Server started', server.info.uri);
});
