import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function StudentList({ classes }) {
  return (
    <Grid item xs={12} >
      <Paper className={classes.internal} square>
        <Grid container>
          <Grid item xs={3}>
            <img
              src="https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg"
              className="studentImages"
            />
          </Grid>
          <Grid item xs={7} className="content">
            <p className="header">hello world </p>
            <p>hello world</p>
            <p>hello world</p>
            <p>hello world</p>
            </Grid>
          <Grid item xs={2}>
            <AddIcon onClick={()=>{console.log("hello")}} fontSize='large'/>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default StudentList;
