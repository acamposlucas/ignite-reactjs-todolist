import styles from "./Header.module.css";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
      <h1 className={styles.header__title}>
        <span>to</span>
        <span>do</span>
      </h1>
    </header>
  );
}
