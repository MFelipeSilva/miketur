import { IconEmail, IconInstagram, IconPhone } from "../Icons";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3>Contato:</h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/miketur_/">
              <IconInstagram />
              Miketur_
            </a>
          </li>
          <li>
            <a href="tel:+5517981606207">
              <IconPhone />
              (17) 981606207
            </a>
          </li>
          <li>
            <a href="mailto:mi​ketur@gmail.com">
              <IconEmail />
              mi​ketur@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <p>
        Todos os direitos reservados por Miketur. <span>MIKETUR © 2024</span>
      </p>
    </footer>
  );
};
