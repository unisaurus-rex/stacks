# JSPM Project Template 
This repo contains the basic framework for a project that contains jspm, D3 and bootstrap css.

## Install
First, run

    npm install
    
Then, run

    jspm install
    
## Installing Dependencies
Any dev dependencies should be installed with npm.  Any client side dependencies should be installed with jspm.

## This Project is a Dev Envrionment
The files and folders have been organized to support a development workflow.  If you would like to produce a production build, there are npm scripts you can run to install files in the build folder.
## Serving the Development Version
Download your favorite server package of choice ([http-server](https://www.npmjs.com/package/http-server) is nice). 
### A Note on JavaScript Modules
Any module you write needs to be imported in ```scripts/startup.js```, or used by a module imported in ```startup.js```
## Custom NPM Scripts
The following scripts can be run using

    npm run <command-name>
    
For more information see the package.json file

```npm run bundle-js```

Package all javascript dependencies into a single file, minify and write the file to build/build.js

```npm run bundle-sass```

Compile sass files in styles/sass and output the result to build/styles

```npm run build```

Run bundle-js and bundle-sass

```npm run clean-styles```

Remove build/styles/css and build/styles/fonts folders

```npm run sass```

Compile sass files in styles/sass and output to styles/css

```npm run watch-sass```

Watch styles/sass for changes. On any change, compile to styles/css

## Serving the Production Version
Run your server with a root folder of ```./build```

## Testing

### Unit Testing
[Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/1.0/index.html) are used for unit testing.  Jasmine is a testing framework and Karma is a test runner. What's the difference, you ask?  You write your tests using Jasmine and it's libraries.  Once you write your tests, you need to run the code in a browser javascript engine.  We use Karma to handle a lot of the annoying things that come with trying to run your code in different browser engines.  

#### Set up
Most of what you need to run tests will be installed when you run ```npm install```, but there are some additional steps you also need to take.

1) Install Jasmine globally (it's already installed locally) ```npm install -g jasmine```

2) Install the node karma command line tool globally ``` npm install -g karma-cli```

#### Running All Tests
```npm test ```

#### Running Select Tests
coming soon...

#### Adding Tests
All test files live in ```src/spec``` and should have a name that ends in ```-spec.js```  Any file that you want to test will need to be imported, just like you would with any other file in jspm.  For an example, see ```src/spec/hello-spec.js```

#### Errors When Running
When you try to run your new spec, you may encounter errors loading files imported by your new spec.  To fix these, try the following steps:

1) Check the error message in the console and make note of the load path Karma and SystemJS attempted to use. 

2) In ```src/config.js```, if there is not yet an entry in the map object for the file that is causing the error, add an entry and adjust any files that depend on the module accordingly.  

3) This should fix the issue in most cases.  If that doesn't work, you may need to look at ```karma.conf.js```  Specifically the proxies object and the jspm:paths object.

#### Technical Details You Won't Need Until You Do
1) The Karma server serves all files from /base/<your path starts here>

2) karma-jspm is a karma plugin that allows us to use our jspm/es6 modules with Karma and Jasmine. In some instances Karma's server paths may cause conflicts with the paths set up in the jspm config.js file.  To work around this, there is a jspm object in karma.conf.js that can be used to tell Karma how to reconfigure paths for testing only.

#### Using the Module
1) Add the path to system config (optional)
2) Import the module
3) Call the constructor function with optional arguments
4) The constructor function returns a function that takes two parameters: a selection and data

#### Structure of data


