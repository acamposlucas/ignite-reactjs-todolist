import styles from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";
import { Todo } from "../model";
import { v4 as uuidv4 } from "uuid";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function TodoList({ todos, setTodos }: Props) {
  return (
    <section className={styles.taskList}>
      <header className={styles.taskList__header}>
        <h2>
          Tarefas criadas <span>0</span>
        </h2>
        <h2>
          Concluídas <span>0</span>
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
              <TodoItem todo={todo.todo} key={uuidv4()} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
