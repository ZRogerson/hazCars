import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Toggle extends Component {
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
            [filterName]: !this.state.checked
        });
    }

    render() {
        return (
            <div className="switch-wrapper">
                <label>{this.state.checked ? this.props.onLabel : this.props.offLabel}</label>
                <label className="switch">
                    <input type="checkbox" onChange={this.toggle} />
                    <span className="slider"></span>
                </label>
            </div>
        );
    }
}

Toggle.propTypes = {
    onLabel: PropTypes.string.isRequired,
    offLabel: PropTypes.string.isRequired
}

export default Toggle;