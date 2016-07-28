const React = require('react');
const ReactDOM = require('react-dom');
// const Graph = require('./graph');
// const TextArea = require('./text_area');
const Graph = require('./react/components/graph');
const TextArea = require('./react/components/text_area');
const CodeForm = require('./react/components/code_form');
const D3 = require('./react/components/d3_chart_react');
const ControlPanel = require('./react/components/control_panel');

// import { Graph } from './graph';
// import { TextArea } from './text_area';


const App = React.createClass({
  render(){
    return(
      <div className='app-container'>
        <div className='upper-container' >
          <CodeForm n={1} />
          <D3 />
          <CodeForm n={2} />
        </div>
        <div className='lower-container'>
          <ControlPanel />
        </div>
      </div>
    );
  }

});

document.addEventListener('DOMContentLoaded', () =>{
  const content = document.getElementById('content');
  ReactDOM.render(<App />, content);
});
