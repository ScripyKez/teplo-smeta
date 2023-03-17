import React from "react";
import Layout from "../Layout/Layout";
import styles from "../App/App.module.scss";
import Products from "../Products/Products";
import Buttons from "../Buttons/Buttons";
import Examples from "../Examples/Examples";
import Socials from "../Socials/Socials";
import Modal from "../Modal/Modal";
import ModalMob from "../ModalMob/ModalMob";

export default function App() {
  const data = [
    {
      img: "assets/images/image.png",
      name: "Труба Valtec VP1620.3 16x2,0",
      price: 58,
      qnt: 520,
      unit: "п.м",
    },
    {
      img: "assets/images/image1.png",
      name: "Коллекторная группа Valtec VTc.586.EMNX.0604",
      price: 11072,
      qnt: 1,
      unit: "п.м",
    },
    {
      img: "assets/images/image2.png",
      name: "Утеплитель экструдированный пенополистирол 30 мм",
      price: 220,
      qnt: 8,
      unit: "п.м",
    },
    {
      img: "assets/images/image2.png",
      name: "Скоба якорная",
      price: 3.4,
      qnt: 1500,
      unit: "п.м",
    },
    {
      img: "assets/images/image1.png",
      name: 'Дюбель "Гриб" 10x80',
      price: 4.5,
      qnt: 700,
      unit: "п.м",
    },
  ];

  const data2 = [
    {
      name: "Монтаж системы",
      price: 690,
      qnt: 100,
      unit: "кв.м",
    },
    {
      name: "Работы по опрессовке",
      price: 7000,
      qnt: 1,
      unit: "шт.",
    },
    {
      name: "Транспортные расходы",
      price: 1500,
      qnt: 1,
      unit: "шт.",
    },
  ];

  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Layout modal={modal} setModal={setModal}>
        <h1 className={styles.title}>
          Смета водяного теплого пола площадью 100 м.кв
        </h1>
        <p className={styles.subtitle}>
          Смета водяного теплого пола с оптимальными параметрами: на 4 контура,
          диаметр трубы 16мм, шаг укладки 20 см, подводка от расстояние от
          коллектора до границы отапливаемой площади 5 м
        </p>
        <Products data={data} />
        <Products
          data={data2}
          m_header="Если вам необходим монтаж"
          title="Если вам необходим монтаж:"
        />

        <Buttons modal={modal} setModal={setModal} />

        <Examples />
        <Socials />
      </Layout>
      {window.innerWidth > 500 ? (
        <Modal isOpen={modal} setIsOpen={setModal} />
      ) : (
        <ModalMob isOpen={modal} setIsOpen={setModal} />
      )}
    </>
  );
}
