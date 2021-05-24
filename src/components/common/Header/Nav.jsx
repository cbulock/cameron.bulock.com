import React from 'react';
import Box from '@material-ui/core/Box';
import NavLink from './NavLink';
import config from './navConfig.json';

export default () => (
	<Box display="flex" ml="auto">
		{config.map((navItem) => (
			<NavLink key={navItem.url} url={navItem.url} title={navItem.title} />
		))}
	</Box>
);
