import styles from "./TaskList.module.css";
import { TodoList } from "./TodoList";

export function TaskList() {
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
        {/* <div className={styles["taskList__board--noTask"]}>
          <p>
            Você ainda não tem tarefas cadastradas <br />
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div> */}
        <TodoList />
      </div>
    </section>
  );
}
