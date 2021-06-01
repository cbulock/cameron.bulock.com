import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const STypography = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
`;

export default () => {
	return (
		<Box m={2}>
			<STypography>Page not found</STypography>
		</Box>
	);
};
