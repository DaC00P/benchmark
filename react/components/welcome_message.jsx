const React = require('react');
const ReactDOM = require('react-dom');
const SiteDescriptionOne = require('./site_description_stepone');
const SiteDescriptionTwo = require('./site_description_steptwo');
const SiteDescriptionThree = require('./site_description_stepthree');
import * as Library from '../../sorts';
import * as ClientActions from '../actions/client_actions';

const WelcomeMessage = React.createClass({
  getInitialState() {
    return{
      siteDescriptionNumber: 1
    };
  },

  previousInstructions() {
    let newStateNum = this.state.siteDescriptionNumber - 1;
    if (newStateNum < 1) {
      newStateNum = 1;
    }
    this.setState({siteDescriptionNumber: newStateNum});
  },

  nextInstructions() {
    let newStateNum = this.state.siteDescriptionNumber + 1;
    if (newStateNum > 3) {
      newStateNum = 3;
    }

    this.setState({siteDescriptionNumber: newStateNum});
  },

  chooseStepComponent() {
    switch (this.state.siteDescriptionNumber) {
      case 1:
        return <SiteDescriptionOne/>;
      case 2:
        return <SiteDescriptionTwo/>;
      case 3:
        return <SiteDescriptionThree/>;
    }
  },

  runDemo(evt) {
    evt.preventDefault();
    const el1 = document.getElementById('editor-1');
    const el2 = document.getElementById('editor-2');
    const bs = Library[`bubbleSort`]();
    const qs = Library[`quickSortRec`]();
    ace.edit(el1).getSession().setValue(qs);
    ace.edit(el2).getSession().setValue(bs);
    const name1 = `quickSort`;
    const name2 = `bubbleSort`;
    const method1 = `var ${name1} = ${qs}`;
    const method2 = `var ${name2} = ${bs}`;
    const lengthArr = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];
    const data = {method1: method1, method2: method2, name1: name1, name2: name2, lengthArr: lengthArr};
    ClientActions.sendMethods(data);
    this.props.closeModal();
  },

  render(){
    let description = this.chooseStepComponent();
    let nextButton = (
        <button className='pane-selector modal-button' onClick={this.nextInstructions}> Next </button>
    );

    if (this.state.siteDescriptionNumber === 3) {
      nextButton = (<div></div>);
    }

    return(
      <div className='site-desc-full'>
        {description}
        <div className='modal-panel-container'>
          <button className='pane-selector modal-button' onClick={this.previousInstructions}> Previous </button>
          <button className='pane-selector modal-button' onClick={this.runDemo}> Run Demo </button>
          <button className='pane-selector modal-button' onClick={this.props.closeModal}> Close & Start Testing! </button>
          {nextButton}

        </div>
      </div>
    );
  }

});


module.exports = WelcomeMessage;
