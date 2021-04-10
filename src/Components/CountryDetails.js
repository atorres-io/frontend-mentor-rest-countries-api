import React from 'react';
import axios from 'axios';
import withStyles from '@material-ui/core/styles/withStyles';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Appbar from './Appbar';

const styles = theme => ({
	wrapperDashboard: {
		width: '100%',
		height: 'auto',
		backgroundColor: 'red',
	},
});

function CountryDetails(props) {
	const { classes, state, setState } = props;
	const [country, setCountry] = React.useState({});
	let history = useHistory();

	React.useEffect(() => {
		async function fetchData() {
			const name = localStorage.getItem('tab');
			const countryData = await axios.get(
				`https://restcountries.eu/rest/v2/name/${name}`
			);
			setCountry(countryData.data[0]);
		}
		fetchData();
	}, []);

	const backButton = event => {
		localStorage.setItem('tab', '/');
		history.push('/');
	};

	return (
		<Grid container className={classes.wrapperDashboard}>
			<Appbar state={state} setState={setState} />
		</Grid>
	);
}

export default withStyles(styles)(CountryDetails);
