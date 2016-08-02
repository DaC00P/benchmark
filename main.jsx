
const React = require('react');
const ReactDOM = require('react-dom');
// const Graph = require('./graph');
// const TextArea = require('./text_area');
const Graph = require('./react/components/graph');
const TextArea = require('./react/components/text_area');
const CodeForm = require('./react/components/code_form');
const D3 = require('./react/components/d3_chart_react');
const ControlPanel = require('./react/components/control_panel');
const Modal = require('react-modal');
const WelcomeMessage = require('./react/components/welcome_message');

// import { Graph } from './graph';
// import { TextArea } from './text_area';

const customStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '2px solid #6a51a3',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '10px',
    outline                    : 'none',
    padding                    : '20px'

  }
};

const App = React.createClass({
  getInitialState() {
    return {
      modalIsOpen: true,
    };
  },

  componentWillMount(){
    const appElement = document.getElementById('content');
    Modal.setAppElement(appElement);
  },


  openModal() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal() {
    this.setState({modalIsOpen: false});
  },

  render(){
    return(
      <div className='app-container'>
        <div className="welcome-modal-div">
          <Modal key="reservationModal" isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyle} id="welcome-modal">
            <WelcomeMessage closeModal={this.closeModal}/>
          </Modal>
        </div>
        <div className='upper-container' >
          <CodeForm n={1} />
          <D3 />
          <CodeForm n={2} />
        </div>
        <div className='lower-container'>
          <ControlPanel />
        </div>
        <footer> Informative Footer Goes Here, with our github and linkedin</footer>
      </div>
    );
  }

});

document.addEventListener('DOMContentLoaded', () =>{
  const content = document.getElementById('content');
  ReactDOM.render(<App />, content);
});
