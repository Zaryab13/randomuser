import { useState, useEffect, Fragment } from "react";

import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css";
import Reloader from "../Reloader/Reloader";
// import {useAPI} from '../../Hooks/useAPI';

const UserList = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [data, isLoading, error] = useAPI("https://randomuser.me/api/?results=10")

  const ReloadHandler = async () => {
    setIsLoading(true)

    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    setRandomUsers(data.results);

    setIsLoading(false);
  }

  useEffect(()=>{
    ReloadHandler();
  },[])
  
  // className={(isLoading)? styles.spin:''}
  return (
    <Fragment>
      <Reloader onClick={ReloadHandler} onLoading={isLoading}/>
      <ul className={styles.usersList}>
        {!isLoading && randomUsers.length === 0 && (
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
    </Fragment>
  )
};

export default UserList;
