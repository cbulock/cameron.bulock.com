import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Headshot from './Headshot';
import Title from './Title';
import Nav from './Nav';

export default () => {
	const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

	return (
		<Box p={2} display="flex" flexDirection={isMobile ? 'column' : 'row'} alignItems="center">
			<Box display="flex" alignItems="center">
				<Headshot />
				<Title />
			</Box>
			<Nav />
		</Box>
	);
};
