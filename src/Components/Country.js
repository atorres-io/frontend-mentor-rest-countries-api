import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
} from '@material-ui/core';

const styles = theme => ({
	card: {
		width: '100%',
		maxWidth: '265px',
		height: 'auto',
		backgroundColor: 'var(--element)',
		borderRadius: '8px',
		boxShadow: '0 0 12px -5px rgb(0 0 0 / 20%)',
		transition: 'transform 250ms ease',
		margin: theme.spacing(2),

		'&:hover': {
			transform: 'translateY(-5px)',
		},
		'& h2': {
			color: 'var(--text)',
		},
		'& span': {
			color: 'var(--text)',
		},
	},
	padding: {
		padding: theme.spacing(4),
	},
	media: {
		boxShadow: 'inset 0 -12px 15px -2px rgb(0 0 0 / 20%)',
	},
});

function Country(props) {
	const { classes, datas, onClickCard } = props;

	return (
		<React.Fragment>
			{datas.map(country => (
				<Card elevation={0} className={classes.card} key={country.name}>
					<CardActionArea onClick={() => onClickCard(country.name)}>
						<CardMedia
							className={classes.media}
							component='img'
							alt='Country flag'
							height='150'
							image={country.flag}
							title='Country flag'
						/>
						<CardContent className={classes.padding}>
							<Typography variant='h2' component='h2'>
								{country.name}
							</Typography>
							<p>
								<Typography variant='body2' component='span'>
									Population:{' '}
								</Typography>
								<Typography variant='body1' component='span'>
									{country.population
										.toString()
										.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
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
									Capital:{' '}
								</Typography>
								<Typography variant='body1' component='span'>
									{country.capital === '' ? 'Undefined' : country.capital}
								</Typography>
							</p>
						</CardContent>
					</CardActionArea>
				</Card>
			))}
		</React.Fragment>
	);
}

export default withStyles(styles)(Country);
