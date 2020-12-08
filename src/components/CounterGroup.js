import React, { Component } from 'react';
import Counter from './Counter'
import { v4 as uuidv4 } from 'uuid'
import CounterCotainer from '../containers/CounterContainer'

class CounterGroup extends Component {
    initArraySize = (size) => {
        size = size > 0 ? parseInt(size) : 0;
        return Array.from(Array(Number(size)).keys());
    }

    getNumber = (number) => {
        this.props.sendNumberCallBack(number);
    }

    render() {
        const size = this.props.counterSize;
        const initArraySize = this.initArraySize(size);
        return (
            initArraySize.map(value => <CounterCotainer key={uuidv4()} />)
        )
    }
}

export default CounterGroup;
