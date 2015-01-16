[grunt-rsync](https://www.npmjs.com/package/grunt-rsync) and its sister package
[rsyncwrapper](https://www.npmjs.com/package/rsyncwrapper) are two npm modules that I actively
maintain on GitHub. I created these packages a few years ago while starting out with Node.js and npm
and I had a need to make use of the rsync tool as part of a Grunt-based deployment pipeline.

With the benefit of increased experience I now question the wisdom of wrapping a cli tool like rsync
in Node.js. But nevertheless the plugin scratches an itch for many, it's downloaded over 3K times
per month, it's [used by Opera](https://github.com/jedrichards/grunt-rsync/issues/29) to deploy
their dev.opera.com site (!) and I've received many contributions and pull requests. It was a great
opportunity for some active experience in the GitHub open source community.
