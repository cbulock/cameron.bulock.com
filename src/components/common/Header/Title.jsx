import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const STitle = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: 1.5rem;
	text-transform: uppercase;
	-webkit-text-stroke: 2px;
	-webkit-text-fill-color: transparent;
	${({ theme }) => theme.breakpoints.up('md')} {
		font-size: 3rem;
	}
`;

export default () => (
	<Box ml={2}>
		<Link to="/" underline="none">
			<STitle variant="h1">Cameron Bulock</STitle>
		</Link>
	</Box>
);
