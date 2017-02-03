import jquery from 'jquery';
import bootstrap from 'bootstrap-sass';
//import {donutChart} from 'donut-widget/donutWidget.js';
import stackChart from 'stacked';
import * as d3 from "d3";

var data= [ 
  { 
    "key": "fi name",
    "sig_debit": 0.33,
    "sig_credit": 0.33,
    "pin_debit": 0.33,
    total: 1 },
  { 
    "key": "fi name 2",
    "sig_debit": 0.33,
    "sig_credit": 0.33,
    "pin_debit": 0.33,
    total: 1 
  } 
];

var dataTwo= [ 
  { 
    "key": "fi name",
    "sig_credit": 0.33,
    "pin_debit": 0.33,
    total: 1 },
  { 
    "key": "fi name 2",
    "sig_credit": 0.33,
    "pin_debit": 0.33,
    total: 1 
  } 
];



//add columns attribute
data.columns = Object.keys(data[0]).filter(function (obj){
  if ( obj != "total"){
    return obj;
  }
})
dataTwo.columns = Object.keys(dataTwo[0]).filter(function (obj){
  if ( obj != "total"){
    return obj;
  }
})
console.log(data);
  
var svg = d3.select("#stackid")  .append("div")
  .classed("svg-container", true)
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")     
  .attr("viewBox","0 0 " + 800 + " " + 300)
;

window.data= data;
window.dataTwo = dataTwo;
window.svg = svg;
window.d3 = d3;

  var classMapFunction = function (d){
    return classMap[ d.key ];
  }

  var classMap =  {"pin_debit": "fill-blue", "sig_credit": "fill-red",
  "sig_debit": "fill-gray-light", "Fast Food": "fill-orange-yellow",
  "Pharmacies": "fill-teal", "All Others": "fill-gray-dark" };



var margin = {top: 40, right: 40, bottom: 40, left: 40};
var width =800;
var height =300;

var testStack = stackChart()
  .margin(margin)
  .width(width)
  .height(height)
  .classMap(classMap)
  .classMapFunction(classMapFunction)
;

testStack(svg, data);

window.testStack = testStack;