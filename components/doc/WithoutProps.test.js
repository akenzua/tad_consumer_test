import { mount } from "enzyme";
import WithoutProps from "./WithoutProps";

describe("Opening Hours test - without props", () => {
  it("Should test for current time only", () => {
    const component = mount(<WithoutProps />);
    const button = component.find("button");
    const disabled = button.prop("disabled");
    expect(disabled).toBe(true);
    component.unmount();
  });
});
