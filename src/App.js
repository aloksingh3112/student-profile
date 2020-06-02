import React from 'react';
import './App.css';
import { Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StudentList from './components/studentlist';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  internal: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontWeight:"bold",
    fontSize:16
  },
 
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid xs={3}></Grid>
        <Grid item xs={6}>
          <Paper className="paper">
            <Grid container>
            
              <Grid item xs={12} className="textField">
                <TextField id="standard-basic" placeholder="Search By Name" fullWidth />
              </Grid>
              <Grid item xs={12}  className="textField2">
                <TextField id="standard-basic" placeholder="search By Tag" fullWidth />
              </Grid>
              
              <Grid item xs={12} style={{marginTop:80}}></Grid>
              <StudentList classes={classes}/>
              <StudentList classes={classes}/>
              <StudentList classes={classes}/>
              <StudentList classes={classes}/>
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
