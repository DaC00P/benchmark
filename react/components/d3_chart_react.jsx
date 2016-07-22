import * as React from 'react';
// import { DataStore } from './stores/data_store';
import * as ServerActions from '../actions/server_actions';

const DataStore = require('../stores/data_store');
const d3Chart = require('./d3graph');


const D3Graph = React.createClass({

  getInitialState(){
    return {data: {}};
  },

  componentDidMount(){
    let el = document.getElementById('chart');
    this.listener = DataStore.addListener(this._onChange);
    d3Chart.create(el, {height: 600, width: 600, data: this.state.data});
  },

  _onChange(){
    const data = {data1: DataStore.get(1), data2: DataStore.get(2)};
    let el = document.getElementById('chart');
    d3Chart.update(el, data);
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    return(
      <div className="chart" id="chart" />
    );
  }
});

module.exports = D3Graph;
