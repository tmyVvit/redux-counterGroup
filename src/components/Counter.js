import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.inputNumber = React.createRef();
    }
    increment = ()=>{
        this.props.onIncrement(this.props.index);
    }
    decrement = ()=>{
        this.props.onDecrement(this.props.index);
    }
    multiply = (index) => {
        const multiplier =this.inputNumber.current.value;
        if (!isNaN(multiplier))
            this.props.onMultiply(this.props.index, multiplier);
    }

    divide = () => {
        const divisor =this.inputNumber.current.value;
        if (!isNaN(divisor) && divisor !== 0)
            this.props.onDivision(this.props.index, divisor);
    }
    render() {
        const { value, index} = this.props;
        return (
            <p>
                Clicked: {value[index]} times
        {' '}
                <button onClick={this.increment}>
                    +
          </button>
                <button onClick={this.decrement}>
                    -
          </button>
                <button onClick={(index)=>this.multiply(index)}>
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
