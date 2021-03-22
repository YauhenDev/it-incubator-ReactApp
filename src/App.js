import React from 'react'

// import '../node_modules/bootstrap/scss/bootstrap.scss'
import './assets/sass/App.sass'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

const App = () => (
	<>

		<Navbar />
		<Profile />
		<Footer />
		
	</>
);

export default App;