// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper.min.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import SwiperCore, {
  Navigation,
  Pagination,
} from "../../../node_modules/swiper";
import { FC, useEffect, useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { Card } from "../Card/Card";
import { useProduct } from "../../store/products.store";

SwiperCore.use([Navigation]);

interface Props {
  type?: "banner" | "cards" | "combo";
}

export const Slider: FC<Props> = ({ type = "banner" }): JSX.Element => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [swiperCards, setSwiperCards] = useState<SwiperCore>();

  const [prevActive, setPrevActive] = useState(true);
  const [nextActive, setNextActive] = useState(false);

  const [prevActiveCards, setPrevActiveCards] = useState(true);
  const [nextActiveCards, setNextActiveCards] = useState(false);

  const isActice = () => {
    setPrevActive(1 === Number(swiper && swiper?.activeIndex + 1));
    setNextActive(
      Number(swiper?.slides?.length) ===
        Number(swiper && swiper?.activeIndex + 1)
    );
  };

  const isActiceCards = () => {
    setPrevActiveCards(
      1 === Number(swiperCards && swiperCards?.activeIndex + 1)
    );
    setNextActiveCards(
      Number(swiperCards?.slides?.length) ===
        Number(swiperCards && swiperCards?.activeIndex + 3)
    );
  };

  const { getProducts, products } = useProduct();

  let changeComp = 0;

  useEffect(() => {
    if (changeComp === 0) {
      getProducts();
      changeComp++;
    }
  }, []);

  switch (type) {
    case "cards":
      return (
        <div className="slider_container">
          <Swiper
            onSwiper={(s) => setSwiperCards(s)}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            onSlideChange={() => isActiceCards()}
            style={{ padding: "10px" }}
          >
            {products &&
              products.map((product) => {
                return (
                  <SwiperSlide key={product._id}>
                    <Card {...product} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
          {!prevActiveCards && (
            <div
              className="prev"
              onClick={() => swiperCards && swiperCards.slidePrev()}
            >
              <HiArrowLongLeft className="arrow_prev" />
            </div>
          )}
          {!nextActiveCards && (
            <div
              className="next"
              onClick={() => swiperCards && swiperCards.slideNext()}
            >
              <HiArrowLongRight className="arrow_next" />
            </div>
          )}
        </div>
      );

    case "combo":
      return (
        <div className="slider_container">
          <Swiper
            onSwiper={(s) => setSwiperCards(s)}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            onSlideChange={() => isActiceCards()}
            style={{ padding: "10px" }}
          >
            {products &&
              products.map((e) => {
                return (
                  <SwiperSlide key={e._id}>
                    <Card {...e} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
          {!prevActiveCards && (
            <div
              className="prev"
              onClick={() => swiperCards && swiperCards.slidePrev()}
            >
              <HiArrowLongLeft className="arrow_prev" />
            </div>
          )}
          {!nextActiveCards && (
            <div
              className="next"
              onClick={() => swiperCards && swiperCards.slideNext()}
            >
              <HiArrowLongRight className="arrow_next" />
            </div>
          )}
        </div>
      );

    default:
      return (
        <div className="slider_container">
          <Swiper
            onSwiper={(s) => setSwiper(s)}
            className="mySwiper"
            onSlideChange={() => isActice()}
          >
            <SwiperSlide>
              <img src="./banner.png" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./banner.png" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./banner.png" alt="banner" />
            </SwiperSlide>
          </Swiper>
          <div className="prev" onClick={() => swiper && swiper.slidePrev()}>
            <HiArrowLongLeft
              style={prevActive ? { color: "#E2E1E1" } : {}}
              className="arrow_prev"
            />
          </div>
          <div className="next" onClick={() => swiper && swiper.slideNext()}>
            <HiArrowLongRight
              style={nextActive ? { color: "#E2E1E1" } : {}}
              className="arrow_next"
            />
          </div>
          <div className="more">
            <span>Подробнее</span>
            <img src="./path222.png" alt="path" />
          </div>
        </div>
      );
  }
};
