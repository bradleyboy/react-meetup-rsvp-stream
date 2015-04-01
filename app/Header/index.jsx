import React from 'react';

require('./style.sass');

const logoURL = require('./images/MeetupLogo.png');

export default class Header extends React.Component {
  shouldComponentUpdate() {
    // Component never changes
    return false;
  }

  render() {
    return (
      <header className="HeaderComponent">
        <img height="75" className="HeaderComponent-logo" src={logoURL} />
        <p className="HeaderComponent-tagline">Latest Meetup RSVPs from around the world</p>
      </header>
    );
  }
}
