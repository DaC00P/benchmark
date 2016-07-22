import * as React from 'react';
// import { DataStore } from './stores/data_store';
import * as ServerActions from '../actions/server_actions';

const DataStore = require('../stores/data_store');

const d3Chart = {};

d3Chart.create = function(el, props, state){
  d3.select("d3chart").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
};


d3Chart.update =function(){
  console.log('update');
};


module.exports = d3Chart;
