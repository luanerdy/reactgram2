import React from 'react';
import Top from './Top';
import Bottom from './Bottom';

const index = (props) => {
	return (
		<div class="post">
			<Top avatar={props.avatar} user={props.user} />

			<div class="conteudo">
				<img src={props.content} />
			</div>

			<Bottom
				likedAvatar={props.likedAvatar}
				likedUser={props.likedUser}
				number={props.number}
			/>
		</div>
	);
};

export default index;
