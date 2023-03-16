import React from "react";
import styles from "./Icon.module.scss";
import { ReactComponent as IconVk } from "../../styles/icons/vk.svg";
import { ReactComponent as IconWh } from "../../styles/icons/wh.svg";
import { ReactComponent as IconTg } from "../../styles/icons/tg.svg";
import { ReactComponent as IconOk } from "../../styles/icons/ok.svg";

export default function Icon({ icon = "tg" }) {
  return (
    <div className={styles.icon}>
      {icon === "tg" ? <IconTg /> : ""}
      {icon === "wh" ? <IconWh /> : ""}
      {icon === "vk" ? <IconVk /> : ""}
      {icon === "ok" ? <IconOk /> : ""}
    </div>
  );
}
