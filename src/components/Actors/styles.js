import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  image: {
    maxWidth: '90%',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow:
      theme.palette.mode === 'light' && '0.5em 1em 1em rgb(64, 64, 70)',
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      margin: '0 auto',
      width: '90%',
    },
  },
}));
