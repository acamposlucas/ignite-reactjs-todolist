import React, { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskContainer } from "./components/NewTaskContainer";
import { TodoList } from "./components/TodoList";
import "./global.css";
import { Todo } from "./model";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleAddNewTodo(e: React.FormEvent) {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: uuidv4(), todo, isDone: false }]);
    }
    setTodo("");
  }

  return (
    <>
      <Header />
      <main>
        <NewTaskContainer
          todo={todo}
          setTodo={setTodo}
          handleAddNewTodo={handleAddNewTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;
