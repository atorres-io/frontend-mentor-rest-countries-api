import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Dashboard from './Components/Dashboard';
import CountryDetails from './Components/CountryDetails';

const theme = {
	typography: {
		h1: {
			fontSize: '20px',
			fontWeight: 800,
		},
		h2: {
			fontSize: '18px',
			fontWeight: 800,
		},
		body1: {
			fontSize: '14px',
			fontWeight: 300,
		},
		body2: {
			fontSize: '14px',
			fontWeight: 600,
		},
	},
};

function App() {
	return (
		<ThemeProvider theme={createMuiTheme(theme)}>
			<Router>
				<Switch>
					<Route path='/' exact component={Dashboard} />
					<Route path='/:name' exact component={CountryDetails} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
