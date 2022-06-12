import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { Navbar } from '../components/Navbar/Navbar';
import { Actors, MovieInformation, Movies, Profile } from '../components/index';

import useStyles from './styles';

export const AppRouter = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
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
      </div>
    </BrowserRouter>
  );
};
