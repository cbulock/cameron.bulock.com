/* eslint-disable react/jsx-props-no-spreading */
// Disabling this under the return throws an error in the build
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { NavLink as RouterLink } from 'react-router-dom';

const SLink = styled(Link)`
	color: ${({ theme }) => theme.palette.text.primary};
	margin: ${({ theme }) => theme.spacing(2)}px;

	position: relative;
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: ${({ theme }) => theme.palette.text.primary};
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out;
	}
	&:hover:before {
		visibility: visible;
		transform: scaleX(1);
	}
`;

const STypography = styled(Typography)`
	font-size: 1.25rem;
	font-weight: 500;
`;

const NavLink = ({ url, title }) => {
	const isInternal = url.startsWith('/');

	const linkProps = isInternal
		? {
				component: RouterLink,
				to: url,
		  }
		: {
				href: url,
		  };

	return (
		<ListItem>
			<SLink underline="none" {...linkProps}>
				<STypography>{title}</STypography>
			</SLink>
		</ListItem>
	);
};

NavLink.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default NavLink;
