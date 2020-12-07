import React, { Component } from 'react';
import Counter from './Counter'

class CounterGroup extends Component {
    

    constructor(props) {
        super(props);
        const numbers = this.initializeNumbers(this.props.size);
        this.state = { numbers: numbers }
    }
    initializeNumbers(size) {
        const numbers = new Array(size);
        for (var i = 0; i < size; i++) {
            numbers[i] = 0;
            console.log(numbers[i]);
        }
        return numbers;
    }
    initArraySize = (size) => {
        size = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(size).keys());
    }

    getNumber = (key, number) => {
        const numbers = this.state.numbers;
        numbers[key] = number;
        this.setState({ numbers: numbers })
        const sum = numbers.reduce((sum, currentNumber, index) => sum + currentNumber);
        this.props.sendSumCallBack(sum);
    }

    clearNumbers() {
        const emptyNumbers = this.state.numbers.map(number => 0);
        this.setState({ numbers: emptyNumbers })

    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            initArraySize.map(value => <Counter key={value} index={value} numberCallBack={this.getNumber} />)
        )
    };
}

export default CounterGroup;