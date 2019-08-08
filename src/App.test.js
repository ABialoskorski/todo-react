import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddTodo from "./addTodo";

Enzyme.configure({ adapter: new Adapter() });

describe("Component App.js", () => {
  let wrapper;
  let addTodoMock = jest.fn();
  let deleteTodoMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <App addTodo={addTodoMock} deleteTodo={deleteTodoMock} />
    );
  });
  it("state is with 2 todos at the beginning", () => {
    expect(wrapper.state("todos")).toEqual([
      { id: 1, content: "visit the Helm's Deep" },
      { id: 2, content: "Defend against Uruk hai" }
    ]);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
