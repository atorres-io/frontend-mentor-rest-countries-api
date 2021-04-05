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
});

function Country(props) {
	const { classes } = props;

	return (
		<Card elevation={0} className={classes.card}>
			<CardActionArea>
				<CardMedia image='' title='' />
				<CardContent className={classes.padding}>
					<Typography gutterBottom variant='h2' component='h2'>
						United States of America
					</Typography>
					<p>
						<Typography variant='body2' component='span'>
							Population:{' '}
						</Typography>
						<Typography variant='body1' component='span'>
							323,947,000
						</Typography>
					</p>
					<p>
						<Typography variant='body2' component='span'>
							Region:{' '}
						</Typography>
						<Typography variant='body1' component='span'>
							America
						</Typography>
					</p>
					<p>
						<Typography variant='body2' component='span'>
							Capital:{' '}
						</Typography>
						<Typography variant='body1' component='span'>
							Washington, D.C.
						</Typography>
					</p>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default withStyles(styles)(Country);
