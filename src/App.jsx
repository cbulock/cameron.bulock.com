import React from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	StylesProvider as MuiStylesProvider,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Box from '@material-ui/core/Box';

import { getGravatarUrl } from 'react-awesome-gravatar';
import gravatarOptions from 'configs/gravatarOptions';

import theme from './themes/default';
import GlobalStyle from './components/common/GlobalStyle';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const EMAIL = 'cameron@bulock.com';

const App = () => (
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
				href={getGravatarUrl(EMAIL, {
					size: 180,
					...gravatarOptions,
				})}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={getGravatarUrl(EMAIL, {
					size: 32,
					...gravatarOptions,
				})}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={getGravatarUrl(EMAIL, {
					size: 16,
					...gravatarOptions,
				})}
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
							<Switch>
								<Route exact path="/">
									<Home />
								</Route>
								<Route>
									<NotFound />
								</Route>
							</Switch>
							<Footer />
						</Box>
					</Router>
				</StyledThemeProvider>
			</MuiStylesProvider>
		</MuiThemeProvider>
	</>
);

export default App;
