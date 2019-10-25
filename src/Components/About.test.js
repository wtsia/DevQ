import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import About from "./About";

describe("About component", () => {
  
  //renders without crashing
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<About />, div);
})

  // shallow(<About />) before each test
  let component;
  beforeEach(() => {
    component = shallow(<About />);
  });

  // component tests below

  it("should have a header that says 'About Us // Read Me'", () => {
    expect(component.contains(<h1>About Us // Read Me</h1>)).toBe(true);
  });
});
