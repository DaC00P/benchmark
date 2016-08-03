import * as React from 'react';
// import { DataStore } from './stores/data_store';
import * as ServerActions from '../actions/server_actions';

const DataStore = require('../stores/data_store');

const d3Chart = {};

const svgWidth = 667;
const svgHeight = 667;

const chartMargin = {
  top:    0.05 * svgWidth,
  right:  0.05 * svgWidth,
  bottom: 0.05 * svgWidth,
  left:   0.05 * svgWidth
};

const chartWidth = svgWidth - (chartMargin.right + chartMargin.left);
const chartHeight = svgHeight - (chartMargin.top + chartMargin.bottom);

d3Chart.create = function(el, props, state){

  this.svg = d3.select(el).append('svg').attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
  this.chart = this.svg.append('g').attr('class', 'chart-display')
        .attr('transform', `translate(${chartMargin.left},${chartMargin.top})`);
  this.chart.append('g').attr('class', 'axis x')
            .attr('transform', `translate(0,${chartHeight})`);
  this.chart.append('g').attr('class', 'axis y').selectAll('text').style('text-anchor', 'end');

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

d3Chart.getAxesInfo = function(data){
  let xDomain = [data.xAxis[0], data.xAxis[data.xAxis.length - 1]];
  let yDomain = [data.rawData1[0].y, data.rawData1[0].y];
  data.rawData1.concat(data.rawData2).forEach( (point) => {
    if(point.y > yDomain[1]){yDomain[1] = point.y}
    if(point.y < yDomain[0]){yDomain[0] = point.y}
  });
  return {xDomain: xDomain, yDomain: yDomain};
}


d3Chart.update = function(el, data){
  d3.selectAll('circle').remove();
  this.data = data;
  const domains = d3Chart.getAxesInfo(data);
  console.log(domains);
  const xScale = d3.scaleLinear().range([0, chartWidth]).domain(domains.xDomain);
  const yScale = d3.scaleLinear().range([chartHeight, 0]).domain(domains.yDomain);

  const xAxis = d3.axisBottom().scale(xScale);
  const yAxis = d3.axisLeft().scale(yScale);

  this.chart.append('g').call(yAxis);
  this.chart.append('g').attr('transform', `translate(0 ,${chartHeight})`).call(xAxis);

  debugger;

  data.rawData1.forEach( (point, index) => {
    this.chart.append('circle').attr('class', 'data-point series-1')
      .attr('id', `1-${index}`).attr("cx", xScale(point.x)).attr("cy", yScale(point.y))
      .attr("r", 5).on('mouseover', d3Chart.mouseover).on('mouseout', d3Chart.mouseout);
  });

  data.rawData2.forEach( (point, index) => {
    this.chart.append('circle').attr('class', 'data-point series-2')
      .attr('id', `2-${index}`).attr("cx", xScale(point.x)).attr("cy", yScale(point.y))
      .attr("r", 5).on('mouseover', d3Chart.mouseover).on('mouseout', d3Chart.mouseout);
  });
};


module.exports = d3Chart;
