import { Grid } from '@mui/material';
import { Movie } from '../Movie/Movie';

import useStyles from './styles';

export const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};