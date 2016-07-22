import * as React from 'react';
import * as ClientActions from '../actions/client_actions';

// const ClientActions = require('../actions/client_actions');

const CodeForm = React.createClass({

  getInitialState(){
    return {text1: 'function(array){\n\n}', text2: 'function(array){\n\n}'};
  },

  textChange1(evt){
    evt.preventDefault();
    const val = evt.target.value;
    this.setState({text1: val});
  },

  textChange2(evt){
    evt.preventDefault();
    const val = evt.target.value;
    this.setState({text2: val});
  },

  handleSubmit(evt){
    evt.preventDefault();
    const data = {method1: `(${this.state.text1})`, method2: `(${this.state.text2})`};
    console.log(data);
    ClientActions.sendMethods(data);
  },

  handleTab(event){
    if(event.keyCode === 9){
      event.preventDefault();
      let v = event.target.value;
      let s = event.target.selectionStart;
      let e = event.target.selectionEnd;
      event.target.value = v.substring(0, s)+'\t'+v.substring(e);
      this.selectionStart = s + 1;
      this.selectionEnd = s + 1;
      if(event.target.id === "code-1"){
        this.setState({ text1: event.target.value});
      } else {
        this.setState({ text2: event.target.value});
      }
      return false;
    }
  },

  render(){
    return(
      <div className="code-form-container">
        <form className="text-area" onSubmit={this.handleSubmit}>
          <textarea className="code-input" id="code-1"
            placeholder="Insert code here..."
            value={this.state.text1}
            onChange={this.textChange1}
            onKeyDown={this.handleTab}/><br/>
          <textarea className="code-input" id="code-2"
            placeholder="Insert code here..."
            value={this.state.text2}
            onChange={this.textChange2}
            onKeyDown={this.handleTab}/><br/>
        </form>
        <button className="code-submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }

});

module.exports = CodeForm;
