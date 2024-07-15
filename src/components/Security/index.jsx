import { PrimaryButton } from "../Button";

import cadastur_image from "../../assets/cadastur-image.webp";

import styles from "./Secutiry.module.css";

export const Secutiry = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text_container}>
          <h3>Uma viagem garantida 100% segura!</h3>
          <p>
            A Miketur é uma empresa séria e confiável! Temos nosso
            credenciamento na CADASTUR, confira:
          </p>
          <PrimaryButton>Fale conosco</PrimaryButton>
        </div>
        <img src={cadastur_image} alt="" />
      </div>
    </div>
  );
};
