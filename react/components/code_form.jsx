import * as React from 'react';
import * as ClientActions from '../actions/client_actions';

// const ClientActions = require('../actions/client_actions');


const CodeForm = React.createClass({

  getInitialState(){
    return {text1: 'function name(array){\n\n//enter your code here\n//you may change the function name \n//but otherwise do not modify the first line\n\n}', text2: 'function name(array){\n\n//enter your code here\n//you may change the function name \n//but otherwise do not modify the first line\n\n}'};
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

  makeArr(){
    let arr = [];
    const min = parseInt(document.getElementById('range-min').value);
    const max = parseInt(document.getElementById('range-max').value);
    const n = parseInt(document.getElementById('num-tests').value);
    const step = (max - min) / (n - 1);
    // console.log(n, min, max, step);
    for (let i = 0; i < n; i++) {
      arr.push( ~~(min + (i * step)) );
    }
    return arr;
  },

  handleSubmit(evt){
    evt.preventDefault();
    const el1 = document.getElementById('code-1');
    const el2 = document.getElementById('code-2');
    const lengthArr = this.makeArr();
    const name1 = el1.value.match(/function(.*)\(/)[1].trim();
    const name2 = el2.value.match(/function(.*)\(/)[1].trim();
    let method1 = `var ${name1} = ${el1.value}`;
    let method2 = `var ${name2} = ${el2.value}`;
    // const data = {method1: `(${this.state.text1})`, method2: `(${this.state.text2})`};
    const data = {method1: method1, method2: method2, name1: name1, name2: name2, lengthArr: lengthArr};
    // console.log(data);
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
          <textarea className="code-input left" id="code-1"
            placeholder="Insert code here..."
            value={this.state.text1}
            onChange={this.textChange1}
            onKeyDown={this.handleTab}/><br/>
          <textarea className="code-input right" id="code-2"
            placeholder="Insert code here..."
            value={this.state.text2}
            onChange={this.textChange2}
            onKeyDown={this.handleTab}/><br/>
        </form>
      </div>
    );
  }

});

module.exports = CodeForm;
