import React, { Component } from 'react';
import CounterGroup from './CounterGroup'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterGroupSum from './CounterGroupSum'

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, sum: 0 };
        this.counterGroupReference = React.createRef();
    }
    getSize = (size) => {
        this.setState({ size: size })
        this.setState({ sum: 0 })
        this.counterGroupReference.current.clearNumbers();
    }
    getSum = (sum) => {
        this.setState({ sum: sum })
    }
    render() {
        return (
            <section>
                <CounterSizeGenerator sendSizeCallBack={this.getSize} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup ref={this.counterGroupReference} size={this.state.size} sendSumCallBack={this.getSum} />
            </section>

        );
    }
}

export default MultiCounter;