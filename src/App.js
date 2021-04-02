import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DefaultTheme from './Utils/Theme';
import Dashboard from './Components/Dashboard';

function App() {
	return (
		<ThemeProvider theme={createMuiTheme(DefaultTheme)}>
			<Router>
				<Switch>
					<Route path='/'>
						<Dashboard />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
