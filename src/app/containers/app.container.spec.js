import React from "react";
import AppContainer from "./app.container";
import { shallow } from "enzyme";

describe("App Container", () => {
  it("should be defined", () => {
    expect(AppContainer).toBeDefined();
  });
  it("should render component", () => {
    const sampleComponent = shallow(<AppContainer />);
    expect(sampleComponent.text()).toBe("This is a test");
  });
});
