import * as React from 'react';
import * as ClientActions from '../actions/client_actions';
import * as Library from '../../sorts';

const ControlPanel = React.createClass({

  getInitialState(){
    return {selected: '1', min: 500, max: 32000, tests: 7};
  },

  selectCheck(n){
    return this.state.selected === n;
  },

  selectPane(evt){
    this.setState({selected: evt.target.id});
  },

  setRange(evt){
    evt.preventDefault();
    const val = evt.target.value;
    if(evt.target.id === 'range-min'){this.setState({min: val});}
    if(evt.target.id === 'range-max'){this.setState({max: val});}
  },

  setTests(evt){
    evt.preventDefault();
    const val = evt.target.value;
    this.setState({tests: val})
  },

  demoSort(evt){
    let pane = document.getElementById(`code-${this.state.selected}`);
    let text = Library[evt.target.id]();
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
        <input
          className='range-input' id='range-min'
          type='number' placeholder='min size'
          onChange={this.setRange} value={this.state.min} />
        <input
          className='range-input' id='range-max'
          type='number' placeholder='max size'
          onChange={this.setRange} value={this.state.max} />
        <input
          className='num-tests-input' id='num-tests'
          type='number' placeholder='num tests'
          onChange={this.setTests} value={this.state.tests} />
        <button
          className='demo-sort' id='bubbleSortRec'
          onClick={this.demoSort}>Bubble Sort</button>
        <button
          className='demo-sort' id='quickSortRec'
          onClick={this.demoSort}>Quick Sort</button>

      </div>

    );
  }

});

module.exports = ControlPanel;
