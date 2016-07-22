import * as React from 'react';
import * as ClientActions from '../actions/client_actions';

const ControlPanel = React.createClass({

  getInitialState(){
    return {selected: 1};
  },

  selectCheck(n){
    return this.state.selected === n;
  },

  selectPane(evt){
    this.setState({selected: evt.target.id});
  },

  render(){
    return(
      <div className="control-panel-container">
        <h4>CONTROL PANEL</h4>
        <button className='pane-selector' id='1'
                disabled={this.selectCheck(1)}
                onClick={this.selectPane}>1</button>
              <button className='pane-selector' id='2'
                disabled={this.selectCheck(2)}
                onClick={this.selectPane}>2</button>
      </div>
    );
  }

});

module.exports = ControlPanel;
