//RCC выбрать структуру
import React from 'react';
import Post from './Post/Post'

const MyPosts = (props) => {
	
	let postsElements = 
		props.posts.map( p => <Post 
		key={p.id}  
		message={p.message} 
		likeCount={p.likesCount} 
		/> );
	
	let newPostElement = React.useRef();
	
	let addPost = () => {

		//debugger;
		//const text = document.getElementById('new-post').value
		//alert(text);
		let text = newPostElement.current.value;
		//alert(text);
		props.addPost(text);
		newPostElement.current.value='';
	}
	
	return (
		<>

			<div>myPost</div>

			<div className="section__addPost">

				<div className="form-floating">
					<textarea
						className="form-control"
						placeholder="add Post"
						id="new-post"
						ref={newPostElement}
					>
					</textarea>
					<label
						htmlFor="new-post"
					>
						add Post
					</label>
				</div>
				<div className="d-md-flex justify-content-md-end">
					<button
						type="button"
						className="btn btn-dark"
						onClick={ addPost }
					>
						Add post
					</button>
				</div>
			</div>

			{ postsElements }

		</>
	);
}

export default MyPosts;