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
		backgroundColor: 'transparent',
	},
	main: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'flex-start',
		width: '100%',
		height: 'auto',
		backgroundColor: 'transparent',
	},
});

function Dashboard(props) {
	const { classes } = props;
	const [state, setState] = React.useState('light');
	let history = useHistory();

	const handlePanelState = value => {
		const url = String(value);
		localStorage.setItem('current', url);
		history.push(`/${url}`);
	};

	return (
		<Media query={{ maxWidth: 800 }}>
			{matches =>
				matches ? (
					<Grid
						container
						className={classes.wrapperDashboard}
						style={{ padding: '0 1rem' }}
					>
						<Appbar state={state} setState={setState} />
						<Grid container className={classes.header}>
							<Search state={state} />
							<Filter state={state} />
						</Grid>
						<Media query={{ maxWidth: 560 }}>
							{matches =>
								matches ? (
									<main
										className={classes.main}
										style={{ justifyContent: 'center' }}
									>
										<Skeleton />
									</main>
								) : (
									<main
										className={classes.main}
										style={{ justifyContent: 'space-between' }}
									>
										<Skeleton />
									</main>
								)
							}
						</Media>
					</Grid>
				) : (
					<Grid
						container
						className={classes.wrapperDashboard}
						style={{ padding: '0 5rem' }}
					>
						<Appbar state={state} setState={setState} />
						<Grid container className={classes.header}>
							<Search state={state} />
							<Filter state={state} />
						</Grid>
						<Media query={{ maxWidth: 560 }}>
							{matches =>
								matches ? (
									<main
										className={classes.main}
										style={{ justifyContent: 'center' }}
									>
										<Skeleton />
									</main>
								) : (
									<main
										className={classes.main}
										style={{ justifyContent: 'space-between' }}
									>
										<Skeleton />
									</main>
								)
							}
						</Media>
					</Grid>
				)
			}
		</Media>
	);
}

export default withStyles(styles)(Dashboard);
