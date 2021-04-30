import React from 'react';
import Story from './Story';

const index = () => {
	const storiesData = [
		{avatar: "assets/img/9gag.svg" , user: "9gag"},
		{avatar: "assets/img/meowed.svg" , user: "meowed"},
		{avatar: "assets/img/barked.svg" , user: "barked"},
		{avatar: "assets/img/nathanwpylestrangeplanet.svg" , user: "nathanwpylestrangeplanet"},
		{avatar: "assets/img/wawawicomics.svg" , user: "wawawicomics"},
		{avatar: "assets/img/respondeai.svg" , user: "respondeai"},
		{avatar: "assets/img/filomoderna.svg" , user: "filomoderna"},
		{avatar: "assets/img/memeriagourmet.svg" , user: "memeriagourmet"}
	];
	return (
		<div class="stories">
			{storiesData.map(story => <Story src={story.avatar} user={story.user} />)}
			<div class="setinha">
				<ion-icon name="chevron-forward-circle"></ion-icon>
			</div>
		</div>
	);
};

export default index;
