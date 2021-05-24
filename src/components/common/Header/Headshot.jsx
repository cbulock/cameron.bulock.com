import React from 'react';
import styled from 'styled-components';
import Gravatar from 'react-awesome-gravatar';
import gravatarOptions from 'configs/gravatarOptions';

const Image = styled.img`
	width: 10rem;
	height: 10rem;
	border-radius: 5rem;
`;

export default () => (
	<Gravatar
		email="cameron@bulock.com"
		options={{ size: 500, ...gravatarOptions }}
	>
		{(url) => <Image src={url} alt="Cameron headshot" />}
	</Gravatar>
);
