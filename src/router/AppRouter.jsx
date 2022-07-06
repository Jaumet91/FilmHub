import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { Navbar } from '../components/Navbar/Navbar';
import { Actors, MovieInformation, Profile } from '../components/index';
import { Movies } from '../components/Movies/Movies';

import useStyles from './styles';
import { useAlan } from '../components/Alan';

export const AppRouter = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          {['/', '/approved'].map((path, i) => (
            <Route path={path} element={<Movies />} key={i} />
          ))}
          {/* <Route path={('/', '/approved')} element={<Movies />} /> */}
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />

          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};
