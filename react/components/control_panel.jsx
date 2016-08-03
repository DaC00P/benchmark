import * as React from 'react';
import * as ClientActions from '../actions/client_actions';
import * as Library from '../../sorts';
import * as Hover from '../../hover_text';
const ReactTooltip = require("react-tooltip");
const DataStore = require('../stores/data_store');

const ControlPanel = React.createClass({

  getInitialState(){
    return {running: false, selected: '1', min: 1000, max: 10000, tests: 10};
  },

  componentDidMount() {
    this.listener = DataStore.addListener(this._onChange);
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  _onChange(){
    this.setState({running: false});
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
    let pane = document.getElementById(`editor-${this.state.selected}`);
    let text = Library[evt.target.id]();
    // pane.value = text;
    // pane.setAttribute('value', text);
    ace.edit(pane).getSession().setValue(text);
  },

  // makes int array of test lengths from specified user inputs
  makeArr(){
    let arr = [];
    const min = parseInt(document.getElementById('range-min').value);
    const max = parseInt(document.getElementById('range-max').value);
    const n = parseInt(document.getElementById('num-tests').value);
    const step = (max - min) / (n - 1);
    for (let i = 0; i < n; i++) {
      arr.push( ~~(min + (i * step)) );
    }
    return arr;
  },

  clearPane(evt){
    evt.preventDefault();
    let pane = document.getElementById(`code-${this.state.selected}`);
    let text = 'function name(array){\n\n}';
    pane.value = text;
    pane.setAttribute('value', text);
  },

  handleSubmit(evt){
    evt.preventDefault();
    //disables 'run tests button'
    this.setState({running: true});
    //gets Ace Editor elements and values
    const el1 = document.getElementById('editor-1');
    const el2 = document.getElementById('editor-2');
    const value1 = ace.edit(el1).getSession().getValue();
    const value2 = ace.edit(el2).getSession().getValue();
    const lengthArr = this.makeArr();
    //parses out declared function name
    const name1 = value1.match(/function(.*)\(/)[1].trim();
    const name2 = value2.match(/function(.*)\(/)[1].trim();
    let method1 = `var ${name1} = ${value1}`;
    let method2 = `var ${name2} = ${value2}`;
    const data = {method1: method1, method2: method2, name1: name1, name2: name2, lengthArr: lengthArr};
    ClientActions.sendMethods(data);
    console.log(data);
  },

  render(){
    return(
      <div className="control-panel-container">
        <div className='selector-buttons'>
          <button
            className='pane-selector' id='1'
            disabled={this.selectCheck('1')}
            onClick={this.selectPane}>LEFT PANE</button>
          <button
            className='pane-selector' id='2'
            disabled={this.selectCheck('2')}
            onClick={this.selectPane}>RIGHT PANE</button>
          <div className='button-container'>
            <input
              className='range-input' id='range-min'
              type='number' placeholder='min size'
              data-tip data-for='min-length'
              onChange={this.setRange} value={this.state.min} />
            <input
              className='range-input' id='range-max'
              type='number' placeholder='max size'
              data-tip data-for='max-length'
              onChange={this.setRange} value={this.state.max} />
            <input
              className='num-tests-input' id='num-tests'
              type='number' placeholder='num tests'
              data-tip data-for='num-tests'
              onChange={this.setTests} value={this.state.tests} />
          </div>
          <button
            className='pane-selector' id='2'
            disabled={this.state.running}
            onClick={this.handleSubmit}>RUN TESTS</button>
            <button
              className='pane-selector' id='clear'
              disabled={this.state.running}
              onClick={this.clearPane}>CLEAR PANE</button>
        </div>
        <div className='library-sorts'>
          <button
            className='demo-sort' id='jsSort'
            data-tip data-for='jsSort'
            onClick={this.demoSort}>JS Library Sort</button>
          <button
            className='demo-sort' id='bubbleSort'
            data-tip data-for='bubbleSort'
            onClick={this.demoSort}>Bubble Sort</button>
          <button
            className='demo-sort' id='quickSortRec'
            data-tip data-for='quickSortRec'
            onClick={this.demoSort}>Quick Sort (rec)</button>
          <button
            className='demo-sort' id='mergeSortIter'
            data-tip data-for='mergeSortIter'
            onClick={this.demoSort}>Merge Sort (iter)</button>
          <button
            className='demo-sort' id='radixSort'
            onClick={this.demoSort}
            data-tip data-for='radixSort'>Radix Sort</button>
          <button
            className='demo-sort' id='heapSort'
            data-tip data-for='heapSort'
            onClick={this.demoSort}>Heap Sort</button>
          <button
            className='demo-sort' id='countingSort'
            data-tip data-for='countingSort'
            onClick={this.demoSort}>Counting Sort</button>
        </div>
        <HoverStash />
      </div>

    );
  }

});

//holds tooltip objects
const HoverStash = React.createClass({
  render(){
    return(
      <div>
        <ReactTooltip id='heapSort'>
          <Tool sort={'heapSort'} />
        </ReactTooltip>
        <ReactTooltip id='quickSortRec'>
          <Tool sort={'quickSortRec'} />
        </ReactTooltip>
        <ReactTooltip id='mergeSortIter'>
          <Tool sort={'mergeSortIter'} />
        </ReactTooltip>
        <ReactTooltip id='bubbleSort'>
          <Tool sort={'bubbleSort'} />
        </ReactTooltip>
        <ReactTooltip id='radixSort'>
          <Tool sort={'radixSort'} />
        </ReactTooltip>
        <ReactTooltip id='jsSort'>
          <Tool sort={'jsSort'} />
        </ReactTooltip>
        <ReactTooltip id='contingSort'>
          <Tool sort={'contingSort'} />
        </ReactTooltip>
        <ReactTooltip id="max-length">Maximium Array Length</ReactTooltip>
        <ReactTooltip id="min-length">Minimum Array Length</ReactTooltip>
        <ReactTooltip id="num-tests">Number of Tests</ReactTooltip>
      </div>
    );
  }
});

//makes tooltip content
const Tool = React.createClass({
  render(){

    const text = Hover[this.props.sort]();

    return(
      <div dangerouslySetInnerHTML={{__html: text}} />
    );
  }
});

module.exports = ControlPanel;
