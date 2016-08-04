const React = require('react');
const ReactDOM = require('react-dom');
const SiteDescriptionOne = require('./site_description_stepone');
const SiteDescriptionTwo = require('./site_description_steptwo');
const SiteDescriptionThree = require('./site_description_stepthree');

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
    console.log(newStateNum);
    this.setState({siteDescriptionNumber: newStateNum});
  },

  chooseStepComponent() {
    switch (this.state.siteDescriptionNumber) {
      case 1:
        // console.log(1);
        return <SiteDescriptionOne/>;
      case 2:
        // console.log(2);
        return <SiteDescriptionTwo/>;
      case 3:
        // console.log(2);
        return <SiteDescriptionThree/>;
    }
  },

  render(){
    let description = this.chooseStepComponent();

    return(
      <div className='site-desc-full'>
        <h2 className="welcome-header">Welcome to Algo Arena!!</h2>
        {description}

        <button className='pane-selector prev-button' onClick={this.previousInstructions}> Previous </button>
        <button className='pane-selector next-button' onClick={this.nextInstructions}> Next </button>
        <button className='pane-selector close-button' onClick={this.props.closeModal}> Close & Start Testing! </button>
        <br></br>
      </div>
    );
  }

});


module.exports = WelcomeMessage;
