import React from "react";
import styles from "./Footer.module.scss";
import cn from "classnames";

export default function Footer({
  title = "Онлайн расчет водяного теплого пола. Информация на сайте не является публичной офертой.",
  form = "Задать вопрос",
}) {
  return (
    <footer className={cn(styles.footer)}>
      <div className={cn(styles.container)}>
        <h3 className={cn(styles.title)}>{title}</h3>
        <a className={cn(styles.form)} href="/">
          {form}
        </a>
      </div>
    </footer>
  );
}
