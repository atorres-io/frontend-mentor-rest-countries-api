import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { useHistory } from 'react-router-dom';
import Media from 'react-media';
import { Grid } from '@material-ui/core';
import Appbar from './Appbar';
import Search from './Search';
import Filter from './Filter';
import Country from './Country';
import Skeleton from './Skeleton';

const styles = theme => ({
	wrapperDashboard: {
		width: '100%',
		height: 'auto',
		backgroundColor: 'transparent',
	},
	header: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		width: '100%',
		height: 'auto',
		margin: `calc(64px + ${theme.spacing(4.5)}px) 0 ${theme.spacing(4.5)}px 0`,
		padding: `0 calc(4vw + ${theme.spacing(2)}px)`,
		backgroundColor: 'transparent',
	},
	main: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'flex-start',
		width: '100%',
		height: 'auto',
		backgroundColor: 'transparent',
		padding: '0 4vw',
	},
});

function Dashboard(props) {
	const { classes } = props;
	const [state, setState] = React.useState('light');
	const [loading, setLoading] = React.useState(false);
	let history = useHistory();

	const handlePanelState = value => {
		const url = String(value);
		localStorage.setItem('current', url);
		history.push(`/${url}`);
	};

	return (
		<Grid container className={classes.wrapperDashboard}>
			<Appbar state={state} setState={setState} />
			<Grid container className={classes.header}>
				<Search state={state} />
				<Filter state={state} />
			</Grid>
			<Media query={{ maxWidth: 560 }}>
				{matches =>
					matches ? (
						<main className={classes.main} style={{ justifyContent: 'center' }}>
							{loading ? <Skeleton /> : <Country />}
						</main>
					) : (
						<main
							className={classes.main}
							style={{ justifyContent: 'space-between' }}
						>
							{loading ? <Skeleton /> : <Country />}
						</main>
					)
				}
			</Media>
		</Grid>
	);
}

export default withStyles(styles)(Dashboard);
