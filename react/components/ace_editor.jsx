import * as React from 'react';
import * as ClientActions from '../actions/client_actions';
import ControlPanel from './control_panel';

const DefaultText = 'function name(array){\n\n//enter your code here\n//you may change the function name \n//but otherwise do not modify the first line\n\n}';
const DefaultText2 = 'function name(array){\n\n}';


const AceEditor = React.createClass({

  componentDidMount(){
    this.editor = ace.edit(`editor-${this.props.n}`);
    this.editor.setTheme("ace/theme/twilight");
    this.editor.getSession().setMode("ace/mode/javascript");
    this.editor.getSession().on('change', this.handleChange);
    this.editor.$blockScrolling = Infinity; //disables deprecated functionality
    this.editor.setValue(DefaultText);
  },

  handleChange(e){
    let val = this.editor.getSession().getValue();
  },

  render(){
    return(
      <div className='editor' id={`editor-${this.props.n}`}></div>
    );
  }
});

module.exports = AceEditor;
