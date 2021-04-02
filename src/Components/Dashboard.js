import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { useHistory } from 'react-router-dom';
import {
	Grid,
	InputBase,
	InputAdornment,
	FormControl,
	InputLabel,
	NativeSelect,
} from '@material-ui/core';
import Appbar from './Appbar';
import SearchIcon from '@material-ui/icons/Search';

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
		alignItems: 'center',
		width: '100%',
		height: '60px',
		margin: `calc(64px + ${theme.spacing(4.5)}px) 0 ${theme.spacing(4.5)}px 0`,
		backgroundColor: 'transparent',
	},
	main: {
		width: '100%',
		height: 'auto',
		backgroundColor: 'transparent',
	},
	lightIcon: {
		color: 'var(--text)',
		opacity: '0.7',
	},
	darkIcon: {
		color: 'var(--text)',
		opacity: '0.7',
	},
});

const InputSearch = withStyles(theme => ({
	root: {
		backgroundColor: 'var(--element)',
		width: '400px',
		padding: `${theme.spacing(1.2)}px ${theme.spacing(2.5)}px`,
		borderRadius: '5px',
		boxShadow: '0 0 12px -5px rgb(0 0 0 / 20%)',
	},
	input: {
		backgroundColor: 'transparent',
		fontSize: '14px',
		fontWeight: 300,
		color: 'var(--text)',

		'&::placeholder': {
			fontSize: '12px',
			fontWeight: 300,
			color: 'var(--text)',
		},
	},
}))(InputBase);

const BootstrapInput = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);

function Dashboard(props) {
	const { classes } = props;
	const [state, setState] = React.useState('light');
	const [age, setAge] = React.useState('');
	let history = useHistory();

	const handlePanelState = value => {
		const url = String(value);
		localStorage.setItem('current', url);
		history.push(`/${url}`);
	};

	const handleChange = () => {};

	return (
		<Grid container className={classes.wrapperDashboard}>
			<Appbar state={state} setState={setState}></Appbar>
			<Grid container className={classes.header}>
				<InputSearch
					variant='filled'
					placeholder='Search for a country...'
					startAdornment={
						<InputAdornment position='start'>
							<SearchIcon
								fontSize='small'
								className={
									state === 'dark' ? classes.darkIcon : classes.lightIcon
								}
							/>
						</InputAdornment>
					}
				/>
				<FormControl className={classes.margin}>
					<InputLabel htmlFor='demo-customized-select-native'>Age</InputLabel>
					<NativeSelect
						id='demo-customized-select-native'
						value={age}
						onChange={handleChange}
						input={<BootstrapInput />}
					>
						<option aria-label='None' value='' />
						<option value={10}>Ten</option>
						<option value={20}>Twenty</option>
						<option value={30}>Thirty</option>
					</NativeSelect>
				</FormControl>
			</Grid>
			<main className={classes.main}></main>
		</Grid>
	);
}

export default withStyles(styles)(Dashboard);
