import React, { Component } from 'react';
import Counter from '../container/CounterContainer'

export default class CounterGroup extends Component {

  render() {
    const {  size,} = this.props;
    let counterList = [];
    for(let i=0; i<size; i++) {
      counterList.push(
        <Counter
          index={i}
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