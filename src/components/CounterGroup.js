import React, { Component } from 'react';
import Counter from './Counter'

class CounterGroup extends Component {
    initArraySize = (size) => {
        size = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(size).keys());
    }

    getNumber = (number) => {
        const sum=this.props.sum+number;
        this.props.sendSumCallBack(sum);
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            initArraySize.map(value => <Counter key={value} index={value} sendNumberCallBack={this.getNumber} />)
        )
    };
}

export default CounterGroup;