import React from "react";
import styles from "../ButtonsMob/ButtonsMob.module.scss";
import Button from "../Button/button";
import cn from "classnames";

export default function ButtonsMob({ modal, setModal }) {
  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.btns)}>
        <Button
          onClick={() => setModal(true)}
          buttonType={"primary"}
          title="Отправить заявку"
          style={{ width: "212px", height: "44px" }}
        ></Button>
        <a target="_blank" href="https://wa.me/79018529668">
          <Button
            buttonType={"whup"}
            title=""
            style={{ width: "44px", height: "44px" }}
          ></Button>
        </a>
        <a target="_blank" href="https://t.me/viratek_remont">
          <Button
            buttonType={"tg"}
            title=""
            style={{ width: "44px", height: "44px" }}
          ></Button>
        </a>
      </div>
    </div>
  );
}
