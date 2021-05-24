import React from 'react';
import Box from '@material-ui/core/Box';
import Headshot from './Headshot';
import Title from './Title';
import Nav from './Nav';

export default () => (
	<Box p={2} display="flex" alignItems="center">
		<Headshot />
		<Title />
		<Nav />
	</Box>
);
