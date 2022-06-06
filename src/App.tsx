import { Header } from "./components/Header";
import { NewTaskContainer } from "./components/NewTaskContainer";
import { TaskList } from "./components/TaskList";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <NewTaskContainer />
        <TaskList />
      </main>
    </>
  );
}

export default App;
