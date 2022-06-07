import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskContainer } from "./components/NewTaskContainer";
import { TaskList } from "./components/TaskList";
import "./global.css";

function App() {
  const [todo, setTodo] = useState("");

  return (
    <>
      <Header />
      <main>
        <NewTaskContainer todo={todo} setTodo={setTodo} />
        <TaskList />
      </main>
    </>
  );
}

export default App;
