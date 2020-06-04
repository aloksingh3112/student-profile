import React, { useState } from 'react';
import { Grid, Paper, Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { average } from '../utils/helper';

function StudentList({ classes, student, tagsToSearch }) {
  const [isOpened, setIsOpened] = useState(false);
  const [tags, setTags] = useState([]);
  const [isTagFound, setIsTagFound] = useState(false);

  const addTag = (e) => {
    if (e.key === 'Enter') {
      const tagsData = [...tags, e.target.value];
      setTags(tagsData);
      e.target.value = '';
    }
  };

  React.useEffect(() => {
    let isTagPresent = true;

    if (tagsToSearch != '')
      isTagPresent = tags.some((substring) =>
        substring.toLowerCase().includes(tagsToSearch.toLowerCase())
      );

    if (isTagPresent) {
      setIsTagFound(true);
    } else {
      setIsTagFound(false);
    }
  }, [tagsToSearch]);

  return !isTagFound ? null : (
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

                {tags &&
                  tags.length > 0 &&
                  tags.map((tag, i) => {
                    return (
                      <Button variant="contained" key={i} className={classes.button}>
                        {tag}
                      </Button>
                    );
                  })}
                <br></br>
                <TextField
                  id="standard-basic"
                  placeholder="Add a tag"
                  onKeyDown={addTag}
                  className={classes.textfield}
                />
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
