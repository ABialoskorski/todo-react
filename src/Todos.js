import React from "react";
const Todos = ({ todos, deleteTodo }) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div className="todos collection-item" key={todo.id}>
					<span
						className="todos__content"
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						{todo.content}
					</span>

					<i
						onClick={() => {
							deleteTodo(todo.id);
						}}
						className="far fa-trash-alt"
					/>
				</div>
			);
		})
	) : (
		<p className="center">You have no todo's, be free.</p>
	);
	return <div className="todos collection">{todoList}</div>;
};
export default Todos;
