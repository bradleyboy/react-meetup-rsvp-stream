import React from 'react/addons';
import RSVPListItem from '../RSVPListItem';

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

require('./style.sass');

export default class RSVPList extends React.Component {
  render() {
    return <main className="RSVPListComponent">
      <ReactCSSTransitionGroup
        transitionName="transition"
        transitionLeave={false}>
        {this.props.data.map(item => <RSVPListItem
          key={item.rsvp_id}
          data={item} />)}
      </ReactCSSTransitionGroup>
    </main>;
  }
}
