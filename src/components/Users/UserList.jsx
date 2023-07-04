import React from "react";

import Card from "../UI/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  return (
    <>
      <Card cardName={styles.users}>
        <ul>
          {props.userListData.map((user, index) => {
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
