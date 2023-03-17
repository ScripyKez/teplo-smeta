import React from "react";
import Button from "../Button/button";
import styles from "./Socials.module.scss";
import Icon from "../Icon/Icon";

export default function Socials() {
  const [copied, setCopied] = React.useState(false);

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  }

  return (
    <div className={styles.container}>
      <p>
        Не забудьте сохраните себе ссылку на смету, чтобы следить за актуальной
        ценой!
      </p>
      <Button
        isCopy={copied}
        onClick={() => copy()}
        buttonType={"social"}
        title={!copied ? "Скопировать" : "Скопировано!"}
      />
      <Icon icon="tg" />
      <Icon icon="wh" />
      <Icon icon="vk" />
      <Icon icon="ok" />
    </div>
  );
}
