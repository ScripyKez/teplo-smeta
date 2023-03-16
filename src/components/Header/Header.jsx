import React from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../styles/icons/Logo.svg";

export default function Header({
  title = "Расчет водяного теплого дома",
  form = "Задать вопрос",
}) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/">
          <Logo className={styles.logo} />
        </a>
        <h3 className={styles.title}>{title}</h3>
        <a className={styles.form} href="/">
          {form}
        </a>
      </div>
    </header>
  );
}
