import React from "react";

import "./ToDoInput.scss";

const TodoWrapper = ({ addToDo }) => {
	const [value, setValue] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value) {
			addToDo(value);

			setValue("");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="todo__input-block">
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="todo__input"
				type="text"
				placeholder="add your to do"
			/>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default TodoWrapper;
