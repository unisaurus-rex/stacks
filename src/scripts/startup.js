import jquery from 'jquery';
import bootstrap from 'bootstrap-sass';
//import {donutChart} from 'donut-widget/donutWidget.js';
import {stacksChart} from 'stacked';
import * as d3 from "d3";

//set up sizing
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

//setup config objects
var classMapFunction = function (d){
  return classMap[ d.key ];
}

var classMap =  {"pin_debit": "fill-blue", "sig_credit": "fill-red",
"sig_debit": "fill-gray-light", "Fast Food": "fill-orange-yellow",
"Pharmacies": "fill-teal", "All Others": "fill-gray-dark" };

//create test data
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

/*****************/

var dataTwo = [ {key: "fiName"}, { key: "fiName2"}, { key: "fiName3"}, { key: "fiName4"}, { key: "fiName5"}, { key: "fiName6"}];

dataTwo[0].groups = [{
  "sig_debit" : 0.5,
  "sig_credit" : 0.5,
  total: 1
}];
dataTwo[0].groups.columns = [ "sig_debit", "sig_credit"]

dataTwo[1].groups = [ {
  "sig_debit" : 0.5,
  "sig_credit" : 0.5,
  total: 1
}]
dataTwo[1].groups.columns = [ "sig_debit", "sig_credit"]

dataTwo[2].groups = [ {
  "sig_debit" : 0.5,
  "sig_credit" : 0.5,
  total: 1
}]
dataTwo[2].groups.columns = [ "sig_debit", "sig_credit"]

dataTwo[3].groups = [ {
  "sig_debit" : 0.5,
  "sig_credit" : 0.5,
  total: 1
}]
dataTwo[3].groups.columns = [ "sig_debit", "sig_credit"]

dataTwo[4].groups = [ {
  "sig_debit" : 0.5,
  "sig_credit" : 0.5,
  total: 1
}]
dataTwo[4].groups.columns = [ "sig_debit", "sig_credit"]

dataTwo[5].groups = [ {
  "sig_debit" : 0.5,
  "sig_credit" : 0.5,
  total: 1
}]
dataTwo[5].groups.columns = [ "sig_debit", "sig_credit"]

/*****************/

var dataThree = [ {key: "fiName"}, { key: "fiName2"}, { key: "fiName3"}, { key: "fiName4"}, { key: "fiName5"}, { key: "fiName6"}];

dataThree[0].groups = [{
  "pin_debit" : 1,
  total: 1
}];
dataThree[0].groups.columns = [ "pin_debit"]

dataThree[1].groups = [ {
  "pin_debit" : 1,
  total: 1
}]
dataThree[1].groups.columns = [ "pin_debit"]

dataThree[2].groups = [ {
  "pin_debit" : 1,
  total: 1
}]
dataThree[2].groups.columns = [ "pin_debit"]

dataThree[3].groups = [ {
  "pin_debit" : 1,
  total: 1
}]
dataThree[3].groups.columns = [ "pin_debit"]

dataThree[4].groups = [ {
  "pin_debit" : 1,
  total: 1
}]
dataThree[4].groups.columns = [ "pin_debit"]

dataThree[5].groups = [ {
  "pin_debit" : 1,
  total: 1
}]
dataThree[5].groups.columns = [ "pin_debit"]

//congif chart
var testStacks = stacksChart()
  .margin( margin)
  .width(width )
  .height(height )
  .classMap(classMap)
  .classMapFunction(classMapFunction)
;

//add to window for testing
window.data= data;
window.dataTwo = dataTwo;
window.dataThree = dataThree;
window.svg = svg;
window.d3 = d3;
window.testStack = testStacks;

//draw chart
testStacks(svg, data);