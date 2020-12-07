import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }
    onIncrease = () => {
        const index = this.props.index;
        const currentNumber = this.state.number;
        this.setState({ number: currentNumber + 1 });
        this.props.numberCallBack(index, currentNumber + 1);
    }
    onDecrease = () => {
        const index = this.props.index;
        const currentNumber = this.state.number;
        this.setState({ number: currentNumber - 1 });
        this.props.numberCallBack(index, currentNumber - 1);

    }
    changeNumber(operation){
        const index = this.props.index;
        const currentNumber = this.state.number;
        this.setState({ number: operation(currentNumber,1) });
        this.props.sendNumberCallBack(index, operation());
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
