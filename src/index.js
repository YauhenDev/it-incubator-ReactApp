import reportWebVitals from './reportWebVitals'

import state from './redux/state'
//import { addPost} from './redux/state'
import { renderEntireTree } from './render'

//addPost('qqqqqqqqqqqqqqqq');
// Перерисуем все дерево - не эфективно, но пока так
/*
export let renderEntireTree = () => {

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
*/

renderEntireTree(state);

reportWebVitals();