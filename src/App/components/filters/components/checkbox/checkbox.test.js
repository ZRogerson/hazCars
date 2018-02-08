import React from 'react';
import { shallow, mount } from 'enzyme';
import Checkbox from './checkbox';

describe('Checkbox', () => {
    let checkbox, setFilters;

    beforeEach(() => {
        setFilters = jest.fn();
        checkbox = mount(<Checkbox label="labelText" filterName="filterName" setFilter={setFilters} />);
    });

    it('should display label', () => {
        const label = <label>labelText</label>;
        expect(checkbox.contains(label)).toEqual(true);
    });

    it('requires setFilters prop', () => {
        expect(checkbox.props().setFilter).toBeDefined();
    });

    it('renders input', () => {
        const input = checkbox.find('input').first();
        expect(input).toBeDefined();
    });

    it('input calls setFilters', () => {
        const input = checkbox.find('input').first();
        input.simulate('click');
        expect(setFilters).toBeCalledWith({ options: { "filterName": true } });
    });
});

