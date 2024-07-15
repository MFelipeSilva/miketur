import styles from "./Clients.module.css";

import cloud_01 from "../../assets/cloud-01.webp";
import cloud_02 from "../../assets/cloud-02.webp";

function Clients() {
  return (
    <section className={styles.section_container}>
      <img src={cloud_01} className={styles.cloud_01} alt="" />
      <div className={styles.content}>
        <h2>Opiniões dos nossos clientes:</h2>
        <div className={styles.card_container}>
          <div className={styles.clients_card} />
          <div className={styles.clients_card} />
          <div className={styles.clients_card} />
        </div>
      </div>
      <img src={cloud_02} className={styles.cloud_02} alt="" />
    </section>
  );
}

export default Clients;
