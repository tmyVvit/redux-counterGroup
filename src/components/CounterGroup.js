import React, { Component } from 'react';
import Counter from './Counter'

export default class CounterGroup extends Component {

  render() {
    const {  size, value, onIncrement, onDecrement, onMultiply, onDivision} = this.props;
    let counterList = [];
    for(let i=0; i<size; i++) {
      counterList.push(
        <Counter
          value={value}
          index={i}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onMultiply={onMultiply}
          onDivision={onDivision}
          key={i}
        />
      );
    }
    return (
      <div className="App">
        {counterList}
      </div>
    );
  }
}