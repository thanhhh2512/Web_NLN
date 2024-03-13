import './Slide.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Slide(){
  return (
    <div className="swiper">
      <div className="swiper-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="swiper-image"
              src={process.env.PUBLIC_URL + "/images/home/body.png"}
              alt=""
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-image"
              src={process.env.PUBLIC_URL + "/images/home/body.png"}
              alt=""
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-image"
              src={process.env.PUBLIC_URL + "/images/home/body.png"}
              alt=""
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="word-container">
        <h1 className="article">Hạt Giống</h1>
        <p>Hạt giống thủy canh</p>
        <button>Xem ngay</button>
      </div>
    </div>
  );
}