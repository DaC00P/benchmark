import * as React from 'react';
import * as ClientActions from '../actions/client_actions';
import * as Library from '../../sorts';
import * as Hover from '../../hover_text';
const ReactTooltip = require("react-tooltip");

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
        <div className='selector-buttons'>
          <button
            className='pane-selector' id='1'
            disabled={this.selectCheck('1')}
            onClick={this.selectPane}>LEFT PANE</button>
          <button
            className='pane-selector' id='2'
            disabled={this.selectCheck('2')}
            onClick={this.selectPane}>RIGHT PANE</button>
        </div>
        <div className='test-setup'>
          <div className='button-container'>
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
          </div>
          <div className='selector-buttons'>
            <button
              className='pane-selector' id='run'
              disabled={false} />
          </div>
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
            className='demo-sort' id='quickSort'
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
        </div>
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

      </div>

    );
  }

});

const Tool = React.createClass({
  render(){

    const text = Hover[this.props.sort]();

    return(
      <div dangerouslySetInnerHTML={{__html: text}} />
    );
  }
});

module.exports = ControlPanel;
