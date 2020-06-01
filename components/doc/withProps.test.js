import { mount } from "enzyme";
import WithProps from "./WithProps";

describe("Opening Hours test - with test", () => {
  it("Saturday past 3pm", () => {
    const props = {
      time: new Date(2020, 4, 23, 16, 33, 11, 34),
    };
    const component = mount(<WithProps {...props} />);
    const button = component.find("button");
    const disabled = button.prop("disabled");
    expect(disabled).toBe(true);
    component.unmount();
  });
  it("Sunday", () => {
    const props = {
      time: new Date(2020, 4, 24, 16, 33, 11, 34),
    };
    const component = mount(<WithProps {...props} />);
    const button = component.find("button");
    const disabled = button.prop("disabled");
    expect(disabled).toBe(true);
    component.unmount();
  });
  it("Weekdays between Opening hours", () => {
    const props = {
      time: new Date(2020, 4, 25, 12, 33, 11, 34),
    };
    const component = mount(<WithProps {...props} />);
    component.update();
    const button = component.find("button");
    const disabled = button.prop("disabled");
    expect(disabled).toBe(false);
    component.unmount();
  });
  it("Weekdays past 6pm", () => {
    const props = {
      time: new Date(2020, 4, 25, 18, 33, 11, 34),
    };
    const component = mount(<WithProps {...props} />);
    component.update();
    const button = component.find("button");
    const disabled = button.prop("disabled");
    expect(disabled).toBe(true);
    component.unmount();
  });
});
