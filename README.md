# www.seisaku.co.uk

My personal portfolio site.

## Technologies

- Node.js [Hapi](https://github.com/hapijs/hapi) server
- [Dokku](http://progrium.viewdocs.io/dokku/) deployment

## Development

To start the server in development mode and start watching local files for changes run:

```
npm run start-dev
```

## Deployment

1. Add a `www-seisaku-co-uk` remote on the Dokku app server:
```
git remote add dokku dokku@seisakuapp.co.uk:www-seisaku-co-uk
```

2. Push the master branch to deploy:
```
git push dokku master
```
