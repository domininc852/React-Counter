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
        return (
            <section>
                <CounterSizeGenerator sizeCallBack={this.getSize} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={this.state.size} sumCallBack={this.getSum} />
            </section>

        );
    }
}

export default MultiCounter;