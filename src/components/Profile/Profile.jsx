//RCC выбрать структуру
import React from 'react'

import MyPosts from '../Profile/MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
//debugger;

	return (
		<>
			<div className="col-12">
				<h1>Профиль</h1>
			</div>
			<div className="col-12 col-lg-3 section__left">
				<ProfileInfo />
			</div>
			<div className="col-12 col-lg-9 section__content">
				{/* <MyPosts posts={posts} /> */}
				<MyPosts 
					posts={props.state.posts}
					addPost={props.addPost}
				/>
			</div>
		</>
	);
}

export default Profile;