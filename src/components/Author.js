import React, { Component } from 'react';

class Author extends Component {
  constructor(props) {
    super(props);
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