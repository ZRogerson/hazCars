import React from 'react';
import { shallow } from 'enzyme';
import Listing from './listing';

describe('listing', () => {
    let listing;

    beforeAll(() => {
        listing = shallow(<Listing data={
            {
                "_id": "59d2698c2eaefb1268b69ee5",
                "make": "Chevy",
                "year": 2016,
                "color": "Gray",
                "price": 16106,
                "hasSunroof": false,
                "isFourWheelDrive": true,
                "hasLowMiles": true,
                "hasPowerWindows": false,
                "hasNavigation": true,
                "hasHeatedSeats": false
            }
        } />);
    });

    it('should display heading', () => {
        const heading = <h3>2016 Chevy (Gray)</h3>;
        expect(listing.contains(heading)).toEqual(true);
    });

    it('should display price', () => {
        const price = <span className="price">$16106</span>
    });
});

