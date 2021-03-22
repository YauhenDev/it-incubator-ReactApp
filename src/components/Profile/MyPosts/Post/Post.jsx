//RCC выбрать структуру
import React from 'react';
import svgLike from '../../../../assets/images/ico/heart.svg';

const Post = (props) => {

	//console.log(props.message);
	//debugger;

	return (
		<>
			<div className="card">
				<div className="card-body">
				<img src="../assets/img/ava.jpg" className="card-img-top float-start" alt="..." />
					<p className="card-text">
						{props.name}<br />
						Post {props.message}
					</p>
					<div className="card__like">
						<span className="float-start">{props.likeCounts}</span>
						<img src={svgLike} className="float-start" alt="like" />
						<a href="/" title="Like">Like</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Post;