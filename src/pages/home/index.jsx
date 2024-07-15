import { PrimaryButton } from "../../components/Button";

import { IconArrow } from "../../components/Icons";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.section_container}>
      <div>
        <h1>
          Descubra o Mundo com a <span>MIKETUR</span>: Onde Cada ​Roteiro é Uma
          História Inesquecível!
        </h1>
        <IconArrow />
        <PrimaryButton>Entre em contato</PrimaryButton>
      </div>
    </section>
  );
}

export default Home;
