import React, { useState } from "react";

import AddUserForm from "./components/Users/AddUserForm";
import UserList from "./components/Users/UserList";

function App() {
  const [userListData, setUserListData] = useState([]);

  function updateUserList(input) {
    setUserListData((prevUserListData) => {
      return [...prevUserListData, input];
    });
  }

  return (
    <>
      <AddUserForm updateUserList={updateUserList} />
      <UserList userListData={userListData} />
    </>
  );
}

export default App;
