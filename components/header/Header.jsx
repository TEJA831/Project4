import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
          <img
            src="https://www.pngitem.com/pimgs/m/526-5264353_online-school-clipart-clipart-freeuse-download-student-technology.png"
            alt="Your Name"
            className="profile-picture"
          />
          <div className="header-text">
            <h1>CoDeCrAfTeRs </h1>
            <p>It’s not a bug; it’s an undocumented feature.</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
