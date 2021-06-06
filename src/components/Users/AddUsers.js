import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUsers.css";
import { TextField } from "@material-ui/core";
const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [enteredUserLname, setEnteredUserLname] = useState("");
  const [enteredMaths, setEnteredMaths] = useState("");
  const [enteredSci, setEnteredSci] = useState("");
  const addUsersHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredMaths.trim().length === 0 ||
      enteredSci.trim().length === 0 ||
      enteredUserLname.trim().length === 0
    ) {
      alert("Please Add valid Input");
      return;
    }
    if (enteredUserAge < 1) {
      alert("Please Add valid Age");
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
      <form onSubmit={addUsersHandler}>
        <div>
          <TextField
            inputProps={{ min: 5 }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            value={enteredUserName}
            onChange={userChangeHandler}
          />
        </div>

        <TextField
          fullWidth
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          type="text"
          size="small"
          value={enteredUserLname}
          onChange={userLnameChangeHandler}
        />

        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          type="number"
          size="small"
          inputProps={{ min: 1, max: 100 }}
          value={enteredUserAge}
          onChange={userAgeChangeHandler}
        />

        <TextField
          id="outlined-basic"
          label="Maths"
          variant="outlined"
          type="number"
          size="small"
          value={enteredMaths}
          onChange={userMathsChangeHandler}
        />
        <TextField
          inputProps={{ min: 1, max: 100 }}
          id="outlined-basic"
          label="Science"
          variant="outlined"
          type="number"
          size="small"
          value={enteredSci}
          onChange={userSciChangeHandler}
        />
        <br />
        <Button type="submit">Add User </Button>
      </form>
    </Card>
  );
};
export default AddUsers;
