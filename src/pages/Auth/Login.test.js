import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Button from '../../components/Button/Button';


// import renderer from 'react-test-renderer'

import Login from "./Login";

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

//This will render coponent tree for this specific component only
it("should render correctly", () => {
  const wrapper = shallow(<Login />);
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

// it("Should accept email", () => {
//   wrapper = shallow(<Login />);
//   wrapper.find('#email').simulate("change", {
//     target: { value: "test@gmail.com" },
//   });
//   expect(wrapper.state("email")).toEqual("test@gmail.com");
// });

describe("<Login /> with no props", () => {
  const container = shallow(<Login />);

  it("should have an email field", () => {
    expect(container.find("#email").length).toEqual(1);
  });

  it("should have proper props for email field", () => {
    expect(container.find("#email").props()).toEqual({
      onBlur: expect.any(Function),
      valid: false,
      control: "input",
      id: "email",
      label: "Your E-Mail",
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      touched: false,
      type: "email",
      valid: false,
      value: "",
    });
  });

  it("should have a password field", () => {
    expect(container.find("#password").length).toEqual(1);
  });

  it("should have proper props for password field", () => {

    expect(container.find("#password").props()).toEqual({
      onBlur: expect.any(Function),
      valid: false,
      control: "input",
      id: "password",
      label: "Password",
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      touched: false,
      type: "password",
      valid: false,
      value: "",
    });
  });

  it("should have a submit button", () => {
    expect(container.find("button").length).toEqual(1);
  });

  it("should have proper props for submit button", () => {
    expect(container.find("button").props()).toEqual({
      children: "Login",
      design: "raised",
      loading: undefined,
      type: "submit",
    });
  });
});


it('should disable submit button on submit click', () => {
  const wrapper = mount(<Login />);
  const submitButton = wrapper.find(Button);
  submitButton.simulate('click');
  setTimeout(() => {
    expect(submitButton.prop('loading')).toBeTruthy();
  });
});

