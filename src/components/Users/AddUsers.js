import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUsers.css";

import FormHelperText from "@material-ui/core/FormHelperText";
import { Grid, TextField } from "@material-ui/core";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [enteredUserLname, setEnteredUserLname] = useState("");
  const [enteredMaths, setEnteredMaths] = useState("");
  const [error, setError] = React.useState(false);
  const [enteredSci, setEnteredSci] = useState("");

  const [helperText, setHelperText] = useState(" ");

  const addUsersHandler = (event) => {
    event.preventDefault();
    setHelperText(" ");
    setError(false);
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserLname.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredMaths.trim().length === 0 ||
      enteredSci.trim().length === 0
    ) {
      setError(true);
      setHelperText({ Genreal: "Please Add Record." });
      return;
    }

    if (enteredMaths < 0 || enteredMaths >= 100) {
      setError(true);

      setHelperText({ Marks_maths: "Please Add Valid Marks" });
      return;
    }
    if (enteredSci < 0 || enteredSci >= 100) {
      setError(true);

      setHelperText({ Marks_sci: "Please Add Valid Marks" });
      return;
    }
    if (enteredUserAge < 1) {
      // alert("Please Add valid Age");
      setError(true);
      setHelperText({ Age: "Add Valid Age" });
      return;
    }
    // console.log(enteredUserAge, enteredUserName);
    props.onAddUsers(
      enteredUserName,
      enteredUserLname,
      enteredUserAge,
      enteredMaths,
      enteredSci
    );
    setEnteredUserAge("");
    setEnteredUserName("");
    setEnteredUserLname("");
    setEnteredMaths("");
    setEnteredSci("");
  };

  const userChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const userLnameChangeHandler = (event) => {
    setEnteredUserLname(event.target.value);
  };
  const userMathsChangeHandler = (event) => {
    setEnteredMaths(event.target.value);
  };
  const userSciChangeHandler = (event) => {
    setEnteredSci(event.target.value);
  };

  return (
    <Card>
      <FormHelperText error={error} style={{ color: "red" }}>
        {helperText.Genreal}
      </FormHelperText>

      <form onSubmit={addUsersHandler}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              inputProps={{ min: 5 }}
              label="Name"
              variant="outlined"
              type="text"
              size="small"
              fullWidth
              value={enteredUserName}
              onChange={userChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              type="text"
              size="small"
              value={enteredUserLname}
              onChange={userLnameChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Age"
              variant="outlined"
              type="number"
              size="small"
              // inputProps={{ min: 1, max: 100 }}
              value={enteredUserAge}
              onChange={userAgeChangeHandler}
            />
            <FormHelperText error={error} style={{ color: "red" }}>
              {helperText.Age}
            </FormHelperText>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Maths"
              variant="outlined"
              type="number"
              size="small"
              value={enteredMaths}
              onChange={userMathsChangeHandler}
            />
            <FormHelperText error={error} style={{ color: "red" }}>
              {helperText.Marks_maths}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              // inputProps={{ min: 1, max: 100 }}

              label="Science"
              variant="outlined"
              type="number"
              size="small"
              value={enteredSci}
              onChange={userSciChangeHandler}
            />
            <FormHelperText error={error} style={{ color: "red" }}>
              {helperText.Marks_sci}
            </FormHelperText>
          </Grid>
        </Grid>
        <Button type="submit">Add User </Button>
      </form>
    </Card>
  );
};
export default AddUsers;
