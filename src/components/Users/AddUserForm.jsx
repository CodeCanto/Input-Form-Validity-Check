import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";
import Button from "../UI/Button";

const AddUserForm = (props) => {
  const [userData, setUserData] = useState({});

  function submitHandler(event) {
    event.preventDefault();
    if (
      userData.username.trim() === undefined ||
      userData.userage.trim() === undefined
    ) {
      return;
    }
    if (userData.username.trim() === 0 || userData.userage.trim() === 0) {
      return;
    }
    if (+userData.userage < 1) {
      return;
    }
    props.updateUserList(userData);
    event.target.reset();
  }

  function changeHandler(event) {
    setUserData((prevData) => {
      return { ...prevData, [event.target.id]: event.target.value };
    });
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          onChange={(event) => changeHandler(event)}
          id="username"
        ></input>
        <label htmlFor="userage">User Age</label>
        <input
          type="number"
          onChange={(event) => changeHandler(event)}
          id="userage"
        ></input>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUserForm;
