import React, { Component } from 'react';

class Author extends Component {
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
    console.log('Component re-rendered with' + this.props.author);
  }

  render() {
    return (
        <p id="author">
          {this.props.author}
        </p>
    )
  }
}

export default Author;