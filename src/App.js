import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import '../node_modules/bootstrap/scss/bootstrap.scss'
import './assets/sass/App.sass';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './components/Home';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Test from './components/Test';
import Testfetch from './components/Testfetch';



const App = (props) => {

	return (

	<>
		<Router>
			<Navbar />

			<section className="section__main">
				<div className="container">
					<div className="row">

						<Switch>
							<Route exact path="/" 
								   component={Home} />
							<Route exact path="/test" 
								   component={Test} />
							<Route exact path="/testfetch" 
								   component={Testfetch} />
							<Route path="/profile" 
									render={ () => 
									<Profile 
										//posts={props.state.profilePage.posts} 
										state={props.state.profilePage}
										addPost={props.addPost}
									/> } />
							<Route path="/dialogs" 
								   render={ () => 
								   <Dialogs 
								   		//dialogs={props.state.dialogsPage.dialogs}
										//messages={props.state.dialogsPage.messages} 
										state={props.state.dialogsPage}
									/> } />
						</Switch>

					</div>
				</div>
			</section>


			<Footer />
		</Router>
	</>

	);

}

export default App;