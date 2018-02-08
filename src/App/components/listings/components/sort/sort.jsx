import React, { Component } from 'react';
import './styles.css';

class Sort extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.update(e.target.value);
    }

    render() {
        return (
            <div className="sort-wrapper" onChange={this.handleChange}>
                <select>
                    <option>Sort By:</option>
                    {this.props.sortOrders.map(order => {
                        return <option key={order.value} value={order.value}>{order.name}</option>;
                    })}
                </select>
            </div>
        );
    }
}

export default Sort;