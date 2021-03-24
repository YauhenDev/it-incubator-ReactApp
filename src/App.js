import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import '../node_modules/bootstrap/scss/bootstrap.scss'
import './assets/sass/App.sass'
import Navbar from './components/Navbar/Navbar'

import Home from './components/Home'
import Dialogs from './components/Dialogs/Dialogs'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'

const App = () => (
	<>
		<Router>
			<Navbar />

			<section className="section__main">
				<div className="container">
					<div className="row">

						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/profile" component={Profile} />
							<Route path="/dialogs" component={Dialogs} />
						</Switch>

					</div>
				</div>
			</section>

			<Footer />
		</Router>
	</>
);

export default App;