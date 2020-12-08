import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);
    }
    onChange = (event) => {
        const size = event.target.value < 0 ? 0 : event.target.value;
        this.props.update(size);
        this.props.reset();
    }
    render() {
        return (
            <input type="number" min="0" placeholder="0" value={this.props.counterSize} onChange={this.onChange} />
        );
    }
}

export default CounterSizeGenerator;
