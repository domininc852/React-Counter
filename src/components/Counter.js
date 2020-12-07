import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }
    onIncrease = () => {
        const index = this.props.index;
        this.setState((prevState) => ({
            number: prevState.number + 1
        }));
        this.props.numberCallBack(index, this.state.number + 1);
    }
    onDecrease = () => {
        const index = this.props.index;
        this.setState((prevState) => ({
            number: prevState.number - 1
        }));
        this.props.numberCallBack(index, this.state.number - 1);

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
