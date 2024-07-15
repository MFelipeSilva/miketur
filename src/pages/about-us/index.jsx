import styles from "./AboutUs.module.css";

import owners_image from "../../assets/owners-miketur.webp";

function AboutUs() {
  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <img
          src={owners_image}
          alt="Donos da empresa Miketur Kaio e Lorena"
          title="Kaio e Lorena"
        />
        <div className={styles.text_container}>
          <h2>Quem somos?</h2>
          <p>
            Somos Kaio e Lorena, os idealizadores da MikeTur. Nossa paixão por
            viajar nos uniu e nos inspirou a criar uma agência de viagens
            dedicada a transformar sonhos em realidade. Combinamos nossa
            experiência e entusiasmo para oferecer pacotes de viagens nacionais
            e internacionais que atendem a todos os perfis de viajantes, seja
            para férias ou viagens a trabalho. <br /> Com anos de experiência no
            setor e uma especialização em emissões internacionais, acreditamos
            que cada viagem é uma oportunidade única para explorar o mundo,
            vivenciar novas culturas e criar memórias inesquecíveis. Nos
            dedicamos a encontrar os melhores preços para voos, garantir
            estadias confortáveis e cuidar de todos os detalhes, desde o
            planejamento até o check-in. Além disso, estamos sempre disponíveis
            para oferecer suporte e assistência, garantindo que sua viagem seja
            perfeita do início ao fim.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
