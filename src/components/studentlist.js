import React from 'react';
import { Grid, Paper } from '@material-ui/core';


function StudentList({classes}) {
  return (
    <Grid item xs={12} style={{ marginTop: 10 }}>
      <Paper className={classes.internal} square>
          hi
      </Paper>
    </Grid>
  );
}

export default StudentList;
