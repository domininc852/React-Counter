import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }
    onIncrease = () => {
        const currentNumber = this.state.number;
        this.setState({ number: currentNumber + 1 });
        this.props.increase();
    }
    onDecrease = () => {
        const currentNumber = this.state.number;
        this.setState({ number: currentNumber - 1 });

    }

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.onIncrease} />
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick={this.onDecrease} />
            </section>
        );
    }
}
