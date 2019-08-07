import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Todos from "../Todos";

Enzyme.configure({ adapter: new Adapter() });

describe("Component Todos", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Todos
        todos={[
          { id: 1, content: "visit the Helm's Deep" },
          { id: 2, content: "Defend against Uruk hai" }
        ]}
      />
    );
  });
  it("should display i with deleteTodo", () => {
    expect(wrapper.find("i").length).toBe(2);
  });
});