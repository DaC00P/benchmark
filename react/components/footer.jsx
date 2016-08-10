const React = require('react');
import FaIconPack from 'react-icons/lib/fa';
import LD from 'react-icons/lib/fa/linkedin';
import GH from 'react-icons/lib/fa/github-square';
import EMAIL from 'react-icons/lib/ti/mail';

const Footer = React.createClass({

  render: function() {
    return (
      <div className="footer-column">
          <p className='by-dc-to'>Site Designed & Built by Travis O'Neill & Daniel 'Coop' Cuperman</p>
          <ul className="connect-row">
            <strong className="heading">GITHUB</strong>
            <li className="git">
              <a className="icon-github-circled" href="https://github.com/travisoneill/benchmark" target='_blank'>
                <GH id='icon'/>
              </a>
            </li>
          </ul>
      </div>
    );
  }

});

module.exports = Footer;
