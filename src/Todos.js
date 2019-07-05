import React from "react";
const Todos = ({ todos }) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div className="collection-item" key={todo.id}>
					<span>
						{todo.id} {todo.content}
					</span>
				</div>
			);
		})
	) : (
		<p className="center">You have no todo's yet</p>
	);
	return <div className="todos collection">{todoList}</div>;
};
export default Todos;
