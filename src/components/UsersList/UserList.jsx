import { useState,Fragment } from "react";

import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css";
import Reloader from "../Reloader/Reloader";
import useAPI from '../../Hooks/useAPI';

const UserList = () => {

  // const [randomUsers, setRandomUsers] = useState([]);

  const [data, isLoading, error] = useAPI("https://randomuser.me/api/?results=10")

  const handleReload = async () => {
    setRandomUsers(data);
  }
  
  return (
    <Fragment>
      <Reloader onClick={handleReload} className={(isLoading)? styles.spin:''}/>
      <ul className={styles.usersList}>
        {error && (
          <h3 className="error_text">Connection Timeout</h3>
        )}
        {data.length > 0 &&
          data.map((user) => (
            <UserItem
              key={user.login.uuid}
              name={user.name}
              email={user.email}
              image={user.picture.large}
              cell={user.cell}
            />
          ))}
      </ul>
    </Fragment>
  )
};

export default UserList;
