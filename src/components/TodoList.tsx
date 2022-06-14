import styles from "./TodoList.module.css";
import { Todo } from "../model";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Trash } from "phosphor-react";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function TodoList({ todos, setTodos }: Props) {
  const [todosCreated, setTodosCreated] = useState(todos.length);
  const [todosCompleted, setTodosCompleted] = useState<number>(0);

  useEffect(() => {
    let totalTodosCompleted = 0;
    todos.forEach((todo) =>
      todo.isDone === true ? (totalTodosCompleted += 1) : null
    );
    setTodosCompleted(totalTodosCompleted);
  });

  useEffect(() => {
    setTodosCreated(todos.length);
  });

  function handleToggleTodoIsDone(id: string) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(newTodos);
  }

  function handleRemoveTodo(id: string) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos([...filteredTodos]);
  }
  return (
    <section className={styles.taskList}>
      <header className={styles.taskList__header}>
        <h2>
          Tarefas criadas <span>{todosCreated}</span>
        </h2>
        <h2>
          Concluídas <span>{todosCompleted}</span>
        </h2>
      </header>
      <div className={styles.taskList__board}>
        {todos.length === 0 ? (
          <div className={styles["taskList__board--noTask"]}>
            <p>
              Você ainda não tem tarefas cadastradas <br />
              <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
          </div>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className={styles.todoItem}>
                <label className={styles["todoItem__checkbox"]}>
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    readOnly
                    onClick={() => handleToggleTodoIsDone(todo.id)}
                  ></input>
                </label>
                <p
                  className={
                    todo.isDone ? styles["todoTitle--isDone"] : styles.todoTitle
                  }
                >
                  {todo.todo}
                </p>
                <button type="button" onClick={() => handleRemoveTodo(todo.id)}>
                  <Trash />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
