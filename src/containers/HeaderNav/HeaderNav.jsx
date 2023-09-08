import logo from '../../assets/images/logo.jpg';
import { Icon, Image } from 'semantic-ui-react';
import './HeaderNav.scss';

import React from 'react';

function HeaderNav() {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search">
        <input type="text" />
        <button>GO</button>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">
              <Icon className="header-icon" name="video camera" size="large" />
            </a>
          </li>
          <li>
            <a href="">
              <Icon className="header-icon" name="grid layout" size="large" />
            </a>
          </li>
          <li>
            <a href="">
              <Icon className="header-icon" name="chat" size="large" />
            </a>
          </li>
          <li>
            <a href="">
              <Icon className="header-icon" name="alarm" size="large" />
            </a>
          </li>
          <li>
            <a href="">
              <Image src="http://via.placeholder.com/80x80" avatar />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNav;
