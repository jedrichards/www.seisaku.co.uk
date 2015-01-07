# www.seisaku.co.uk

My personal portfolio site.

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

1. Add a `www-seisaku-co-uk` remote on the Dokku app server:
```
git remote add dokku dokku@seisakuapp.co.uk:www-seisaku-co-uk
```

2. Push the master branch to deploy:
```
git push dokku master
```
