import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./addTodo";

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: "visit the Helm's Deep" },
			{ id: 2, content: "Defend against Uruk hai" },
		],
	};
	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos: todos,
		});
	};
	addTodo = newTodo => {
		newTodo.id = Math.random();
		let todos = [...this.state.todos, newTodo];
		this.setState({
			todos: todos,
		});
	};
	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">List of Todo's</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}
export default App;
