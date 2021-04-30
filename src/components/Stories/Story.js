import React from 'react';

const Story = (props) => {
	return (
		<div class="story">
			<div class="imagem">
				<img src={props.src} />
			</div>
			<div class="usuario">{props.user}</div>
		</div>
	);
};

export default Story;
