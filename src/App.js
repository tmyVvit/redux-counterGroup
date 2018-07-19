import React, { Component } from 'react';
import CounterGroup from './components/CounterGroup'

class App extends Component {
  render() {
    const { value, onIncrement, onDecrement, onMultiply, onDivision} = this.props;
    return (
      <CounterGroup
        size={2}
        value={value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onMultiply={onMultiply}
        onDivision={onDivision}
       />
    );
  }
}

export default App;