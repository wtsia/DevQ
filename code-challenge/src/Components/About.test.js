import React from "react";
import { shallow } from "enzyme";

import About from "./About";

describe("About component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<About />);
  });

  // component tests below

  it("should have a header that says 'About our Project!'", () => {
    expect(component.contains(<h1>About our Project!</h1>)).toBe(true);
  });
});
