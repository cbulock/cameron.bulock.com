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
			<STypography>
				I live in the Lansing area, spend my free time working on home
				automation projects, and enjoy front-end coding.
			</STypography>
			<STypography>
				I am a beer geek who loves nearly all styles from an ultra-hoppy IPA, a
				dark bitter stout, to a nice fruity sour.
			</STypography>
		</Box>
	);
};
