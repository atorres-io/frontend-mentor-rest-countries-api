import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Dashboard from './Components/Dashboard';

function App() {
	return (
		<ThemeProvider theme={createMuiTheme()}>
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
