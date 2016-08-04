const React = require('react');
const ReactDOM = require('react-dom');

const SiteDescriptionThree = React.createClass({
  render(){
    return(
      <div>
        <ul>
          <p>Here at Algorithm Arena, we only care about one thing. How fast your sort functions are, and how good you are with plain old JavaScript!</p>
          <p>To test your algorithm, please input it into the text pane of your choice, and pick one of our sorts for the other pane.
          Once you press Run Tests, we will benchmark your code server-side with the use of virtual machines.
          Due to limitations of these virtual machines, we cannot currently allow the use of Promises, or the requirement of any external modules/packages.
          We do not currently have a leaderboard, but that is in the pipene! </p>
          Please contact us if you have any questions or concerns(GitHub links are in the main page footer).
          Happy Benchmarking!!
        </ul>
      </div>
    );
  }

});

module.exports = SiteDescriptionThree;
