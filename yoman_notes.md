Yeoman Notes
------------

Notes from <https://www.youtube.com/watch?v=gKiaLSJW5xI&list=UUVTlvUkGslCV_h-nSAId8Sw&feature=iv&src_vid=bo5MM2N_3tw&annotation_id=annotation_698469083>

```
sudo npm install -g yo
sudo npm install -g generator-webapp
```

* generator-webapp is the 'basic' webapp, but other users can create Yeoman generators

## Asside: Installing the JavaScript Task Runner 'Grunt' and Package Manager for the Web 'Bower'

```
npm install -g grunt-cli
npm install -g bower
```

* Start a server in directory with:

```
bower server
```

* Optimize your website with `grunt build` which will create it in the `dist/` directory

```
grunt build
```

## Dependency management

* Installs 'backbone' into the `bower_components` folder and adds reference in `bower.json` file

```
bower install backbone -S
```

* `bower_components/` folder not needed in the GitHub directory
* Users need only run `bower install` to setup their own version of the required code
