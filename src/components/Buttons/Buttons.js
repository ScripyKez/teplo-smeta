import React from "react";
import styles from "../Buttons/Buttons.module.scss";
import Button from "../Button/button";
import cn from "classnames";

export default function Buttons({ modal, setModal }) {
  return (
    <div className={cn(styles.container)}>
      <p className={styles.title}>
        Вы можете заказать <span>отдельно материалы</span> или{" "}
        <span>материалы с монтажом,</span> укажите это в комментарии к заявке.
      </p>
      <div className={cn(styles.btns)}>
        <Button
          onClick={() => setModal(true)}
          buttonType={"primary"}
          title="Отправить заявку"
        ></Button>
        <a target="_blank" rel="noreferrer" href="https://wa.me/79018529668">
          <Button buttonType={"whup"} title="WhatsApp"></Button>
        </a>
        <a target="_blank" rel="noreferrer" href="https://t.me/viratek_remont">
          <Button buttonType={"tg"} title="Telegram"></Button>
        </a>
      </div>
    </div>
  );
}
