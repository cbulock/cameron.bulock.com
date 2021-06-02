import React, { lazy, Suspense } from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	StylesProvider as MuiStylesProvider,
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Box from '@material-ui/core/Box';

import { getGravatarUrl } from 'react-awesome-gravatar';
import gravatarOptions from 'configs/gravatarOptions';

import email from 'configs/email';

import theme from './themes/default';
import GlobalStyle from './components/common/GlobalStyle';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

const Home = lazy(() => import('./components/pages/Home'));
const NotFound = lazy(() => import('./components/pages/NotFound'));

const App = () => {
	const isMobile = useMediaQuery(() => theme.breakpoints.down('md'));

	return (
		<>
			<Helmet>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#2948ff" />
				<meta name="description" content="Cameron Bulock" />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={getGravatarUrl(email, {
						size: 180,
						...gravatarOptions,
					})}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={getGravatarUrl(email, {
						size: 32,
						...gravatarOptions,
					})}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={getGravatarUrl(email, {
						size: 16,
						...gravatarOptions,
					})}
				/>
				<link
					srcSet={`${getGravatarUrl(email, {
						size: isMobile ? 80 : 160,
						...gravatarOptions,
					})},
				${getGravatarUrl(email, {
					size: isMobile ? 120 : 240,
					...gravatarOptions,
				})} 1.5x,
				${getGravatarUrl(email, {
					size: isMobile ? 160 : 320,
					...gravatarOptions,
				})} 2x`}
					href={getGravatarUrl(email, {
						size: isMobile ? 160 : 320,
						...gravatarOptions,
					})}
					rel="preload"
					as="image"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<title>Cameron Bulock</title>
			</Helmet>
			<MuiThemeProvider theme={theme}>
				<MuiStylesProvider injectFirst>
					<StyledThemeProvider theme={theme}>
						<GlobalStyle />
						<Router>
							<Box
								display="flex"
								flexDirection="column"
								justifyContent="space-between"
								height="100vh"
							>
								<Header />
								<Suspense fallback={<div>Loading...</div>}>
									<Switch>
										<Route exact path="/">
											<Home />
										</Route>
										<Route>
											<NotFound />
										</Route>
									</Switch>
								</Suspense>
								<Footer />
							</Box>
						</Router>
					</StyledThemeProvider>
				</MuiStylesProvider>
			</MuiThemeProvider>
		</>
	);
};

export default App;
