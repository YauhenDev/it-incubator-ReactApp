//RCC выбрать структуру
import React from 'react';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
	return (
		<section className="section__main">

			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-2 section__left">
						<img 
							src="/assets/img/ava.jpg" 
							alt="" 
							className="img-fluid"
						/>
						description
					</div>
					<MyPosts />
				</div>
			</div>

		</section>
	);
}

export default Profile;