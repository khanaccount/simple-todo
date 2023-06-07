import React from "react";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

import "./NewToDo.scss";

const NewToDo = ({ task, deleteTodo, editTodo }) => {
	return (
		<div className="new__todo">
			<div className="new__todo_block">
				<h1>{task.task}</h1>
				<div className="new__todo-img">
					<MdOutlineModeEditOutline onClick={() => editTodo(task.id)} className="img" size={30} />
					<BsFillTrashFill onClick={() => deleteTodo(task.id)} className="img" size={25} />
				</div>
			</div>
		</div>
	);
};

export default NewToDo;
