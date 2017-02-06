import {stacksChart} from 'stacked';
import * as d3 from "d3";


describe("The grouped stack chart", function(){

	window.d3 = d3;
	jasmine.clock().install();

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


	beforeEach (function(){

		var margin = {top: 40, right: 40, bottom: 40, left: 40};
		var width =400;
		var height =150;

		var svg = d3.select("body")  
			.append("div")
		  .classed("svg-container", true)
		  .append("svg")
		  .attr("preserveAspectRatio", "xMinYMin meet")     
		  .attr("viewBox", -margin.left + " " + -margin.right + " "+ width + " " + height)
		;


		var classMap =  {"pin_debit": "fill-blue", "sig_credit": "fill-red",
		"sig_debit": "fill-gray-light", "Fast Food": "fill-orange-yellow",
		"Pharmacies": "fill-teal", "All Others": "fill-gray-dark" };

		var classMapFunction = function (d){
			return classMap[ d.key ];
		}

		var testStack = stacksChart()
		  .margin(margin)
		  .width(width)
		  .height(height)
		  .classMap(classMap)
		  .classMapFunction(classMapFunction)
		;

		testStack(svg, data)
	});

	afterEach ( function(){
		d3.selectAll('.svg-container').remove();
	})
	
	it('should be created, defined, and not null', function() {
		expect(d3.selectAll('svg')._groups[0][0]).not.toBeNull();
		expect(d3.selectAll('svg')._groups[0][0]).toBeDefined();			
	});

	it("should create the correct amount of stacks ", function() { 
		expect(d3.selectAll('.fi')._groups[0].length).toEqual(6);
	});

	it("should create the correct amount of rect elements", function() { 
		expect(d3.selectAll('.fi rect')._groups[0].length).toEqual(18);
	});

	it('should create every rect with one classe', function() {		
		var classes = 0;
		var rects = d3.selectAll('.fi rect')._groups[0];

		for(var i =0; i< rects.length; i++){
			classes = classes + rects[i].classList.length
		}
		expect( classes).toEqual(18);

	});

	it('should create every rect with a valid class', function(done) {
		
		var bars = d3.selectAll('.fi rect')._groups[0];
		var test = true;

		setInterval(function(){
			for(var i =0; i< bars.length; i++){		
				if ( !(bars[i].classList[0] == "fill-blue" ||
					 bars[i].classList[0] == "fill-red" ||
					 bars[i].classList[0] == "fill-gray-light") && test == true){
						test = false
				}//end if
			}//end for
		
	}, 2000)
		jasmine.clock().tick(2001 /* a space odyssey*/);
		expect (test).toBe(true);
		done();

	});

});
