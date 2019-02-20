import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }

  componentDidUpdate() {
    console.log('Component re-rendered.');
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