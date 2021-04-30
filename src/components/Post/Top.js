import React from 'react';

const Top = (props) => {
	return (
		<div class="topo">
			<div class="usuario">
				<img src={props.avatar} />
				{props.user}
			</div>
			<div class="acoes">
				<ion-icon name="ellipsis-horizontal"></ion-icon>
			</div>
		</div>
	);
};

export default Top;
