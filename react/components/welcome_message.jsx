const React = require('react');
const ReactDOM = require('react-dom');
const SiteDescription = require('./site_description');

const WelcomeMessage = React.createClass({
  render(){
    return(
      <div className='site-desc-full'>
        <h2 className="welcome-header">Welcome to Algo Arena!!</h2>
        <SiteDescription/>
        <button className='pane-selector' onClick={this.props.closeModal}> CLOSE </button>
        <br></br>
        <img className="arena" src="http://vignette3.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/8a/Screen_shot_2014-08-17_at_3.38.02_PM.png/revision/latest?cb=20140817075739"></img>
      </div>
    );
  }

});


module.exports = WelcomeMessage;
