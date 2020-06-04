import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StudentList from './components/studentlist';
import Axios from 'axios';
import { STUDENT_LISTS } from './utils/url';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  internal: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginLeft: 5,
    marginTop: 5,
    textTransform: 'none',
  },
  textfield: {
    marginTop: 15,
  },
}));

function App() {
  const classes = useStyles();
  const [studentData, setStudentData] = useState([]);
  const [studentToBerendered, setStudentToBerendered] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    Axios.get(STUDENT_LISTS)
      .then((responseData) => {
        setStudentData(responseData.data.students);
        setStudentToBerendered(responseData.data.students);
        setIsDataLoaded(true);
      })
      .catch((err) => {
        setIsDataLoaded(true);
        console.log(err);
      });
  }, []);

  const searchByName = (e) => {
    const students = studentData.filter((student) => {
      const fullname = student.firstName + student.lastName;
      return fullname.toLowerCase().includes(e.target.value.toLowerCase().trim());
    });

    setStudentToBerendered(students);
  };

  const searchByTag = (e) => {
    setTags(e.target.value.trim());
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper className="paper">
            <Grid container>
              <Grid item xs={12} className="textField">
                <TextField
                  id="standard-basic"
                  placeholder="Search By Name"
                  fullWidth
                  onChange={searchByName}
                />
              </Grid>
              <Grid item xs={12} className="textField2">
                <TextField
                  id="standard-basic"
                  placeholder="search By Tag"
                  fullWidth
                  onChange={searchByTag}
                />
              </Grid>

              <Grid item xs={12} style={{ marginTop: 80 }}></Grid>
              {!isDataLoaded ? (
                <CircularProgress disableShrink className="loader" />
              ) : studentToBerendered && studentToBerendered.length <= 0 ? (
                <h3 style={{ marginLeft: 10 }}>No Student Found</h3>
              ) : (
                studentToBerendered.map((student, i) => {
                  return (
                    <StudentList classes={classes} student={student} key={i} tagsToSearch={tags} />
                  );
                })
              )}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default App;
