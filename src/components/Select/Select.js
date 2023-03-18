import React, { useState } from "react";
import "./Select.scss";
import Button from "../Button/button";

import Select from "react-select";

export default () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const options = [
    { value: "50-m", label: "50 м.кв.", get: "square" },
    { value: "80-m", label: "80 м.кв.", get: "square" },
    { value: "100-m", label: "100 м.кв.", get: "square" },
    { value: "120-m", label: "120 м.кв.", get: "square" },
    { value: "150-m", label: "150 м.кв.", get: "square" },
    { value: "200-m", label: "200 м.кв.", get: "square" },
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
      className="form__container"
    >
      <div className="form__react-select-wrapper">
        <label className="react-select-title">Площадь теплого пола:</label>
        <Select
          placeholder={
            <p style={{ color: "black", fontWeight: "600" }}>
              {options[0].label}
            </p>
          }
          defaultValue={options[0].value}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={!isClearable}
          isRtl={isRtl}
          isSearchable={!isSearchable}
          name="square"
          options={options}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
      <div className="form__react-select-wrapper">
        <label className="react-select-title">Толщина утеплителя:</label>
        <Select
          placeholder={
            <p style={{ color: "black", fontWeight: "600" }}>
              {options2[0].label}
            </p>
          }
          className="react-select-container"
          classNamePrefix="react-select"
          defaultValue={options2[0].value}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={!isClearable}
          isRtl={isRtl}
          isSearchable={!isSearchable}
          name="uteplitel"
          options={options2}
        />
      </div>
      <div className="form__react-select-wrapper">
        <label className="react-select-title">Производитель трубы:</label>
        <Select
          placeholder={
            <p style={{ color: "black", fontWeight: "600" }}>
              {options3[0].label}
            </p>
          }
          className="react-select-container2"
          classNamePrefix="react-select2"
          defaultValue={options3[0].value}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={!isClearable}
          isRtl={isRtl}
          isSearchable={!isSearchable}
          name="brand"
          options={options3}
        />
      </div>
      <Button
        buttonType="primary"
        title="Рассчитать"
        style={{ width: "179px", alignSelf: "end" }}
      />
    </form>
  );
};
