import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Colors from './components/colors/colors';
import Toggle from './components/toggle/toggle';
import Checkbox from './components/checkbox/checkbox';

class Filters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listings: [],
            colors: []
        };

        this.setFilters = this.setFilters.bind(this);
    }

    setFilters(filters) {
        this.props.setFilters(filters);
    }

    componentWillMount() {
        const { listings } = this.props;
        let availableColors = [];

        for (let i = 0, len = listings.length; i < len; ++i) {
            if (listings[i].color !== undefined && !availableColors.includes(listings[i].color)) {
                availableColors.push(listings[i].color);
            }
        }

        this.setState({
            colors: availableColors
        })
    }

    render() {
        return (
            <div className="filters">
                <h2>Filters</h2>

                <Colors colors={this.state.colors} setColors={this.setFilters} />

                <hr />
                <Toggle onLabel="Match All" offLabel="Match Some" filterName="matchAll" setFilter={this.setFilters} />
                <Checkbox label="Sun Roof" filterName="hasSunroof" setFilter={this.setFilters} />
                <Checkbox label="Four Wheel Drive" filterName="isFourWheelDrive" setFilter={this.setFilters} />
                <Checkbox label="Low Miles" filterName="hasLowMiles" setFilter={this.setFilters} />
                <Checkbox label="Power Windows" filterName="hasPowerWindows" setFilter={this.setFilters} />
                <Checkbox label="Navigation" filterName="hasNavigation" setFilter={this.setFilters} />
                <Checkbox label="Heated Seats" filterName="hasHeatedSeats" setFilter={this.setFilters} />
            </div>
        );
    }
}

Filters.propTypes = {
    listings: PropTypes.array.isRequired
}

export default Filters;