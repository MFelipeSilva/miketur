import { PrimaryButton } from "../../components/Button";

import { IconVersus, IconCheck, IconClose } from "../../components/Icons";

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
          <h3>Voo de um dia para o outro – São Paulo para Tóquio:</h3>
          <img src={price_comparison_01} alt="Viagem com preço alto" />
          <h3>Com o SPB3:</h3>
          <img src={price_comparison_02} alt="Viagem com preço baixo" />
        </div>
        <div className={styles.cards_container}>
          <div className={styles.card_advantages}>
            <h3>Viajar sozinho</h3>
            <ul>
              <li>
                <IconClose />
                <p>Emite passagem por um valor muito mais caro;</p>
              </li>
              <li>
                <IconClose />
                <p>
                  Perde muito tempo tentando encontrar passagens com técnicas
                  mirabolantes e vendo dezenas de sites diferentes;
                </p>
              </li>
              <li>
                <IconClose />
                <p> Tem que cuidar de todos os detalhes da viagem;</p>
              </li>
            </ul>
          </div>
          <IconVersus />
          <div className={styles.card_advantages}>
            <h3>Viajar com o Miketur</h3>
            <ul>
              <li>
                <IconCheck />
                <p>Viagens com até 30% de descontos em qualquer classe;</p>
              </li>
              <li>
                <IconCheck />
                <p>
                  Recebe na hora as melhores oportunidades sem nenhum esforço;
                </p>
              </li>
              <li>
                <IconCheck />
                <p>
                  Não precisa se preocupar com emissão, cartão de embarque,
                  informações ou check-in;
                </p>
              </li>
            </ul>
          </div>
        </div>
        <PrimaryButton>Fale conosco</PrimaryButton>
      </div>
    </section>
  );
}

export default Advantages;
