const React = require('react');
const ReactDOM = require('react-dom');
const SiteDescriptionOne = require('./site_description_stepone');
const SiteDescriptionTwo = require('./site_description_steptwo');
const SiteDescriptionThree = require('./site_description_stepthree');

const WelcomeMessage = React.createClass({
  getInitialState() {
    return{
      siteDescription: 1
    };
  },

  changeDescriptionStep(step) {
    this.setState({siteDescription: step});
  },

  render(){
    let description = this.state.description;
    let previousStep = this.state.siteDescription - 1;
    let nextStep = this.state.siteDescription + 1;
    return(
      <div className='site-desc-full'>
        <h2 className="welcome-header">Welcome to Algo Arena!!</h2>
        <SiteDescriptionOne/>

        <button className='pane-selector prev-button' onClick={this.changeDescriptionStep().bind(this)}> Previous </button>
        <button className='pane-selector next-button' onClick={this.props.closeModal}> Next </button>
        <button className='pane-selector close-button' onClick={this.props.closeModal}> Close & Start Testing! </button>
        <br></br>
      </div>
    );
  }

});


module.exports = WelcomeMessage;

// <img className="arena" src="http://vignette3.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/8a/Screen_shot_2014-08-17_at_3.38.02_PM.png/revision/latest?cb=20140817075739"></img>
