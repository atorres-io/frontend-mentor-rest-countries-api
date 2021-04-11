import React from 'react';
import axios from 'axios';
import withStyles from '@material-ui/core/styles/withStyles';
import { useHistory } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';
import Appbar from './Appbar';
import BackIcon from '@material-ui/icons/ArrowBack';
import Media from 'react-media';

const styles = theme => ({
	wrapperDetails: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: '100%',
		height: 'auto',
		backgroundColor: 'transparent',
	},
	header: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'flex-start',
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
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		maxWidth: '1440px',
		height: 'auto',
		backgroundColor: 'transparent',
		padding: `0 calc(4vw + ${theme.spacing(2)}px)`,
	},
	flag: {
		width: '40%',
		minWidth: '300px',
		objectFit: 'cover',
		objectPosition: 'center center',
		marginBottom: '3rem',
		aspectRatio: '16 / 9',
	},
	wrapperInformation: {
		height: 'auto',
		color: 'var(--text)',
	},
	wrapperZones: {
		display: 'flex',
		flexWrap: 'nowrap',
		width: '100%',
		height: 'auto',
		backgroundColor: 'transparent',
		padding: `0 ${theme.spacing(10)}px`,
	},
	leftZone: {
		height: 'auto',
		marginBottom: theme.spacing(2),
		marginRight: theme.spacing(4),

		'& p': {
			margin: `${theme.spacing(0.5)}px 0`,
		},
	},
	rightZone: {
		height: 'auto',

		'& p': {
			margin: `${theme.spacing(0.5)}px 0`,
		},
	},
});

const BackButton = withStyles(theme => ({
	root: {
		padding: `${theme.spacing(1)}px ${theme.spacing(5)}px`,
		color: 'var(--text)',
		backgroundColor: 'var(--element)',
		borderRadius: '5px',
		fontSize: '14px',
		textTransform: 'none',
		marginBottom: theme.spacing(5),
	},
}))(Button);

function CountryDetails(props) {
	const { classes, state, setState } = props;
	const [country, setCountry] = React.useState({});

	const [domains, setDomains] = React.useState('');
	const [currencies, setCurrencies] = React.useState('');
	const [languages, setLanguages] = React.useState('');
	const [codes, setCodes] = React.useState([]);
	let history = useHistory();

	React.useEffect(() => {
		(async () => {
			const name = localStorage.getItem('tab');
			const countryData = await axios.get(
				`https://restcountries.eu/rest/v2/name/${name}`
			);

			const {
				currencies,
				languages,
				topLevelDomain,
				borders,
			} = countryData.data[0];

			const countryCodes = await axios.get(
				`https://restcountries.eu/rest/v2/alpha?codes=${borders.join(';')}`
			);

			setCodes(countryCodes.data.map(({ name }) => name));
			setCountry(countryData.data[0]);
			setCurrencies(currencies.map(({ name }) => name).join(', '));
			setLanguages(languages.map(({ name }) => name).join(', '));
			setDomains(topLevelDomain.join(', '));
		})();
	}, []);

	const handleBorder = border => {
		const url = String(border);
		localStorage.setItem('tab', url);
		history.push(`/${url}`);
	};

	const backButton = () => {
		localStorage.setItem('tab', '/');
		history.push('/');
	};

	return (
		<Grid container className={classes.wrapperDetails}>
			<Appbar state={state} setState={setState} />
			<Grid container className={classes.header}>
				<BackButton
					variant='contained'
					startIcon={<BackIcon />}
					onClick={backButton}
				>
					Back
				</BackButton>
			</Grid>
			<main className={classes.main}>
				<img
					className={classes.flag}
					src={country.flag}
					alt='Country Flag'
					loading='lazy'
				/>
				<Media query={{ maxWidth: 849 }}>
					{matches =>
						matches ? (
							//Mobile
							<Grid
								container
								className={classes.wrapperInformation}
								style={{ width: '100%', flexDirection: 'column' }}
							>
								<Typography
									variant='h1'
									component='h1'
									style={{ paddingLeft: '0', marginBottom: '1rem' }}
								>
									{country.name}
								</Typography>
								<Grid
									container
									className={classes.wrapperZones}
									style={{ flexDirection: 'column', padding: '0' }}
								>
									<div className={classes.leftZone} style={{ width: 'auto' }}>
										<p>
											<Typography variant='body2' component='span'>
												Native Name:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.nativeName}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Population:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.population}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Region:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.region}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Sub Region:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.subregion}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Capital:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.capital}
											</Typography>
										</p>
									</div>
									<div className={classes.rightZone} style={{ width: 'auto' }}>
										<p>
											<Typography variant='body2' component='span'>
												Top Level Domain:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{domains}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Currencies:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{currencies}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Languages:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{languages}
											</Typography>
										</p>
									</div>
								</Grid>
							</Grid>
						) : (
							//Desktop
							<Grid
								container
								className={classes.wrapperInformation}
								style={{ width: '60%', flexDirection: 'row' }}
							>
								<Typography
									variant='h1'
									component='h1'
									style={{ paddingLeft: '80px', marginBottom: '1rem' }}
								>
									{country.name}
								</Typography>
								<Grid
									container
									className={classes.wrapperZones}
									style={{ flexDirection: 'row' }}
								>
									<div className={classes.leftZone} style={{ width: 'auto' }}>
										<p>
											<Typography variant='body2' component='span'>
												Native Name:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.nativeName}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Population:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.population}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Region:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.region}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Sub Region:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.subregion}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Capital:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{country.capital}
											</Typography>
										</p>
									</div>
									<div
										className={classes.rightZone}
										style={{ width: 'auto', marginLeft: '32px' }}
									>
										<p>
											<Typography variant='body2' component='span'>
												Top Level Domain:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{domains}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Currencies:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{currencies}
											</Typography>
										</p>
										<p>
											<Typography variant='body2' component='span'>
												Languages:{' '}
											</Typography>
											<Typography variant='body1' component='span'>
												{languages}
											</Typography>
										</p>
									</div>
								</Grid>
							</Grid>
						)
					}
				</Media>
			</main>
		</Grid>
	);
}

export default withStyles(styles)(CountryDetails);
