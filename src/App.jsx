import Reloader from "./components/Reloader/Reloader";
import Card from "./components/UI/Card";
import UserList from "./components/UsersList/UserList";

function App() {
  return (
    <section className="main-container">
      <Card className="app-container">
        <Reloader />
        <UserList />
      </Card>
    </section>
  );
}

export default App;
