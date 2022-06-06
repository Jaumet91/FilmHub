import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import {
  Actors,
  MovieInformation,
  Movies,
  Profile,
  Navbar,
} from '../components/index';

import useStyles from '../styles/styles';

export const AppRouter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/movie/:id' element={<MovieInformation />} />
            <Route path='/actors/:id' element={<Actors />} />
            <Route path='/profile/:id' element={<Profile />} />

            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};
