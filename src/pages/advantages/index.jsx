import price_comparison_01 from "../../assets/price-comparison-01.webp";
import price_comparison_02 from "../../assets/price-comparison-02.webp";

import styles from "./Advantages.module.css";

function Advantages() {
  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <h2>
          Vantagens de viajar <span>Sozinho</span> X <br /> Vantagens de viajar
          com <span>Miketur</span>
        </h2>
        <div className={styles.price_comparison}>
          <p>Voo de um dia para o outro – São Paulo ao Rio de Janeiro:</p>
          <img src={price_comparison_01} alt="" />
          <p>Com o SPB3:</p>
          <img src={price_comparison_02} alt="" />
        </div>
        <div className={styles.cards_container}>
          <div className={styles.card_advantages}>
            <h3>Viajar sozinho</h3>
            <div>Emite passagem por um valor muito mais caro;</div>
            <div>
              Perde muito tempo tentando encontrar passagens com técnicas
              mirabolantes e vendo dezenas de sites diferentes;
            </div>
            <div>Tem que cuidar de todos os detalhes da viagem;</div>
          </div>
          <div className={styles.card_advantages}>
            <h3>Viajar com o Miketur</h3>
            <div>Viagens com até 30% de descontos em qualquer classe;</div>
            <div>
              Recebe na hora as melhores oportunidades sem nenhum esforço;
            </div>
            <div>
              Não precisa se preocupar com emissão, cartão de embarque,
              informações ou check-in;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
