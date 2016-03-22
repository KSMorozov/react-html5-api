import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'],
    };
  }

  renderItems() {
    return (
    );
  }

  render() {
    return (
      <ul>
        { this.state.colors.map(item => <li>{ item }</li>) }
      </ul>
    );
  }
}

export default List;
