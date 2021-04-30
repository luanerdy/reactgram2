import React from 'react';

const User = (props) => {
	return (
		<div class="usuario">
			<img src={props.avatar} />
			<div class="texto">
				<strong>{props.username}</strong>
				{props.nickname}
			</div>
		</div>
	);
};

export default User;
