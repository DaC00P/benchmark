import * as React from 'react';
// import { DataStore } from './stores/data_store';
import * as ServerActions from '../actions/server_actions';

const DataStore = require('../stores/data_store');


const Graph = React.createClass({

//  constructor(props){
//    super(props);
//    this._onChange = this._onChange.bind(this);
//  }

  componentDidMount() {
    this.canvas = document.getElementById('graph');
    this.ctx = this.canvas.getContext('2d');
    this.draw();
    DataStore.addListener(this._onChange);
  },

  _onChange(){
    this.draw();
  },

  draw(){
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'white';
    // this.ctx.fillRect(20, 0, 2, this.canvas.height);
    // this.ctx.fillRect(0, this.canvas.height - 20, this.canvas.width, 2);
    this.drawGraph();
  },

  drawGraph(){
    let data1 = DataStore.get(1);
    const ctx = this.ctx
    const canvas = this.canvas;
    data1.forEach( (point) => {
      ctx.beginPath();
      ctx.arc(point.x, canvas.height - point.y, 5, 0, 2*Math.PI);
      ctx.fill();
    });

    setTimeout(function(){
      let data = [{x: 50, y: 550}, {x: 150, y: 450}, {x: 250, y: 350}, {x: 350, y: 250}, {x: 450, y: 150}, {x: 550, y: 50}]
      ServerActions.storeData({data1: data, data2: []});
    }, 2000)
  },

  render(){
    return(
      <div className="graph-container">
        <canvas id="graph" width={600} height={600} />
      </div>
    );
  }
});

module.exports = Graph;
