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
    getSum = (number) => {
        this.setState({ sum: this.state.sum + number })
    }
    render() {
        const sum = this.state.sum;
        return (
            <section>
                <CounterSizeGenerator sendSizeCallBack={this.getSize} />
                <CounterGroupSum sum={sum} />
                <CounterGroup key="1" size={this.state.size}  sendNumberCallBack={this.getSum} />
            </section>

        );
    }
}

export default MultiCounter;