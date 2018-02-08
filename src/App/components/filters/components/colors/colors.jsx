import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class Colors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: [],
            colors: []
        }

        this.setSelected = this.setSelected.bind(this);
    }

    componentWillMount() {
        this.setState({
            colors: this.props.colors
        })
    }

    setSelected(color) {
        let { selected } = this.state;

        if (selected.includes(color)) {
            // remove color from array
            selected.splice(selected.indexOf(color), 1);
        } else {
            selected = [...selected, color];
        }

        this.setState({ selected });
        this.props.setColors({colors: selected});
    }

    render() {
        const { colors, selected } = this.state;

        return (
            <div className="color-picker">
                <h4>Colors</h4>
                <div className="colors">
                    {colors.map(color => <div key={color}
                        onClick={() => this.setSelected(color)}
                        className={selected.includes(color) ? 'selected' : ''}>
                        <span style={{ backgroundColor: color }}></span>
                        <p>{color}</p>
                    </div>
                    )}
                </div>
            </div>
        );
    }
}

Colors.propTypes = {
    colors: PropTypes.array.isRequired
}

export default Colors;