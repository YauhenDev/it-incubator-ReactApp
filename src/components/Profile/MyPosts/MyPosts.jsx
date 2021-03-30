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
	
	return (
		<>

			<div>myPost</div>

			<div className="section__addPost">

				<div className="form-floating">
					<textarea
						className="form-control"
						placeholder="add Post"
						id="helpTextarea"
					>
					</textarea>
					<label
						htmlFor="helpTextarea">
						add Post
						</label>
				</div>
				<div className="d-md-flex justify-content-md-end">
					<button
						type="button"
						className="btn btn-dark">
						Add post
						</button>
				</div>
			</div>

			{ postsElements }

		</>
	);
}

export default MyPosts;