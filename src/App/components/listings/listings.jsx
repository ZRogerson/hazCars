import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Listing from './components/listing/listing';
import Sort from './components/sort/sort';

import './styles.css';

const sortOrders = [
    { name: 'Price: Low to High', value: 'price:low-high' },
    { name: 'Price: High to Low', value: 'price:high-low' },
    { name: 'Older', value: 'older' },
    { name: 'Newer', value: 'newer' },
    { name: 'Color', value: 'color' },
]

class Listings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: {},
            listings: [],
            showing: [],
            sortOrder: null
        }

        this.updateSortOrder = this.updateSortOrder.bind(this);
    }

    updateSortOrder(sortOrder) {
        this.setState({ sortOrder });
    }

    componentWillMount() {
        const { listings } = this.props;
        this.setState({
            listings,
            showing: listings
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            const { matchAll, colors, options } = nextProps.filters;
            let showing = this.state.listings;

            // Filter by selected colors
            if (colors && colors.length > 0) {
                showing = showing.filter(item => {
                    return colors.includes(item.color);
                })
            }

            // If "match all" filter by all boolean filters
            if (matchAll) {
                for (let option in options) {
                    if (options[option] === true) {
                        showing = showing.filter(item => {
                            return item[option] === true;
                        })
                    }
                }

                this.setState({ filters: nextProps.filters, showing });
            } else { // else filter by some boolean filters
                // gather all filters set to true into an array
                let filtered = [],
                    curFilters = Object.keys(options).filter((key) => options[key]);

                // Sort through listings and find any that match any filters
                // For the record this is N^2 and I don't like it... will revisit if time
                for (let i = 0, len = showing.length; i < len; ++i) {
                    for (let attr in showing[i]) {
                        if (curFilters.includes(attr) && showing[i][attr]) {
                            filtered.push(showing[i]);
                            break;
                        }
                    }
                }

                this.setState({
                    filters: nextProps.filters,
                    showing: curFilters.length > 0 ? filtered : showing
                });
            }
        }
    }

    render() {
        const { showing, sortOrder } = this.state;

        switch (sortOrder) {
            case 'price:low-high':
                showing.sort((a, b) => a.price >= b.price);
                break;
            case 'price:high-low':
                showing.sort((a, b) => a.price <= b.price);
                break;
            case 'older':
                showing.sort((a, b) => a.year >= b.year);
                break;
            case 'newer':
                showing.sort((a, b) => a.year <= b.year);
                break;
            case 'color':
                showing.sort((a, b) => a.color >= b.color);
                break;
            default:
                break;
        }



        return (
            <div className="listings">
                <header>
                    <h1>Current Listings</h1>
                    <Sort update={this.updateSortOrder} sortOrders={sortOrders} />
                </header>


                {showing && showing.map(listing => <Listing key={listing._id} data={listing} />)}
                {showing.length === 0 && <h2 className="empty">No listings match your criteria</h2>}
            </div>
        );
    }
}

Listings.propTypes = {
    listings: PropTypes.array.isRequired
}

export default Listings;