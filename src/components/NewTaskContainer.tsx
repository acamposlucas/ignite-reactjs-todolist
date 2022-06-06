import styles from "./NewTaskContainer.module.css";

export function NewTaskContainer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.input__container}>
        <label htmlFor="newTask"></label>
        <input
          type="text"
          id="newTask"
          placeholder="Adicione uma nova tarefa"
        />
      </div>
      <button>Criar</button>
    </div>
  );
}
