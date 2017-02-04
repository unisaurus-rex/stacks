import jquery from 'jquery';
import bootstrap from 'bootstrap-sass';
//import {donutChart} from 'donut-widget/donutWidget.js';
import {stacksChart} from 'stacked';
import * as d3 from "d3";


var margin = {top: 40, right: 40, bottom: 40, left: 40};
var width =400;
var height =150;

  
var svg = d3.select("#stackid")  .append("div")
  .classed("svg-container", true)
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")     
  .attr("viewBox", -margin.left + " " + -margin.right + " "+ width + " " + height)
;

window.svg = svg;
window.d3 = d3;

var classMapFunction = function (d){
  return classMap[ d.key ];
}

var classMap =  {"pin_debit": "fill-blue", "sig_credit": "fill-red",
"sig_debit": "fill-gray-light", "Fast Food": "fill-orange-yellow",
"Pharmacies": "fill-teal", "All Others": "fill-gray-dark" };

var testStack = stacksChart()
  .margin(margin)
  .width(width)
  .height(height)
  .classMap(classMap)
  .classMapFunction(classMapFunction)
;

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

var dataTwo = [ {key: "fiName"}, { key: "fiName2"}];
dataTwo[0].groups = [{
  "sig_debit" : 0.5,
  "sig_credit" : 0.5, 
  total: 1
}];
dataTwo[0].groups.columns = [ "sig_debit", "sig_credit"];
dataTwo[1].groups = [ {
  "sig_debit" : 0.5,
  "sig_credit" : 0.5,
  
  total: 1
}]
dataTwo[1].groups.columns = [ "sig_debit", "sig_credit"];

window.data= data;
window.dataTwo = dataTwo;

var testStacks = stacksChart()
  .margin({top: 0, left: 0, right: 0, bottom: 0})
  .width(width - margin.left - margin.right)
  .height(height - margin.top - margin.bottom)
  .classMap(classMap)
  .classMapFunction(classMapFunction)
;

window.testStack = testStacks;

testStacks(svg, data);