import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/button";
import styles from "./Calculate.module.scss";


export default function Calculate() {
  const options = [
    { value: "50-m", label: "50 м.кв", get: "square" },
    { value: "80-m", label: "80 м.кв", get: "square" },
    { value: "100-m", label: "100 м.кв", get: "square" },
    { value: "120-m", label: "120 м.кв", get: "square" },
    { value: "150-m", label: "150 м.кв", get: "square" },
    { value: "200-m", label: "200 м.кв", get: "square" },
  ];
  const options2 = [
    { value: "Без утеплителя", label: "Без утеплителя", get: "uteplitel" },
    { value: "30-mm", label: "30 мм", get: "uteplitel" },
    { value: "50-mm", label: "50 мм", get: "uteplitel" },
    { value: "100-mm", label: "100 мм", get: "uteplitel" },
  ];
  const options3 = [
    {
      value: "taen",

      label: "ТAEN (Россия) - 23 Р/м.п",
      get: "brand",
    },
    {
      value: "henco",
      label: "HENCO (Бельгия) - 157 Р/м.п",
      get: "brand",
    },
  ];

  return (
    <form
      method="get"
      action="https://smural.su/smeta/f:tepliy-pol"
      className={styles.container}
    >
      <Dropdown options={options} />
      <Dropdown
        options={options2}
        placeholder={"Без утеплителя"}
        title="Толщина утелителя:"
      />
      <Dropdown
        options={options3}
        placeholder={"HENCO (Бельгия) - 157 Р/м.п"}
        wpx={"325px"}
        title="Производитель трубы:"
      />
      <Button
        buttonType="primary"
        title="Рассчитать"
        style={{ width: "179px", alignSelf: "end" }}
      />
    </form>
  );
}
