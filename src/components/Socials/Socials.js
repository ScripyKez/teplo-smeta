import React from "react";
import Button from "../Button/button";
import styles from "./Socials.module.scss";
import Icon from "../Icon/Icon";

export default function Socials({}) {
  function copyToClipboard() {
    const tempInput = document.createElement("input");
    tempInput.value = "https://t.me/viratek_remont";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  return (
    <div className={styles.container}>
      <p>
        Не забудьте сохраните себе ссылку на смету, чтобы следить за актуальной
        ценой!
      </p>
      <Button
        onClick={() => copyToClipboard()}
        buttonType={"social"}
        title={"Скопировать"}
      />
      <Icon icon="tg" />
      <Icon icon="wh" />
      <Icon icon="vk" />
      <Icon icon="ok" />
    </div>
  );
}
