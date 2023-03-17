import React from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { RiFileCopyLine } from "react-icons/ri";
import { MdOutlineLibraryAddCheck } from "react-icons/md";

export default function Button({
  buttonType,
  title,
  htmlTypeButton = "submit",
  formId = "default",
  isCopy,
  ...props
}) {
  return (
    <button
      //form={formId}
      type={htmlTypeButton}
      className={cn(styles.btn, styles[buttonType], {
        [styles.isCopy]: isCopy,
      })}
      {...props}
    >
      <p>
        {buttonType === "primary" ? <>{title}</> : ""}
        {buttonType === "social" ? (
          <>
            {!isCopy ? (
              <RiFileCopyLine className={styles.svg} />
            ) : (
              <MdOutlineLibraryAddCheck className={styles.svg} />
            )}
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
