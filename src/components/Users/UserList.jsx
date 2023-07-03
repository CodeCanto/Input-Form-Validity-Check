import React from "react";

import Card from "../UI/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  console.log(props.userList);
  return (
    <>
      <Card cardName={styles.users}>
        <ul>
          {props.userList.map((user, index) => {
            return (
              <li key={index}>
                <p>
                  {user.username} {user.userage}
                </p>
              </li>
            );
          })}
        </ul>
      </Card>
    </>
  );
}
