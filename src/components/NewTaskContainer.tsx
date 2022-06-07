import styles from "./NewTaskContainer.module.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddNewTodo: (e: React.FormEvent) => void;
}

export function NewTaskContainer({ todo, setTodo, handleAddNewTodo }: Props) {
  return (
    <form
      onSubmit={handleAddNewTodo}
      className={styles["input__container--wrapper"]}
    >
      <div className={styles.input__container}>
        <label htmlFor="newTask"></label>
        <input
          type="text"
          id="newTask"
          placeholder="Adicione uma nova tarefa"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button type="submit">Criar</button>
    </form>
  );
}
