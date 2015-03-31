import React from 'react';
import moment from 'moment';

require('./style.sass');

export default class RSVPListItem extends React.Component {
  shouldComponentUpdate() {
    // Events never change, so return false always.
    return false;
  }

  _locationString() {
    const group = this.props.data.group;
    const location = [group.group_city];

    if (group.group_state) {
      location.push(group.group_state);
    }

    location.push(group.group_country.toUpperCase());

    return location.join(', ');
  }

  render() {
    return (
      <div className="RSVPListItemComponent">
        <div className="RSVPListItemComponent-avatar-wrapper">
          <img className="RSVPListItemComponent-avatar" src={this.props.data.member.photo} />
        </div>
        <div className="RSVPListItemComponent-info">
          <h2 className="RSVPListItemComponent-header">
            {this.props.data.member.member_name}
          </h2>
          <span>is going to</span>
          <h2 className="RSVPListItemComponent-header">
            {this.props.data.event.event_name}
          </h2>
        </div>
        <div className="RSVPListItemComponent-meta">
          <h3 className="RSVPListItemComponent-location">{this._locationString()}{' '}{moment(this.props.data.event.time).fromNow()}</h3>
        </div>
      </div>
    );
  }
}
