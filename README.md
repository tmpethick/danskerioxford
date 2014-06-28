This is a website by Jakob Pethick seeking to help Danish students apply for Oxford (or Cambridge). As of now it's a difficult and unnecessarily confusing process to find relevant information. This websites tries to gather some of the learnings he made and some of the information he already collected–so it doesn't have to be done again.

*This is one of my old projects move to Github in my attempt to host some of my simpel static stuff from here.*


## Development

To run the server locally you need the gems:
```
gem install bundler
bundle install
```

Now you can run it with:
```
bundle exec jekyll serve -w
```

.. and it will automatically track file changes (except for `_config.yml`).

###Css

If you're going to change the styles install stylus and nib:
```
npm install -g stylus
npm install nib
```

To compile the stylus files into css run:
```
make
```

