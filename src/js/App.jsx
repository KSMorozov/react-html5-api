import React, { Component } from 'react';
import List from './components/List/List.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

export default App;
