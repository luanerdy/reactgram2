import React from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Stories from './components/Stories';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

const App = () => {
	const postsData = [
		{
			avatar: 'assets/img/meowed.svg',
			user: 'meowed',
			content: 'assets/img/gato-telefone.svg',
			likedAvatar: 'assets/img/respondeai.svg',
			likedUser: 'respondeai',
			number: '101.523',
		},
		{
			avatar: 'assets/img/barked.svg',
			user: 'barked',
			content: 'assets/img/dog.svg',
			likedAvatar: 'assets/img/adorable_animals.svg',
			likedUser: 'adorable_animals',
			number: '99.159',
		},
	];

	return (
		<>
			<Navbar />
			<div class="corpo">
				<div class="esquerda">
					<Stories />
					<div class="posts">
						{postsData.map((post) => (
							<Post
								avatar={post.avatar}
								user={post.user}
								content={post.content}
								likedAvatar={post.likedAvatar}
								likedUser={post.likedUser}
								number={post.number}
							/>
						))}
					</div>
				</div>
        <Sidebar />
			</div>
			<MobileNav />
		</>
	);
};

export default App;
