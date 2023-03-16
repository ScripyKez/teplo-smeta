import React from "react";
import styles from "./Products.module.scss";
import cn from "classnames";
//TODO:
//[] Сделать правильный вывод сумм

export default function Products({
  title = "У нас можно заказать материалы для самостоятельного монтажа:",
  data,
  m_header = "Материалы водяного теплого пола",
}) {
  // eslint-disable-next-line
  const [sum, setSum] = React.useState(
    data.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.qnt,
      0
    )
  );
  // eslint-disable-next-line
  const [mobile, setMobile] = React.useState(window.innerWidth);

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <>
      <h2 className={cn(styles.title)}>{title}</h2>
      <div className={cn(styles.content)}>
        <ul>
          <li className={cn(styles.header)}>
            <span>Наименование</span>
            <span>Стоимость</span>
            <span>Кол-во</span>
            <span>Ед.изм.</span>
            <span>Сумма</span>
            <p className={styles.m_header}>{m_header}</p>
          </li>

          {mobile <= 500
            ? data?.map((e, i) => (
                <li
                  key={i}
                  className={cn(styles.m__item, {
                    [styles.m__item_img]: !e.img,
                  })}
                >
                  {e.img && <img alt={e.name} src={e.img}></img>}
                  <p className={styles.m__item_name}>{e.name}</p>
                  <span>
                    {numberWithSpaces(e.price)} ₽ x {numberWithSpaces(e.qnt)}{" "}
                    {e.unit} = <b>{numberWithSpaces(e.price * e.qnt)} ₽</b>
                  </span>
                </li>
              ))
            : data?.map((e, i) => (
                <li key={i} className={cn(styles.item)}>
                  {e.img && <img alt={e.name} src={e.img}></img>}
                  <p>{e.name}</p>
                  <span>{numberWithSpaces(e.price)} ₽</span>
                  <span>{numberWithSpaces(e.qnt)}</span>
                  <span>{e.unit}</span>
                  <span>{numberWithSpaces(e.price * e.qnt)} ₽</span>
                </li>
              ))}
          <li className={styles.sum}>
            <p>Итого:</p>
            <p>{numberWithSpaces(sum)} ₽</p>
          </li>
        </ul>
      </div>
    </>
  );
}
