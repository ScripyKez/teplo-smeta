import React from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";

export default function Button({
  buttonType,
  title,
  htmlTypeButton = "submit",
  formId = "default",
  ...props
}) {
  return (
    <button
      //form={formId}
      type={htmlTypeButton}
      className={cn(styles.btn, styles[buttonType])}
      {...props}
    >
      <p>
        {buttonType === "primary" ? <>{title}</> : ""}
        {buttonType === "social" ? (
          <>
            <RxCopy className={styles.svg} />
            {title}
          </>
        ) : (
          ""
        )}
        {buttonType === "tg" ? (
          <>
            <FaTelegramPlane className={styles.svg} />
            <span>{title}</span>
          </>
        ) : (
          ""
        )}
        {buttonType === "whup" ? (
          <>
            <FaWhatsapp className={styles.svg} />
            <span>{title}</span>
          </>
        ) : (
          ""
        )}
      </p>
    </button>
  );
}
