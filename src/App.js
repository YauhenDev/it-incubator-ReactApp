import React from 'react';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import './assets/sass/App.sass';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => (
	<>

		<Navbar />

		<Profile />

		<Footer />
		

	</>
);

export default App;