//RCC выбрать структуру
import React from 'react';
import MyPosts from '../Profile/MyPosts/MyPosts'

const Profile = () => {
	return (
		<>
			<div className="col-12">
				<h1>Профиль</h1>
			</div>
			<div className="col-12 col-lg-2 section__left">
				<img
					src="/assets/img/ava.jpg"
					alt=""
					className="img-fluid"
				/>
					description
			</div>
			<div className="col-12 col-lg-10 section__content">
				<MyPosts />
			</div>
		</>
	);
}

export default Profile;