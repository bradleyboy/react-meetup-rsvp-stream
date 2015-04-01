import React from 'react';
import WebSocket from 'ws';
import RSVPList from '../RSVPList';
import Header from '../Header';

// Websocket connection to meetup's stream
const ws = new WebSocket('ws://stream.meetup.com/2/rsvps');

// Keep a map of RSVPs already added
const rsvps = new Set();

export default class Application extends React.Component {
  constructor() {
    this.state = {
      items: [],
    };
  }

  componentWillMount() {
    ws.onmessage = (event) => {
      const item = JSON.parse(event.data);

      if (item.response !== 'yes' || rsvps.has(item.rsvp_id)) {
        return;
      }

      rsvps.add(item.rsvp_id);

      const items = this.state.items.slice(0, 29);
      items.unshift(item);

      this.setState({items});
    };
  }

  render() {
    return <div>
      <Header />

      <RSVPList data={this.state.items} />
    </div>;
  }
}
