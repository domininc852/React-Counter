import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 0 };
    }
    onChange = (event) => {
        const size = event.target.value < 0 ? 0 : event.target.value;
        this.setState({ size: size});
        this.props.sendSizeCallBack(size);
    }
    render() {
        return (
            <input type="number" min = "0" value={this.state.size} onChange={this.onChange} />
        );
    }
}

export default CounterSizeGenerator;
