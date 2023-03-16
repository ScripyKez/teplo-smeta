import React from "react";
import styles from "../Buttons/Buttons.module.scss";
import Button from "../Button/button";
import cn from "classnames";

export default function Buttons({ modal, setModal }) {
  return (
    <div className={cn(styles.container)}>
      <p>
        Вы можете заказать <span>отдельно материалы</span> или{" "}
        <span>материалы с монтажом,</span> укажите это в комментарии к заявке.
      </p>
      <div className={cn(styles.btns)}>
        <Button
          onClick={() => setModal(true)}
          buttonType={"primary"}
          title="Отправить заявку"
          style={{ width: "234px" }}
        ></Button>
        <a target="_blank" href="https://wa.me/79018529668">
          <Button
            buttonType={"whup"}
            title="WhatsApp"
            style={{ width: "149px" }}
          ></Button>
        </a>
        <a target="_blank" href="https://t.me/viratek_remont">
          <Button
            buttonType={"tg"}
            title="Telegram"
            style={{ width: "149px" }}
          ></Button>
        </a>
      </div>
    </div>
  );
}