Example Data Structure:
Data should consist of an array of objects. Each object represents a stack. Each object has an attribute "key" which maps to the fi name. Each object should have a attribute named groups which is an array that has values for each rectangle in the stack and a total (total should always be 1 if representing percentages that add up to 100%). Every "groups" attr should contain a columns attribute with the keys to groups that should be charted. Please see example.
```
var exampleData = [ {key: "fiName"}, { key: "fiName2"}, { key: "fiName3"}, { key: "fiName4"}, { key: "fiName5"}, { key: "fiName6"}];

exampleData[0].groups = [{
  "sig_debit" : 0.25,
  "sig_credit" : 0.25,
  "pin_debit" : 0.5,
  total: 1
}];
exampleData[0].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

exampleData[1].groups = [ {
  "sig_debit" : 0.25,
  "sig_credit" : 0.25,
  "pin_debit" : 0.50,
  total: 1
}]
exampleData[1].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

exampleData[2].groups = [ {
  "sig_debit" : 0.25,
  "sig_credit" : 0.25,
  "pin_debit" : 0.50,
  total: 1
}]
exampleData[2].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

exampleData[3].groups = [ {
  "sig_debit" : 0.25,
  "sig_credit" : 0.25,
  "pin_debit" : 0.50,
  total: 1
}]
exampleData[3].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

exampleData[4].groups = [ {
  "sig_debit" : 0.25,
  "sig_credit" : 0.25,
  "pin_debit" : 0.50,
  total: 1
}]
exampleData[4].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

exampleData[5].groups = [ {
  "sig_debit" : 0.25,
  "sig_credit" : 0.25,
  "pin_debit" : 0.50,
  total: 1
}]
exampleData[5].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]
```

Example: 
``` 
import stacksChart from 'stacked';
var function = stacksChart();
```

## Configuration
Configuration can be assigned by calling the constructor function and chaining set functions

##### Configurable Options
width (int)
* Sets the max width of the chart

height (int)
* Sets the max height of the chart

margin (key/values)
* The keys are top, left, right, and bottom and the value is the margin that should be applied

classMap (key/values)
* Object holding key-value pairs where key is the rowId and the value is the class that will be applied.

classMapFunction (function)
* Function that returns the correct value from classMap given a rowId

## Example

#### Importing module 
```
import stackChart from 'stacked/stacked.js';

```
#### Example data set
```
  var data = [ {key: "fiName"}, { key: "fiName2"}, { key: "fiName3"}, { key: "fiName4"}, { key: "fiName5"}, { key: "fiName6"}];

  data[0].groups = [{
    "sig_debit" : 0.25,
    "sig_credit" : 0.25,
    "pin_debit" : 0.5,
    total: 1
  }];
  data[0].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

  data[1].groups = [ {
    "sig_debit" : 0.25,
    "sig_credit" : 0.25,
    "pin_debit" : 0.50,
    total: 1
  }]
  data[1].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

  data[2].groups = [ {
    "sig_debit" : 0.25,
    "sig_credit" : 0.25,
    "pin_debit" : 0.50,
    total: 1
  }]
  data[2].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

  data[3].groups = [ {
    "sig_debit" : 0.25,
    "sig_credit" : 0.25,
    "pin_debit" : 0.50,
    total: 1
  }]
  data[3].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

  data[4].groups = [ {
    "sig_debit" : 0.25,
    "sig_credit" : 0.25,
    "pin_debit" : 0.50,
    total: 1
  }]
  data[4].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

  data[5].groups = [ {
    "sig_debit" : 0.25,
    "sig_credit" : 0.25,
    "pin_debit" : 0.50,
    total: 1
  }]
  data[5].groups.columns = [ "sig_debit", "sig_credit", "pin_debit"]

```
#### Define variables to be passed to setters
```
var classMapFunction = function (d){
  return classMap[ d.key ];
}
var classMap =  {"pin_debit": "fill-blue", "sig_credit": "fill-red",
"sig_debit": "fill-gray-light" };

var margin = {top: 40, right: 40, bottom: 40, left: 40};
var width =400;
var height =150;

//draw svg
var svg = d3.select("#stackid")  .append("div")
  .classed("svg-container", true)
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")     
  .attr("viewBox", -margin.left + " " + -margin.right + " "+ width + " " + height)
;

```
#### Configuration and function call
```
var testStack = stackChart()
  .margin(margin)
  .width(width)
  .height(height)
  .classMap(classMap)
  .classMapFunction(classMapFunction)
;

testStack(svg, data);
```