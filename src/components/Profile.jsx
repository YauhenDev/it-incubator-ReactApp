//RCC выбрать структуру
import React from 'react';

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
					<div className="col-12 col-lg-10 section__content">
						<div>myPost</div>
						<div>newPost</div>
						<div>post 1</div>
						<div>post 2</div>
						<div>post 3</div>
					</div>
				</div>
			</div>

		</section>
	);
}

export default Profile;