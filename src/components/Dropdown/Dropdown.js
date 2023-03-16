import React from "react";
import styles from "./Dropdown.module.scss";
import { ReactComponent as Arrow } from "../../styles/icons/down.svg";
import cn from "classnames";

export default function Dropdown({
  title = "Площадь теплого пола: ",
  wpx = "210px",
  options,
  placeholder = "50 м. кв.",

}) {
  const [isActive, setIsActive] = React.useState(false);
  const [selected, setSelected] = React.useState(placeholder);


  return (
    <div className={styles.dropdown} style={{ width: wpx }}>
      <p className={styles.title}>{title}</p>
      <div
        className={styles.dropdownBtn}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}

        <Arrow />
      </div>

      <div
        className={cn(styles.dropdownContent, styles.noneShow, {
          [styles.show]: isActive,
        })}
      >
        {options?.map(e => (
          <div key={e.label} className={cn(styles.dropdownItem, styles.active)}>
            <input id={e.value} type="radio" name={e.get} value={e.value} />
            <label
              onClick={e => {
                setSelected(e.target.innerText);
                setIsActive(false);
              }}
              htmlFor={e.value}
            >
              {e.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
