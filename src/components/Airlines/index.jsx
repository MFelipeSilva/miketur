import Slider from "react-slick";

import { airlines } from "../../utils/airlines";

import styles from "./Airlines.module.css";

export const Airlines = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {airlines.map((airline) => (
          <figure key={airline.id} className={styles.logo_container}>
            <img src={airline.image} alt="airline logo" />
          </figure>
        ))}
      </Slider>
    </div>
  );
};
