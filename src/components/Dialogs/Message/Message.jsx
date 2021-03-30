//RCC выбрать структуру
import React from 'react'

const Message = (props) => {
	return (
		<>
			<div className="message card">
				<div className="card-body">
					{props.message}
				</div>
			</div>
		</>
	)
}


export default Message;