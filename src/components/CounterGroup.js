import React, { Component } from 'react';
import Counter from './Counter'

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        const size = this.props.size;
        const numbers = new Array(size);
        for (var i = 0; i < size; i++) {
            numbers[i] = 0;
            console.log(numbers[i]);
        }
        this.state = { numbers: numbers }
    }
    initArraySize = (size) => {
        size = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(size).keys());
    }
    getNumber = (key, number) => {
        var numbers = [...this.state.numbers];
        numbers[key] = number;
        this.setState({ numbers: numbers })
        const sum = numbers.reduce((sum, currentNumber, index) => sum + currentNumber);
        this.props.sumCallBack(sum);
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