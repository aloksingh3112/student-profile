import React from 'react';
import './App.css';
import { Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StudentList from './components/studentlist';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 60,
    height: 550,
  },
  internal: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  textField: {
    padding: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid xs={3}></Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12} className={classes.textField}>
                <TextField id="standard-basic" placeholder="Search By Name" fullWidth />
              </Grid>
              <Grid item xs={12} className={classes.textField}>
                <TextField id="standard-basic" placeholder="search By Tag" fullWidth />
              </Grid>

              <StudentList classes={classes}/>
              
            </Grid>
          </Paper>
        </Grid>

        <Grid xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default App;
