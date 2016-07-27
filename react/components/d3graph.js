import * as React from 'react';
// import { DataStore } from './stores/data_store';
import * as ServerActions from '../actions/server_actions';

const DataStore = require('../stores/data_store');

const d3Chart = {};
const xScale = d3.scaleBand().rangeRound([0, 600]).paddingInner(0.1);
const xAxis = d3.axisBottom().scale(xScale);
const yAxis = d3.axisLeft();

d3Chart.create = function(el, props, state){
  d3.select(el).append("svg").attr("width", props.width).attr("height", props.height);
  d3.select(el).call(xAxis);
};

d3Chart.mouseover = function(){
  let evt = d3.event;
  console.log(d3.event.target);
  let target = event.target;
  d3.select(target).attr('r', 8);
  let coords = d3.mouse(this);
  d3.select('svg').append('text').text('d3 mouse').attr('x', coords[0] + 7).attr('y', coords[1] - 7);

}



d3Chart.mouseout = function(){
  console.log('mouseover');
  console.log(d3.event.target);
  d3.selectAll('text').remove();
  let target = d3.event.target;
  d3.select(target).attr('r', 5);
}

d3Chart.getText = function(target){
  return `Array Length: ${target.cx}, Time: ${target.cy}`
}


d3Chart.update = function(el, data){
  console.log('update');
  d3.selectAll('circle').remove();
  // data.data1.concat(data.data2).forEach( (point) => {
  //   d3.select("svg").append('circle').attr("cx", point.x).attr("cy", 600 - point.y).attr("r", 5).style("fill", "purple");
  // });
  data.data1.forEach( (point, index) => {
    d3.select("svg").append('circle').attr('class', 'data-point series-1').attr('id', `s1-${index}`).attr("cx", point.x).attr("cy", 600 - point.y).attr("r", 5).on('mouseover', d3Chart.mouseover).on('mouseout', d3Chart.mouseout);
  });
  data.data2.forEach( (point, index) => {
    d3.select("svg").append('circle').attr('class', 'data-point series-2').attr('id', `s2-${index}`).attr("cx", point.x).attr("cy", 600 - point.y).attr("r", 5).on('mouseover', d3Chart.mouseover).on('mouseout', d3Chart.mouseout);
  });
};


module.exports = d3Chart;
