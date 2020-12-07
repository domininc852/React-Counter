import React, { Component } from 'react';
import CounterGroup from './CounterGroup'

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 0 };
    }
    onChange = (event) => {
        this.setState({ size: event.target.value })
    }
    render() {
        return (
            <section>
                <input type="number" onChange={this.onChange} />
                <CounterGroup size={this.state.size} />
            </section>

        );
    }
}

export default MultiCounter;