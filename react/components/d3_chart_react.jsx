import * as React from 'react';
// import { DataStore } from './stores/data_store';
import * as ServerActions from '../actions/server_actions';

const DataStore = require('../stores/data_store');
const d3Chart = require('./d3graph');


const D3Graph = React.createClass({

  componentDidMount() {
    d3Chart.create();
  },

  _onChange(){

  },

  draw(){

  },

  drawGraph(){

  },

  render(){
    return(
      <d3Chart />
    );
  }
});

module.exports = D3Graph;
