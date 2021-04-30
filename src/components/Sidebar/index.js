import React from 'react';
import User from './User';
import Suggestion from './Suggestion';

const index = () => {
	const user = {
		avatar: 'assets/img/catanacomics.svg',
		username: 'catanacomics',
		nickname: 'Catana',
	};
	const suggestionsData = [
		{
			avatar: 'assets/img/bad.vibes.memes.svg',
			username: 'bad.vibes.memes',
			reason: 'Segue você',
		},
		{
			avatar: 'assets/img/chibirdart.svg',
			username: 'chibirdart',
			reason: 'Segue você',
		},
		{
			avatar: 'assets/img/razoesparaacreditar.svg',
			username: 'razoesparaacreditar',
			reason: 'Novo no Instagram',
		},
		{
			avatar: 'assets/img/adorable_animals.svg',
			username: 'adorable_animals',
			reason: 'Segue você',
		},
		{
			avatar: 'assets/img/smallcutecats.svg',
			username: 'smallcutecats',
			reason: 'Segue você',
		},
	];

	return (
		<div class="sidebar">
			<User
				avatar={user.avatar}
				username={user.username}
				nickname={user.nickname}
			/>

			<div class="sugestoes">
				<div class="titulo">
					Sugestões para você
					<div>Ver tudo</div>
				</div>

				{suggestionsData.map((suggestion) => (
					<Suggestion
						avatar={suggestion.avatar}
						username={suggestion.username}
						reason={suggestion.reason}
					/>
				))}
			</div>

			<div class="links">
				Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
				Termos • Localizações • Contas mais relevantes • Hashtags •
				Idioma
			</div>

			<div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
		</div>
	);
};

export default index;
