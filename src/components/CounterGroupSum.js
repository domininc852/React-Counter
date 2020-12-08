import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        const sum = this.props.total;
        return (
            <div>
                The sum: {sum}
            </div>
        );
    }
}

export default CounterGroupSum;