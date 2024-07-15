import { IconWhatsapp } from "../Icons";

import styles from "./Button.module.css";

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <a
      href="https://wa.me/5517981606207"
      target="_blank"
    >
      <button onClick={onClick} className={styles.primary_button}>
        <IconWhatsapp />
        {children}
      </button>
    </a>
  );
};
