import React from 'react';
import Box from '@material-ui/core/Box';
import Item from './Item';

const year = new Date().getFullYear();

export default () => (
	<Box p={2} display="flex" justifyContent="space-between" alignItems="center">
		<Item>{`©${year} Cameron Bulock`}</Item>
		<Item>cameron@bulock.com</Item>
	</Box>
);
