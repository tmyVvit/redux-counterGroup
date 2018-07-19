import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.inputNumber = React.createRef();
    }
    multiply = (index) => {
        const multiplier =this.inputNumber.current.value;
        if (!isNaN(multiplier))
            this.props.onMultiple(this.props.index, multiplier);
    }

    divide = () => {
        const divisor =this.inputNumber.current.value;
        if (!isNaN(divisor) && divisor !== 0)
            this.props.onDivision(this.props.index, divisor);
    }
    render() {
        const { value, index, onIncrement, onDecrement, onIncrementAsync} = this.props;
        return (
            <p>
                Clicked: {value} times
        {' '}
                <button onClick={()=>onIncrement(index)}>
                    +
          </button>
                <button onClick={()=>onIncrementAsync(index, 1)}>
                    +1s
          </button>
                <button onClick={()=>onDecrement(index)}>
                    -
          </button>
                <button onClick={this.multiply}>
                    *
          </button>
                <button onClick={this.divide}>
                    /
          </button>
                <input type="text" defaultValue={1}  ref={this.inputNumber}/>
            </p >
        );
    }
}
