import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {localStorage.getItem('username')}
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              const url = 'https://agitated-jackson-ad9bdc.netlify.app/';
              window.open(url, '_blank');
            }}
          >
            Video Call
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              localStorage.removeItem('username');
              localStorage.removeItem('password');
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
