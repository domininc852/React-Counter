import React, { Component } from 'react';
import CounterGroupContainer from '../containers/CounterGroupContainer'
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer'
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';

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
        return (
            <section>
                <CounterSizeGeneratorContainer />
                <CounterGroupSumContainer />
                <CounterGroupContainer  />
            </section>

        );
    }
}

export default MultiCounter;