import cloud_01 from "../../assets/cloud-01.webp";
import cloud_02 from "../../assets/cloud-02.webp";

import { clients } from "../../utils/clients";

import { Stars } from "../../components/Stars";

import styles from "./Clients.module.css";

function Clients() {
  return (
    <section className={styles.section_container}>
      <img src={cloud_01} className={styles.cloud_01} alt="Nuvem 1" />
      <div className={styles.content}>
        <h2>Opiniões dos nossos clientes:</h2>
        <div className={styles.card_container}>
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
        </div>
      </div>
      <img src={cloud_02} className={styles.cloud_02} alt="Nuvem 2" />
    </section>
  );
}

export default Clients;
