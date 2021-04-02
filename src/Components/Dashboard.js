import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	wrapperDashboard: {
		width: '100%',
		height: 'auto',
		minHeight: '100vh',
		backgroundColor: 'var(--app-background)',
	},
});

function Dashboard(props) {
	let history = useHistory();
	const { classes } = props;

	const handlePanelState = value => {
		const url = String(value);
		localStorage.setItem('current', url);
		history.push(`/${url}`);
	};

	return <Grid container className={classes.wrapperDashboard}></Grid>;
}

export default withStyles(styles)(Dashboard);
