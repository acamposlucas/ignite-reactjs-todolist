import { ChangeEvent, FormEvent } from "react";
import styles from "./NewTaskContainer.module.css";

interface NewTaskContainerProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export function NewTaskContainer({ todo, setTodo }: NewTaskContainerProps) {
  function handleCreateTodo(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTodo(e.target.value);
  }

  return (
    <form className={styles["input__container--wrapper"]}>
      <div className={styles.input__container}>
        <label htmlFor="newTask"></label>
        <input
          type="text"
          id="newTask"
          placeholder="Adicione uma nova tarefa"
          value={todo}
          onChange={handleCreateTodo}
        />
      </div>
      <button type="button">Criar</button>
    </form>
  );
}
