import React, { Component } from 'react';
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterGroupSum from './CounterGroupSum'

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, sum: 0 };
    }
    getSize = (size) => {
        this.setState({ size: size })
        this.setState({ sum: 0 })
    }
    getSum = (sum) => {
        this.setState({ sum: sum })
    }
    render() {
        const sum = this.state.sum;
        return (
            <section>
                <CounterSizeGenerator sendSizeCallBack={this.getSize} />
                <CounterGroupSum sum={sum} />
                <CounterGroup size={this.state.size} sum={sum} sendSumCallBack={this.getSum} />
            </section>

        );
    }
}

export default MultiCounter;