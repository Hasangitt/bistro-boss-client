import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <div>
            <SectionTitle
            subHeading={'From 11:00am to 10:00pm'}
            heading={'ORDER ONLINE'}
            >
            </SectionTitle>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h3 className="md:text-4xl text-white uppercase -mt-16 text-center">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h3 className="md:text-4xl text-white uppercase -mt-16 text-center">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h3 className="md:text-4xl text-white uppercase -mt-16 text-center">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h3 className="md:text-4xl text-white uppercase -mt-16 text-center">
            Dessert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h3 className="md:text-4xl text-white uppercase -mt-16 text-center">
            Vegetable
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
