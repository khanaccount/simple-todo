import React from "react";

import "../TodoInput/ToDoInput.scss";

const EditTodoWrapper = ({ editTodo, task }) => {
	const [value, setValue] = React.useState(task.task);

	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo(value, task.id);
	};

	return (
		<form onSubmit={handleSubmit} className="todo__input-block">
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="todo__input"
				type="text"
				placeholder="Update Task"
			/>
			<button type="submit">Update Task</button>
		</form>
	);
};

export default EditTodoWrapper;
