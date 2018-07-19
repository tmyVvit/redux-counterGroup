import React, { Component } from 'react';
import CounterGroup from './components/CounterGroup'

class App extends Component {
  render() {
    return (
      <CounterGroup
        size={2}
       />
    );
  }
}

export default App;