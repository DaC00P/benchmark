import * as React from 'react';
import * as ClientActions from '../actions/client_actions';

// const ClientActions = require('../actions/client_actions');


const CodeForm = React.createClass({

  getInitialState(){
    return {text: 'function name(array){\n\n//enter your code here\n//you may change the function name \n//but otherwise do not modify the first line\n\n}'};
  },

  textChange1(evt){
    evt.preventDefault();
    let val = evt.target.value;
    if(val === ''){val = 'function name(array){\n\n}'}
    this.setState({text: val});
  },

  // textChange2(evt){
  //   evt.preventDefault();
  //   const val = evt.target.value;
  //   this.setState({text2: val});
  // },

  // makeArr(){
  //   let arr = [];
  //   const min = parseInt(document.getElementById('range-min').value);
  //   const max = parseInt(document.getElementById('range-max').value);
  //   const n = parseInt(document.getElementById('num-tests').value);
  //   const step = (max - min) / (n - 1);
  //   // console.log(n, min, max, step);
  //   for (let i = 0; i < n; i++) {
  //     arr.push( ~~(min + (i * step)) );
  //   }
  //   return arr;
  // },

  // handleSubmit(evt){
  //   evt.preventDefault();
  //   const el1 = document.getElementById('code-1');
  //   const el2 = document.getElementById('code-2');
  //   const lengthArr = this.makeArr();
  //   const name1 = el1.value.match(/function(.*)\(/)[1].trim();
  //   const name2 = el2.value.match(/function(.*)\(/)[1].trim();
  //   let method1 = `var ${name1} = ${el1.value}`;
  //   let method2 = `var ${name2} = ${el2.value}`;
  //   // const data = {method1: `(${this.state.text1})`, method2: `(${this.state.text2})`};
  //   const data = {method1: method1, method2: method2, name1: name1, name2: name2, lengthArr: lengthArr};
  //   // console.log(data);
  //   ClientActions.sendMethods(data);
  // },

  handleTab(event){
    if(event.keyCode === 9){
      event.preventDefault();
      // console.log(event.target.id);
      let v = event.target.value;
      let s = event.target.selectionStart;
      let e = event.target.selectionEnd;
      debugger;
      event.target.value = v.substring(0, s)+'   '+v.substring(e);
      this.selectionStart = s + 3;
      this.selectionEnd = s + 3;
      if(event.target.id === "code-1"){
        this.setState({text1: event.target.value});
      } else {
        this.setState({text2: event.target.value});
      }
      return false;
    }
  },

  render(){
    let side = 'right'
    if(this.props.n === 1){side = 'left'}
    return(
      <div className="code-form-container">
        <textarea className={`code-input-${side}`} id={`code-${this.props.n}`}
          placeholder="Insert code here..."
          value={this.state.text}
          onChange={this.textChange1}
          onKeyDown={this.handleTab}/>
      </div>
    );
  }

});

module.exports = CodeForm;
