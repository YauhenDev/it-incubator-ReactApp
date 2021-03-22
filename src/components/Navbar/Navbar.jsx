//RCC выбрать структуру
import React from 'react';

// import styleUnique from './Navbar.module.sass';
// let styleUnique = {
// 	'navbar-nav': 'navbar-nav__afsdfsdfsd',
// 	'nav-item': 'nav-item__aafsdfsdfsd'
// }

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="/">TestReactApp</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileDropdown" aria-controls="mobileDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="mobileDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">Profile</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">Messages</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">News</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">Music</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">Settings</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;