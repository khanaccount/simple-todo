import "./App.scss";
import TodoInput from "./components/TodoInput";
import NewToDo from "./components/NewToDo";
import EditTodo from "./components/EditTodo";
import React from "react";
import uuid from "react-uuid";

function App() {
	const [todos, setTodos] = React.useState([]);

	const addToDo = (todo) => {
		setTodos([...todos, { id: uuid(), task: todo, completed: false, isEditing: false }]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editTodo = (id) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.editTodo } : todo)));
	};

	const editTask = (task, id) => {
		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
		);
	};

	return (
		<div className="App">
			<div className="container">
				<div className="wrapper">
					{todos.length >= 1 ? (
						<h1 className="todo__title">you have a task!</h1>
					) : (
						<h1 className="todo__title">the list is empty</h1>
					)}
					<TodoInput addToDo={addToDo} />
					{todos.map((todo) =>
						todo.isEditing ? (
							<EditTodo key={todo.id} editTodo={editTask} task={todo} />
						) : (
							<NewToDo key={todo.id} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
						)
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
