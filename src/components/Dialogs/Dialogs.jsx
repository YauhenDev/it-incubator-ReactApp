//RCC выбрать структуру
import React from 'react'

import DialogItem from './Dialogitem/Dialogitem'
import Message from './Message/Message'


const Dialogs = (props) => {
	//debugger;

	let dialogsElements = props.state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} /> );
	let messagesElements = props.state.messages.map( m  => <Message key={m.id} message={ m.message } id={ m.id } /> );

	return (
		<>
			<div className="col-12">
				<h1>Диалоги</h1>
			</div>

			<div className="col-12 col-lg-3 section__left dialogs">

				<div className="list-group dialogs-item">
				 	{ dialogsElements }
				</div>

			</div>
			<div className="col-12 col-lg-9 section__content">

				<div className="messages">
					{ messagesElements }
				</div>

			</div>


		</>
	);
}

export default Dialogs;