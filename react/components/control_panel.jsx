import * as React from 'react';
import * as ClientActions from '../actions/client_actions';
const Library = require('../../sorts');

const ControlPanel = React.createClass({

  getInitialState(){
    return {selected: '1'};
  },

  selectCheck(n){
    return this.state.selected === n;
  },

  selectPane(evt){
    this.setState({selected: evt.target.id});
  },

  demoSort(evt){
    let pane = document.getElementById(`code-${this.state.selected}`);
    let text = Library[evt.target.id].toString();
    pane.value = text;
    pane.setAttribute('value', text);
  },

  render(){
    return(
      <div className="control-panel-container">
        <h4>CONTROL PANEL</h4>
        <button
          className='pane-selector' id='1'
          disabled={this.selectCheck('1')}
          onClick={this.selectPane}>1</button>
        <button
          className='pane-selector' id='2'
          disabled={this.selectCheck('2')}
          onClick={this.selectPane}>2</button>
        <button
          className='demo-sort' id='bubbleSort'
          onClick={this.demoSort}>Bubble Sort</button>
        <button
          className='demo-sort' id='quickSort'
          onClick={this.demoSort}>Quick Sort</button>

      </div>

    );
  }

});

module.exports = ControlPanel;
