import { useEffect, useState } from "react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductGallery = ({ images }) => {
  // console.log(images);
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // useEffect(() => {
  // console.log(thumbsSwiper);
  // }, [thumbsSwiper]);

  // const onSwiper = (swiper) => setThumbsSwiper(swiper);
  return (
    <>
      {/* {images && images.length && (
        <>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{swiper : thumbsSwiper}}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={onSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )} */}
      <img src={images[0]} alt="" />
    </>
  );
};

export default ProductGallery;
