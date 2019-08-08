import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddTodo from "../addTodo";
import ReactDOM from "react-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Component AddTodo", () => {
  let wrapper;
  let addTodoMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<AddTodo handleSubmit={addTodoMock} />);
  });
  it("should add", () => {
    const { add } = wrapper.instance();
    expect(add(1, 2)).toEqual(3);
  });
  it("input clear at the beginning", () => {
    const input = wrapper.find("input");
    expect(input).toEqual({});
  });
  // it("input should be clear after addTodo", () => {
  //   const input = wrapper.find("input");
  //   const button = wrapper.find("button");
  //   const form = wrapper.find("form");
  //   form.simulate("submit", {
  //     preventDefault: () => {}
  //   });
  //   // button.simulate('click');
  //   // expect(addTodoMock).toHaveBeenCalledTimes(1);
  //   expect(input).toEqual({});
  // });
});
