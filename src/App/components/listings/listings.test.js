import React from 'react';
import { shallow } from 'enzyme';
import Listings from './listings';

describe('listings', () => {
  let listings;

  beforeAll(() => {
    listings = shallow(<Listings listings={[{ "_id": "59d2698c2eaefb1268b69ee5", "make": "Chevy", "year": 2016, "color": "Gray" }]} />);
  });

  it('renders Header message', () => {
    const header = <h1>Current Listings</h1>;
    expect(listings.contains(header)).toEqual(true);
  });
});

