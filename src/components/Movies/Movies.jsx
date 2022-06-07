import { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

export const Movies = () => {
  const { data } = useGetMoviesQuery();

  console.log(data);

  return (
    <h1>
      <div>Movies</div>
    </h1>
  );
};
