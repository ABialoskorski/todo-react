import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddTodo from "../addTodo";

Enzyme.configure({ adapter: new Adapter() });

describe("Component AddTodo",() => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTodo />);
  });
  it("should add",() => {
      const {add} = wrapper.instance();
      expect(add(1,2)).toEqual(3)
      //expect(wrapper.instance().add(1, 2)).toEqual(3);

  });
});
