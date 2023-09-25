import { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import { json } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Hero = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://shopez-53fe0-default-rtdb.europe-west1.firebasedatabase.app/HomePage/HomeSlider.json"
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      {data ? (
        <section>
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}
          >
            {data.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={classes.frame}
                style={{
                  background: `url(${slide.img.src}), linear-gradient(to right, #f2fff7, #c3f4ff)`,
                  backgroundSize: `40%, cover`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `90% 100%`,
                }}
              >
                <div className={`container ${classes.container}`}>
                  <div className={classes.main}>
                    <h1 className={classes.title}>{slide.title}</h1>
                    <button>Find Out More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Hero;
