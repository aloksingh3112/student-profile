import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { average } from '../utils/helper';

function StudentList({ classes, student }) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Grid item xs={12}>
      <Paper className={classes.internal} square>
        <Grid container>
          <Grid item xs={3}>
            <img src={student.pic} className="studentImages" />
          </Grid>
          <Grid item xs={8} className="content">
            <p className="header">
              {student.firstName} {student.lastName}
            </p>
            <p>Email : {student.email}</p>
            <p>Company : {student.company}</p>
            <p>Skill :{student.skill}</p>
            <p>Average :{average(student.grades)}%</p>
            {isOpened && (
              <div style={{ marginTop: 25 }}>
                {student.grades.map((grade, i) => {
                  return (
                    <p key={i}>
                      Test {i + 1} : {grade}%
                    </p>
                  );
                })}
              </div>
            )}
          </Grid>
          <Grid item xs={1}>
            {!isOpened && (
              <AddIcon
                onClick={() => {
                  setIsOpened(true);
                }}
                fontSize="large"
                className="icon"
              />
            )}
            {isOpened && (
              <RemoveIcon
                onClick={() => {
                  setIsOpened(false);
                }}
                fontSize="large"
                className="icon"
              ></RemoveIcon>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default StudentList;
