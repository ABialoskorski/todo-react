import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddTodo from "./addTodo";
import renderer from "react-test-renderer";
import Todos from "./Todos";

Enzyme.configure({ adapter: new Adapter() });

describe("Snapshot", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


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

  it("App renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
