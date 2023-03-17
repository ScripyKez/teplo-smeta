import React from "react";
import Button from "../Button/button";
import styles from "./Socials.module.scss";
import {
  TelegramShareButton,
  WhatsappShareButton,
  VKShareButton,
  OKShareButton,
} from "react-share";

import { ReactComponent as IconVk } from "../../styles/icons/vk.svg";
import { ReactComponent as IconWh } from "../../styles/icons/wh.svg";
import { ReactComponent as IconTg } from "../../styles/icons/tg.svg";
import { ReactComponent as IconOk } from "../../styles/icons/ok.svg";

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
            <IconTg />
          </TelegramShareButton>
        </li>
        <li>
          <WhatsappShareButton url={window.location.href}>
            <IconWh />
          </WhatsappShareButton>
        </li>
        <li>
          <VKShareButton url={window.location.href}>
            <IconVk />
          </VKShareButton>
        </li>
        <li>
          <OKShareButton url={window.location.href}>
            <IconOk />
          </OKShareButton>
        </li>
      </ul>
    </div>
  );
}
