import React, { useState } from "react";

import AddUserForm from "./components/Users/AddUserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  function updateUserList(input) {
    setUserList((prevUserList) => {
      [...prevUserList, input];
    });
  }

  return (
    <>
      <AddUserForm updateUserList={updateUserList} />
      <UserList userList={userList} />
    </>
  );
}

export default App;
