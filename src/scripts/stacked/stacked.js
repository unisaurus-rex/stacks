
/**
 * @module stacked
 * @description Stacked chart module 
 * @requires d3
 * @exports stackChart
 */

import * as d3 from "d3";

export function stacksChart(){
  var margin = {top: 30, right: 40, bottom: 50, left: 40};
  var width =0;// 900 - margin.left - margin.right;
  var height =0;// 300 - margin.top - margin.bottom;

  var x = d3.scaleBand();
  var y = d3.scaleLinear();
  var y2 = d3.scaleLinear();
  var z = d3.scaleOrdinal(d3.schemeCategory20);
  var classMapFunction = function (d){
    return classMap[ d.key ];
  }

  var classMap =  {"Department Store": "fill-blue", "Grocery": "fill-red",
  "Family Clothing": "fill-gray-light", "Fast Food": "fill-orange-yellow",
  "Pharmacies": "fill-teal", "All Others": "fill-gray-dark" };


function chart(svg, data){

  x
    .rangeRound([width - margin.left - margin.right, 0])
    .domain( data.map( function(d){ return d.key} ) )
    .padding(0.5)
  ;
  
  y
    .rangeRound([0,height -margin.top - margin.bottom])
    .domain([0, d3.max(data, function(d) { return 1; })]).nice()
  ;
  
  y2
    .rangeRound([height - margin.top - margin.bottom, 0 ])
    .domain([0, d3.max(data, function(d) { return 1; })]).nice()
  ;

  var fi = svg.selectAll("g.fi")
    .data(data, function(d) {return d.key;})
  ;

  var enterAndUpdate = fi.enter().append("g")
    .merge(fi)
    .attr("class", "fi")
    .attr("transform", function(d){ return "translate(" + x(d.key) + ",0)"} )
  ; 

  var stack = d3.stack().keys(data[0].groups.columns);

  var gUpdate = enterAndUpdate.selectAll("rect")
  .data( function (d) { return stack(d.groups) }, function(d){return d.key});

  var g = gUpdate
    .enter()
      .append("rect")
      .attr("width", x.bandwidth())
      .attr("class", function(d){ return classMapFunction(d)})
    .merge(gUpdate)
      .transition()
      .duration(1000)
      .attr("y", function(d) { return y2(d[0][1]); })   
      .attr("height", function(d) { return  y(d[0][1]) - y(d[0][0]); })
  ;

  gUpdate.exit()
    .transition()
    .duration(1000)
    .attr("height", 0)
    .attr("y", 0)
  ;


  if (svg.selectAll(".y-axis")._groups[0].length<1){
    // y axis
    svg.append("g")
      .attr("class", "y-axis")
      .call(
        d3.axisLeft(y2)
        .ticks(4, "%")
      )
    ;
  }

  var p = height - margin.bottom - margin.top;

  var xAxis = d3.axisBottom()
      .scale(x)
      .tickSize(0)
  ;

  if (svg.selectAll(".x.axis")._groups[0].length < 1){
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate("+ "0"+"," +p + ")")
      .call(xAxis)
    ;  
  }

//    if (svg.selectAll(".y.axis")._groups[0].length < 1){
//      svg.append("g")
//        .attr("class", "y axis")
//        .call(yAxis)
//      ;  
//    }
}

chart.width = function(value){
  if (!arguments.length) return width;
  width = value;
  return chart;
}
chart.margin = function(value){
  if (!arguments.length) return margin;
  margin = value;
  return chart;
}
chart.height = function(value){
  if (!arguments.length) return height;
  height = value;
  return chart;
}
chart.classMap = function(value){
  if (!arguments.length) return classMap;
  classMap = value;
  return chart;
}
chart.classMapFunction = function(value){
  if(!arguments.length) return classMapFunction;
  classMapFunction = value;
  return chart;
}

  return chart;
}