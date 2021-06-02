import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled from 'styled-components';
import { getGravatarUrl } from 'react-awesome-gravatar';
import gravatarOptions from 'configs/gravatarOptions';

import email from 'configs/email';

const Image = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 2.5rem;
	${({ theme }) => theme.breakpoints.up('md')} {
		width: 10rem;
		height: 10rem;
		border-radius: 5rem;
	}
`;

export default () => {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

	return (
		<Image
			srcSet={`${getGravatarUrl(email, {
				size: isMobile ? 80 : 160,
				...gravatarOptions,
			})},
		${getGravatarUrl(email, {
			size: isMobile ? 120 : 240,
			...gravatarOptions,
		})} 1.5x,
		${getGravatarUrl(email, {
			size: isMobile ? 160 : 320,
			...gravatarOptions,
		})} 2x`}
			src={getGravatarUrl(email, {
				size: isMobile ? 160 : 320,
				...gravatarOptions,
			})}
			rel="preconnect preload"
			alt="Cameron headshot"
		/>
	);
};
