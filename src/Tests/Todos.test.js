import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Todos from "../Todos";
import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });

describe("Component Todos", () => {
  let wrapper;
  let deletetodomock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <Todos
        deleteTodo={deletetodomock}
        todos={[
          { id: 1, content: "visit the Helm's Deep" }
          // { id: 2, content: "Defend against Uruk hai" }
        ]}
      />
    );
  });
  it("should display 'i' with deleteTodo", () => {
    expect(wrapper.find("i").length).toBe(1);
  });
  it("should display 'span'", () => {
    expect(wrapper.find("span").length).toBe(1);
  });
  it("does 'i' can be clicked ?", () => {
    const i = wrapper.find("i");
    i.simulate("click");
    expect(deletetodomock).toHaveBeenCalledTimes(1);
  });
  it("does 'span' have good html", () => {
    const expectedOutput = '<div class="szpaner"><p>Hello World!</p></div>';
    const realOutput = wrapper.find("div.szpaner").html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});
