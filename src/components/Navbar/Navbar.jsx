//RCC выбрать структуру
import React from 'react';

import { Link, NavLink } from "react-router-dom";


// import styleUnique from './Navbar.module.sass';
// let styleUnique = {
// 	'navbar-nav': 'navbar-nav__afsdfsdfsd',
// 	'nav-item': 'nav-item__aafsdfsdfsd'
// }

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link 
				className="navbar-brand" 
				to="/"
				>
					TestReactApp
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileDropdown" aria-controls="mobileDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
							className="nav-link" 
							to="/profile"
							aria-current="page"
							>
								Profile
							 </NavLink>
						</li>
						<li className="nav-item">
							<NavLink 
							className="nav-link" 
							to="/dialogs"
							>
								Messages
							</NavLink>
						</li>
						<li className="nav-item">
							<Link 
							className="nav-link" 
							to="/"
							>
								News
							</Link>
						</li>
						<li className="nav-item">
							<Link 
							className="nav-link" 
							to="/"
							>
								Music
							</Link>
						</li>
						<li className="nav-item">
							<Link 
							className="nav-link" 
							to="/"
							>
								Settings
							</Link>
						</li>

						<li className="nav-item">
							<NavLink
							className="nav-link" 
							to="/test"
							aria-current="page"
							>
								TestPage
							 </NavLink>
						</li>
						<li className="nav-item">
							<NavLink
							className="nav-link" 
							to="/testfetch"
							aria-current="page"
							>
								TestFetch
							 </NavLink>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;