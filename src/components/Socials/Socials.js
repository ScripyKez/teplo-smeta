import React from "react";
import Button from "../Button/button";
import styles from "./Socials.module.scss";
import Icon from "../Icon/Icon";
import {
  TelegramShareButton,
  WhatsappShareButton,
  VKShareButton,
  OKShareButton,
} from "react-share";

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
      <ul className={styles.ul}>
        <li>
          <TelegramShareButton url={window.location.href}>
            <Icon icon="tg" />
          </TelegramShareButton>
        </li>
        <li>
          <WhatsappShareButton url={window.location.href}>
            <Icon icon="wh" />
          </WhatsappShareButton>
        </li>
        <li>
          <VKShareButton url={window.location.href}>
            <Icon icon="vk" />
          </VKShareButton>
        </li>
        <li>
          <OKShareButton url={window.location.href}>
            <Icon icon="ok" />
          </OKShareButton>
        </li>
      </ul>
    </div>
  );
}
