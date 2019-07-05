import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: "visit the Helm's Deep" },
			{ id: 2, content: "Call for help from Gondor" },
		],
	};
	render() {
		return (
			<div className="App">
				<h1 className="center blue-text">List of Todo's</h1>
				<Todos todos={this.state.todos} />
			</div>
		);
	}
}
export default App;
