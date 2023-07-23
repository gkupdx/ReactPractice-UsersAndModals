// AddUser component
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    // some basic input validation...
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    }
    if (Number(age) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age must be greater than 0)."
      });
      return;
    }

    props.onAddUser(username, age);

    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onClick={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username:</label>
          <input
            value={username}
            onChange={usernameChangeHandler}
            type="text"
            id="username"
          />
          <label htmlFor="age">Age (years):</label>
          <input
            value={age}
            onChange={ageChangeHandler}
            type="number"
            id="age"
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
