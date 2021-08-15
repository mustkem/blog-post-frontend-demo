import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe("MyComponent", () => {
  it("should render my component", () => {
    shallow(<App />);
  });
});