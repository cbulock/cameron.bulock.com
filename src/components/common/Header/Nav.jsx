import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import NavLink from './NavLink';
import config from './navConfig.json';

const SList = styled(List)`
	display: flex;
`;

export default () => (
	<Box display="flex" ml="auto" component="nav">
		<SList>
			{config.map((navItem) => (
				<NavLink key={navItem.url} url={navItem.url} title={navItem.title} />
			))}
		</SList>
	</Box>
);
