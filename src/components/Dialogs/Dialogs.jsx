//RCC выбрать структуру
import React from 'react'
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
	return (
		<>
			<div className="col-12">
				<h1>Диалоги</h1>
			</div>

			<div className="col-12 col-lg-2 section__left dialogs">

				<div className="list-group dialogs-item">

					<div className="list-group-item dialog active">
						<NavLink
							to="/dialogs/1"
						>
							Дима
						</NavLink>
					</div>

					<div className="list-group-item dialog">
						<NavLink
							to="/dialogs/2"
						>
							Дима
						</NavLink>
					</div>

					<div className="list-group-item dialog">
						<NavLink
							to="/dialogs/3"
						>
							Даник
						</NavLink>
					</div>
					


				</div>

			</div>
			<div className="col-12 col-lg-10 section__content">

				<div className="messages">


					<div className="message card">
						<div className="card-body">
							This is some text within a card body.
						</div>
					</div>

					<div className="message card">
						<div className="card-body">
							1111111111111111111111
						</div>
					</div>

					<div className="message card">
						<div className="card-body">
							222222222222222222222
						</div>
					</div>




				</div>

			</div>


		</>
	);
}

export default Dialogs;