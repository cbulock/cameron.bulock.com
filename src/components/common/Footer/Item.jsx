import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const STypography = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
`;

export default ({ children }) => (
	<Box>
		<STypography>{children}</STypography>
	</Box>
);
