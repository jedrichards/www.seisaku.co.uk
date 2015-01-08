var projects = require('../data/projects');

module.exports = {
    method: 'GET',
    path: '/project/{slug}',
    handler: function (request, reply) {

        var project = projects[request.params.slug];

        if ( project ) {
            reply.view('project', {
                project: project
            });
        } else {
            reply.redirect('/');
        }
    }
};
