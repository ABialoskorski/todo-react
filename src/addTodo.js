import React, { Component } from "react";

class AddTodo extends Component {
	state = {
		content: "",
	};
	add = (a,b) => {
		return a+b;
	};
	handleChange = e => {
		this.setState({
			content: e.target.value,
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			content: "",
		});
	};
	render() {
		return (
			<div className="addTodo">
				<form onSubmit={this.handleSubmit}>
					<label>Add new todo: </label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.content}
					/>
					{/*<button onClick={this.handleSubmit}>Add</button>*/}
				</form>
			</div>
		);
	}
}
export default AddTodo;
