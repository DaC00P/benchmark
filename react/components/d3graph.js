import * as React from 'react';
// import { DataStore } from './stores/data_store';
import * as ServerActions from '../actions/server_actions';

const DataStore = require('../stores/data_store');

const d3Chart = {};

d3Chart.create = function(el, props, state){
  d3.select(el).append("svg").attr("width", props.width).attr("height", props.height).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
};

d3Chart.update = function(){
  console.log('update');
};


module.exports = d3Chart;
