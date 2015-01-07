# www.seisaku.co.uk

My personal portfolio site.

https://codeship.com/projects/527c06e0-78d1-0132-c5fa-26f825463266/status?branch=master

## Technologies

- Node.js [Hapi](https://github.com/hapijs/hapi) server
- [Dokku](http://progrium.viewdocs.io/dokku/) deployment

## Development

The following npm scripts are available:

Name | Description
--- | ---
`start` | Starts the server in production mode. Dokku runs this script automatically during deployment to start the app.
`start:dev` | Starts the server in development mode, restarting the server and rebuilding when local files change.

## Deployment

Pushes to the `master` branch will trigger Codeship to deploy to Dokku.
