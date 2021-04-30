import React from 'react';

const Suggestion = (props) => {
	return (
		<div class="sugestao">
			<div class="usuario">
				<img src={props.avatar} />
				<div class="texto">
					<div class="nome">{props.username}</div>
					<div class="razao">{props.reason}</div>
				</div>
			</div>

			<div class="seguir">Seguir</div>
		</div>
	);
};

export default Suggestion;
