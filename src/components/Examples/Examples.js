import React from "react";
import styles from "./Examples.module.scss";
import ImageViewer from "react-simple-image-viewer";

export default function Examples({
  title = "Примеры монтажа водяного теплого пола по смете:",
  subTitle = "Смета водяного теплого пола с оптимальными параметрами: на 4 контура, диаметр трубы 16мм, шаг укладки 20 см, подводка от расстояние от коллектора до границы отапливаемой площади 5 м.",
}) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const images = [
    "/assets/images/1.png",
    "/assets/images/2.png",
    "/assets/images/3.png",
    "/assets/images/4.png",
    "/assets/images/5.png",
    "/assets/images/6.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/12.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
    "http://placeimg.com/800/1200/nature",
    "http://placeimg.com/1920/1080/nature",
    "http://placeimg.com/1500/500/nature",
  ];

  const images2 = [
    "/assets/images/1.png",
    "/assets/images/2.png",
    "/assets/images/3.png",
    "/assets/images/4.png",
    "/assets/images/5.png",
    "/assets/images/6.png",
    "/assets/images/1.png",
    "/assets/images/1.png",
  ];

  const openImageViewer = React.useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  // eslint-disable-next-line
  const [mobile, setMobile] = React.useState(window.innerWidth);

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <div className={styles.content}>
        {mobile <= 500
          ? images2.map((item, i) => (
              <img
                key={i}
                className={styles.item}
                src={item}
                onClick={() => openImageViewer(i)}
                alt="item"
              />
            ))
          : images.map((item, i) => (
              <img
                key={i}
                className={styles.item}
                src={item}
                onClick={() => openImageViewer(i)}
                alt="item"
              />
            ))}
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  );
}
