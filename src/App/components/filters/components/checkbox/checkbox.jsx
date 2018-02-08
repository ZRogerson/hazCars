import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const { filterName } = this.props;

        this.setState({ checked: !this.state.checked });

        this.props.setFilter({
            options: { [filterName]: !this.state.checked }
        });
    }

    render() {
        return (
            <div className="checkbox-wrapper">
                <label>{this.props.label}</label>
                <input
                    type="checkbox"
                    onClick={this.toggle} />
            </div>
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired
}

export default Checkbox;