import React from "react";
import styles from "./Modal.module.scss";
import cn from "classnames";
import Button from "../Button/button";
import { ReactComponent as XIcon } from "../../styles/icons/x.svg";

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <div
      className={`${styles.wrapper} ${isOpen ? styles.open : styles.close}`}
      onClick={() => setIsOpen(false)}
    >
      <div className={cn(styles.content)} onClick={e => e.stopPropagation()}>
        <div className={cn(styles.header)}>
          <h2 className={cn(styles.title)}>Отправить заявку</h2>
          <XIcon onClick={() => setIsOpen(false)} />
        </div>
        <form className={cn(styles.form)}>
          <input placeholder="Имя" className={cn(styles.input)} />
          <input placeholder="Телефон" className={cn(styles.input)} />
          <textarea placeholder="Комментарий" className={cn(styles.comment)} />
          <Button
            buttonType={"primary"}
            title="ОТПРАВИТЬ"
            style={{ width: "384px" }}
          ></Button>
          <p className={styles.subtitle}>
            Нажатием на кнопку "Отправить" я даю свое согласие на обработку
            персональных данных в соответствии с указанными здесь условиями.
          </p>
        </form>
      </div>
    </div>
  );
}
