var markdown = require('markdown').markdown;
var projects = require('./projects');
var fs = require('fs');

function getProject (slug) {

    var project = projects[slug];

    if ( !project ) return;

    if ( !project.description ) {
        var description = fs.readFileSync(__dirname + '/md/' + slug + '.md', {encoding: 'utf8'});
        project.description = markdown.toHTML(description);
    }

    return {
        title: project.title,
        description: project.description,
        date: project.date
    }
}

module.exports = {
    getProject: getProject
}
