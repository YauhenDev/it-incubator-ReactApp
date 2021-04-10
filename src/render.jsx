import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//
//import state from './redux/state'
import { addPost} from './redux/state'

// Перерисуем все дерево - не эфективно, но пока так
export let renderEntireTree = (state) => {

	ReactDOM.render(
		<React.StrictMode>
			<App 
				state={state}
				addPost={addPost}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}