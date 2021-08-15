import React from 'react';
import { shallow } from 'enzyme';
import toJSON  from 'enzyme-to-json';

// import renderer from 'react-test-renderer'

import Login from './Login';

describe("MyComponent", () => {
  it("should render my component", () => {
    shallow(<Login />);
  });
});


//React test renderes. This will render html. 
//   it('should render login component correctly.', () => {  
//     const LoginComponent = renderer.create(<Login />).toJSON();
//     expect(LoginComponent).toMatchSnapshot();
// });

//ths will render coponent tree for this specific component only
it("should render correctly", () => {
    const wrapper = shallow(<Login />)
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  //TODO - Stuff to do 
  /*
  Test handleSubmit. 
  Test onChange
  Test input values after entering email and password
  Test Labels
  Test login button if it is rendering
  Test local state, props 
  Mocking api calls
  */