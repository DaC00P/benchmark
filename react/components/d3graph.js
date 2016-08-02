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
};

d3Chart.mouseover = function(){
  let evt = d3.event;
  console.log(d3.event.target);
  let target = event.target;
  d3.select(target).attr('r', 8);
  let coords = d3.mouse(this);
  let text = d3Chart.getText(target);
  d3.select('svg').append('text').text(text.line1).attr('x', coords[0] -30).attr('y', coords[1] - 30);
  d3.select('svg').append('text').text(text.line2).attr('x', coords[0] -30).attr('y', coords[1] - 15);

}

d3Chart.mouseout = function(){
  console.log('mouseover');
  console.log(d3.event.target);
  d3.selectAll('text').remove();
  let target = d3.event.target;
  d3.select(target).attr('r', 5);
}

d3Chart.getText = function(target){
  console.log(target);
  let point = target.id.split('-');
  let data = this.data[`rawData${point[0]}`][point[1]];
  return {line1: `Length: ${data.x}`, line2: `Time: ${data.y}ms`};
}


d3Chart.update = function(el, data){
  console.log('data');
  this.data = data;
  d3.selectAll('circle').remove();

  data.data1.forEach( (point, index) => {
    d3.select("svg").append('circle').attr('class', 'data-point series-1').attr('id', `1-${index}`).attr("cx", point.x).attr("cy", 600 - point.y).attr("r", 5).on('mouseover', d3Chart.mouseover).on('mouseout', d3Chart.mouseout);
  });
  data.data2.forEach( (point, index) => {
    d3.select("svg").append('circle').attr('class', 'data-point series-2').attr('id', `2-${index}`).attr("cx", point.x).attr("cy", 600 - point.y).attr("r", 5).on('mouseover', d3Chart.mouseover).on('mouseout', d3Chart.mouseout);
  });
};


module.exports = d3Chart;
