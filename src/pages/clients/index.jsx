import Slider from "react-slick";

import { clients } from "../../utils/clients";

import { Stars } from "../../components/Stars";

import styles from "./Clients.module.css";

function Clients() {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    initialSlides: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <h2>Opiniões dos nossos clientes:</h2>
        <Slider {...settings}>
          {clients.map((client) => (
            <div className={styles.clients_card} key={client.id}>
              <div>
                <img src={client.image} alt="avatar dos clientes" />
                <h3>{client.name}</h3>
                <Stars />
              </div>
              <p>{client.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
