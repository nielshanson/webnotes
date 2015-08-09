Node.js Notes
-------------

* Essentially JavaScript run on the server
* Create JS code that runs together 'modules'

# Node Modules

* Connect JavaScript code functionality through modules

```
var a = 1;

// module.exports.a = a;
// module.exports.b = 2;

// exports.a = a;
// exports.b = 2;

module.exports = function() {
  console.log('module 2!');
};
```

# Node Package Manager (npm)

* Large number of packages available
* e.g., Installs the `underscore` library into the `node_modules` directory

```{r}
npm install underscore
```

var _ = require('underscore')

## npm packages

* Creating a bunch of server js code that now requires bunch of packages
* Create your own package
* e.g., Creates a `package.json` file with dependencies

```
npm init
```

* When using packages you can also automatically add them to `package.json` with the `-S` (i.e., 'save') flag
* E.g, installs the `backbone` package to `node_modules` and addes to `package.json`

```
npm install backbone -S
```

* What this means is that when someone downloads your code from a github repository they need only use the `npm install command`
* The `node_modules` need not be saved in your GitHub repo
* e.g., From the source code, installs the required modules specified in the `pacakge.json` file

```
npm install
```

# Example 'Basic Webserver' `http`

```
var http = require('http');
var server = http.createServer(function(request, response)) {
  console.log('got a request');
  response.write('hi');
});

server.listen(3000);
```m
