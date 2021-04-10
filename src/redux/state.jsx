import { renderEntireTree } from '../render'


let state = {
	profilePage: {
		posts: [
				{ id: 1, likesCount: 55, message: "Сообщение 1 Сообщение 1 Сообщение 1 Сообщение 1 Сообщение 1 Сообщение 1" },
				{ id: 2, likesCount: 44, message: "Сообщение 2 Сообщение 2 Сообщение 2 Сообщение 2 Сообщение 2 Сообщение 2" },
				{ id: 3, likesCount: 33, message: "Сообщение 3 Сообщение 3 Сообщение 3 Сообщение 3 Сообщение 3 Сообщение 3" },
			]
	},
	dialogsPage: {
		dialogs: [
			{ id: 1, name: "Дима"},
			{ id: 2, name: "Саша"},
			{ id: 3, name: "Даня"},
			{ id: 4, name: "Марьяна"},
			{ id: 5, name: "Наталья"}
		],
		messages: [
			{ id: 1, message: "1111 This is some text within a card body."},
			{ id: 2, message: "222222222222"},
			{ id: 3, message: "333333333333"},
			{ id: 4, message: "444444444444"}
		]
	}
}

export let addPost = (postMessage) => {
	//debugger;
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost);
	renderEntireTree(state);
}

export default state;