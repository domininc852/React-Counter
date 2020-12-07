import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 0 };
    }
    onChange = (event) => {
        this.setState({ size: event.target.value });
        this.props.sizeCallBack(event.target.value);
    }
    render() {
        return (
            <input type="number" value={this.state.size} onChange={this.onChange} />
        );
    }
}

export default CounterSizeGenerator;