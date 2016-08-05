const React = require('react');
const ReactDOM = require('react-dom');

const SiteDescriptionTwo = React.createClass({
  render(){
    return(
      <div className='steptwo-container'>
        <h2 className='welcome-text'>Instructions!</h2>
        <div className='step-two'>
          <ul className='description-text'>
            <li>
              To test your algorithm, please input it into the text pane of your choice! You can pit it against your own algorithm, or against one of our built in sorts!
            </li>
            <li>
              You are restricted to ES6 Syntax, ES6 synatax may not compile in our virtual machines. No Consts or Lets please!
            </li>
            <li>
              At this time we are pleased to offer the JS Library Sort, Bubble Sort, Quick Sort(recursive), Merge Sort(iterative), Radix Sort, Heap Sort, and Counting Sort.
            </li>
            <li>
              Once you press Run Tests, we will benchmark your code server-side with the use of virtual machines.
            </li>
            <li>
              Due to limitations of these virtual machines, we cannot currently allow the use of Promises, or the requirement of any external modules/packages. POJO only!
            </li>
          </ul>
        </div>
        <img className='steptwo-img' style={{'margin': '0 auto'}} src='http://i.stack.imgur.com/lXZkh.png'></img>
      </div>
    );
  }

});

module.exports = SiteDescriptionTwo;
