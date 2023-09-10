import { useEffect, useState } from "react";
import axios from "axios";

import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css";

// Axios Instance for Base URL
const client = axios.create({
  baseURL: "https://randomuser.me/api/",
});

const UserList = (props) => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [apiCall, setApiCall] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const resp = await client.get("?results=10");
        const data = resp.data.results;
        setRandomUsers(data);
      } catch (error) {
        console.error('APi Call Failed' + error);
      }
    };
    setApiCall(true);
    getUsers();
    props.onRequest(apiCall);
    setApiCall(false);
  },[]);

  return (
    <ul className={styles.usersList}>
      {randomUsers.length === 0 && (
        <h3 className="error_text">Connection Timeout</h3>
      )}
      {randomUsers.length > 0 &&
        randomUsers.map((user) => (
          <UserItem
            key={user.login.uuid}
            name={user.name}
            email={user.email}
            image={user.picture.large}
            cell={user.cell}
          />
        ))}
    </ul>
  );
};

export default UserList;
