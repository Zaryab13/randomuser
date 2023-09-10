import { useState } from "react";
import Reloader from "./components/Reloader/Reloader";
import Card from "./components/UI/Card";
import UserList from "./components/UsersList/UserList";

function App() {
  const [reloadCount, setReloadCount] = useState(0);

  const apiCallHandler = (state) => {
    console.log(state);
  };

  const reloadHandler = () => {
    setReloadCount((prevState) => prevState + 1);
  };

  return (
    <section>
      <Card className="app-container">
        <Reloader onClick={reloadHandler} />
        <UserList
          key={reloadCount}
          onRequest={apiCallHandler}
        />
      </Card>
    </section>
  );
}

export default App;
