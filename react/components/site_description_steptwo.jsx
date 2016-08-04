const React = require('react');
const ReactDOM = require('react-dom');

const SiteDescriptionTwo = React.createClass({
  render(){
    return(
      <div>
        <h2 className='welcome-text'>Instructions!</h2>
        <div className='step-two'>
          <ul className='description-text'>
            <li>
              To test your algorithm, please input it into the text pane of your choice.
            </li>
            <li>
              You can choose to pit your algorithms against each other, or versus one of our built in sortts.
            </li>
            <li>
              Once you press Run Tests, we will benchmark your code server-side with the use of virtual machines.
            </li>
            <li>
              Due to limitations of these virtual machines, we cannot currently allow the use of Promises, or the requirement of any external modules/packages. POJO only!
            </li>
          </ul>
        </div>
        <img style={{'margin': '0 auto'}} src='http://i.stack.imgur.com/lXZkh.png'></img>
      </div>
    );
  }

});

module.exports = SiteDescriptionTwo;
