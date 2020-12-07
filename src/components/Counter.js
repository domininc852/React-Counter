import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }
    onIncrease = () => {
        this.changeNumber((a, b) => a + b);
    }
    onDecrease = () => {
        this.changeNumber((a, b) => a - b);

    }
    changeNumber(operation) {
        const index = this.props.index;
        const currentNumber = this.state.number;
        this.setState({ number: operation(currentNumber, 1) });
        this.props.sendNumberCallBack(index, operation(currentNumber, 1));
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
