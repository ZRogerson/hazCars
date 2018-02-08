import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


it('renders welcome message', () => {
  // mocking fetch data to make sure the component loads
  fetch.mockResponse(JSON.stringify([{ "_id": "59d2698c2eaefb1268b69ee5", "make": "Chevy", "year": 2016, "color": "Gray" }]));

  const wrapper = shallow(<App />);
  const welcome = <h1>You Can Haz Car!</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
