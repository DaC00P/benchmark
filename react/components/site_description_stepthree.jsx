const React = require('react');
const ReactDOM = require('react-dom');

const SiteDescriptionThree = React.createClass({
  render(){
    return(
       <div className='modal-container three'>
         <h2 className='welcome-text'>Examples!</h2>
         <div className='step-three'>
           <p>
             Here are some video tutorials for the inexperienced among us!
           </p>
           <p>
             Bubble Sort!
             <br></br>
             <a href="https://www.youtube.com/watch?v=Jdtq5uKz-w4">Video Tutorial</a>
           </p>
           <p>
             Quick Sort!
             <br></br>
             <a href="https://www.youtube.com/watch?v=TzeBrDU-JaY">Video Tutorial</a>
           </p>
           <p>
             Merge Sort!
             <br></br>
             <a href="https://www.youtube.com/watch?v=TzeBrDU-JaY&index=5&list=PL2_aWCzGMAwKedT2KfDMB9YA5DgASZb3U">Video Tutorial</a>
           </p>

           <h2>
             HAPPY SORTING!!
           </h2>
           <img className='stepthree-img' style={{'margin': '0 auto'}} src='http://vignette4.wikia.nocookie.net/harrypotter/images/d/d7/Sorting_hat.jpg/revision/latest?cb=20080804054046'></img>
         </div>
       </div>
    );
  }

});

module.exports = SiteDescriptionThree;
