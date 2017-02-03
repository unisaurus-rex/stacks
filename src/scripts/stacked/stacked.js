
/**
 * @module stacked
 * @description Stacked chart module 
 * @requires d3
 * @exports stackChart
 */

import * as d3 from "d3";

/**
 * @function stackChart
 * @description Creates and configures the charting function 
 * @returns {function} chart - Charting function that takes an svg selection and data
 */
export default function stackChart(){
  var margin = {top: 30, right: 40, bottom: 50, left: 40};
  var width =0;// 900 - margin.left - margin.right;
  var height =0;// 300 - margin.top - margin.bottom;

//  var x = d3.scaleBand();
  var y = d3.scaleLinear();
  var y2 = d3.scaleLinear();
  //var z = d3.scaleOrdinal(d3.schemeCategory20);
  var classMapFunction = function (d){
    return classMap[ d.key ];
  }

  var classMap =  {"Department Store": "fill-blue", "Grocery": "fill-red",
  "Family Clothing": "fill-gray-light", "Fast Food": "fill-orange-yellow",
  "Pharmacies": "fill-teal", "All Others": "fill-gray-dark" };


function chart(svg, data){
  d3.selectAll("g.serie").transition().duration(1000).style("opacity", 0).remove();
  console.log(data);

  var x = d3.scaleBand()
      .rangeRound([0, width - margin.left - margin.right])
      .padding(0.5)
      //.align(0.3)
      ;

  var y = d3.scaleLinear()
      .rangeRound([height-margin.top - margin.bottom, 0]);

  var stack = d3.stack();




   var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    data.sort(function(a, b) { return b.total - a.total; });

    x.domain(data.map(function(d) { return d.key; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]).nice();
   // z.domain(data.columns.slice(1));



    var newg = g.selectAll(".serie")
      .data(stack.keys(data.columns.slice(1))(data))
      .enter().append("g")
        .attr("class", function(d){ return "serie " + classMapFunction(d) })
        .style("opacity", 0);
        newg
        .transition()
        .duration(1000)
        .style("opacity", 1)
//        .attr("class", classMapFunction)
        //.exit().remove()
        ;
    
   var rectUpdate= newg
      .selectAll("rect")
      .data(function(d) { console.log(d); return d; });

    rectUpdate
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.key); })   
        .attr("width", x.bandwidth())
        .merge(rectUpdate)
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .exit()
        .attr("height", 0)
        .remove();
    ;

    var yAxis = d3.axisLeft()
        .scale(y)
        .ticks(5)
    ;

      svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+ margin.left + ", " + margin.top + ")")
        .call(yAxis)
      ;  
    
    var xAxis = d3.axisBottom()
        .scale(x)
        .tickSize(0)
        .tickPadding(10)
    ;



      var n = height - margin.bottom;
      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate("+ margin.left + ","+ n + ")")
        .call(xAxis)
      ;  
    
  //});

  function type(d, i, columns) {
    var t = 0;
    for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
    d.total = t;
    return d;
  }
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
