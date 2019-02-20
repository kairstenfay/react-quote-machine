import React, { Component } from 'react';

class Quote extends Component {  // functional components since these are so simple
  // look into peer component: only update when props not the same
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <p id="text">
          {this.props.quote}
        </p>
    )
  }
}

export default Quote;