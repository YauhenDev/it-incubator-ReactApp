//RCC выбрать структуру
import React from 'react';
import Post from './Post/Post'

const MyPost = () => {
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

				<Post
					name="Марьяна"
					message="1"
					likeCounts="55"
				/>
				<Post
					name="Данила"
					message="2"
					likeCounts="44"
				/>
				<Post
					name="Евген"
					message="3"
					likeCounts="33"
				/>

		</>
	);
}

export default MyPost;