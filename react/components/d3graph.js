import * as React from 'react';
// import { DataStore } from './stores/data_store';
import * as ServerActions from '../actions/server_actions';

const DataStore = require('../stores/data_store');

const d3Chart = {};

d3Chart.create = function(el, props, state){
  d3.select(el).append("svg").attr("width", props.width).attr("height", props.height);
};

d3Chart.update = function(el, data){
  console.log('update');
  data.data1.concat(data.data2).forEach( (point) => {
    d3.select("svg").append('circle').attr("cx", point.x).attr("cy", point.y).attr("r", 5).style("fill", "purple");
  });
};


module.exports = d3Chart;
