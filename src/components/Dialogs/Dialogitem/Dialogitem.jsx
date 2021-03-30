//RCC выбрать структуру
import React from 'react'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

	let path = `/dialogs/${props.id}`;
	
	return (
		<>
			<NavLink
				className="list-group-item bs-0 dialog"
				to={path}
			>
				{props.name}
			</NavLink>
		</>
	)
}

export default DialogItem;