const React = require('react');
const ReactDOM = require('react-dom');

const SiteDescriptionOne = React.createClass({
  render(){
    return(
      <div>
       <h2 className='welcome-text'>Welcome to Algo Arena!</h2>
       <p className='description-text'>Here at Algorithm Arena, we only care about one thing. How fast your array sorting functions are, and how good you are with plain old JavaScript!</p>
       <img style={{'margin': '0 auto'}} src='http://i.imgur.com/fq0A8hx.gif'></img>
     </div>

    );
  }

});

module.exports = SiteDescriptionOne;
