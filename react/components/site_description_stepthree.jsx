const React = require('react');
const ReactDOM = require('react-dom');

const SiteDescriptionThree = React.createClass({
  render(){
    return(
      <div>
        <div>
          <h2 className='welcome-text'>Examples!</h2>
          <div className='step-three'>
            <p>
              bubblesort example
            </p>
            <p>
              quicksort example
            </p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SiteDescriptionThree;
