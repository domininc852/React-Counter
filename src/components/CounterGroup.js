import React, { Component } from 'react';
import Counter from './Counter'

class CounterGroup extends Component {
    initArraySize = (size) => {
        size = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(size).keys());
    }
    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            initArraySize.map(value => <Counter key={value} />)
        )
    };
}

export default CounterGroup;