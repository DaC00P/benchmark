import * as React from 'react';
import * as ClientActions from '../actions/client_actions';
import ControlPanel from './control_panel';
import CodeForm from './code_form';

const TextArea = React.createClass({

  render(){
    return(
      <div className="text-pane">
        <CodeForm />
      </div>
    );
  }
});

module.exports = TextArea;
