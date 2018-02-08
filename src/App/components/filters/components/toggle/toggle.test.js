import React from 'react';
import { shallow, mount } from 'enzyme';
import Toggle from './toggle';

describe('Toggle', () => {
    let toggle, setFilters;

    beforeEach(() => {
        setFilters = jest.fn();
        toggle = mount(<Toggle onLabel="On Label" offLabel="Off Label" filterName="matchAll" setFilter={setFilters} />);
    });

    it('requires setFilter prop', () => {
        expect(toggle.props().setFilter).toBeDefined();
    });

    it('renders input', () => {
        const input = toggle.find('input').first();
        expect(input).toBeDefined();
    });

    it('should display label', () => {
        const label = <label>Off Label</label>;
        expect(toggle.contains(label)).toEqual(true);
    });

    it('input calls setFilters', () => {
        const input = toggle.find('input').first();
        input.simulate('change', { target: { checked: true } });
        expect(setFilters).toBeCalledWith({"matchAll": true});
        // Make sure label changes
        const label = <label>On Label</label>;
        expect(toggle.contains(label)).toEqual(true);
    });
});

