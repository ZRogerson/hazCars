import React from 'react';
import { shallow, mount } from 'enzyme';
import Colors from './colors';

describe('Colors', () => {
    let colors, setColors;

    beforeAll(() => {
        setColors = jest.fn();
        colors = mount(<Colors
            colors={['Black', 'White', 'Blue']}
            setColors={setColors} />);
    });

    it('renders colors', () => {
        const arr = colors.find('span');
        expect(arr.length).toEqual(3);
    });

    it('requires setColors prop', () => {
        expect(colors.props().setColors).toBeDefined();
    });
});

