import { useEffect, useState } from "react";
import axios from "axios";

import UserItem from '../UserItem/UserItem';

// Axios Instance for Base URL
const client = axios.create({
  baseURL: "https://random-data-api.com/api/v2/users",
});

const UserList = () => {
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const resp = await client.get("?size=5&is_xml=true");
      const data = resp.data;
      setRandomUsers(data);
    };
    getUsers();
    // console.log(randomUsers)
  }, []);

  return (
    <ul>
      {randomUsers.length > 0 &&
        randomUsers.map((user) => (
          <UserItem
            key={user.uid}
            fname={user.first_name}
            lname={user.last_name}
            email={user.email}
            image={user.avatar}
            phNo={user.phone_number}
          />
        ))}
    </ul>
  );
};

export default UserList;
