import { useState, useEffect } from "react";

import { Link } from "react-scroll";

import logo from "../../assets/logo.webp";

import { IconClosed, IconMenu } from "../Icons";

import { PrimaryButton } from "../Button";

import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    toggleScroll();
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a
          href="/"
          className={styles.logo}
          alt="Logo do site"
          title="Back to home"
        >
          <img src={logo} />
        </a>
        <ul
          className={`${styles.links_container} ${isOpen ? styles.active : ""}`}
        >
          <li>
            <Link
              to="quem-somos"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href="quem-somos"
              onClick={() => setIsOpen(false)}
            >
              Quem somos
            </Link>
          </li>
          <li>
            <Link
              to="clientes"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              href="clientes"
              onClick={() => setIsOpen(false)}
            >
              Clientes
            </Link>
          </li>
          <li>
            <Link
              to="vantagens"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href="vantagens"
              onClick={() => setIsOpen(false)}
            >
              Vantagens
            </Link>
          </li>
          <li>
            <Link
              to="confiança"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href="confiança"
              onClick={() => setIsOpen(false)}
            >
              Confiança
            </Link>
          </li>
          <PrimaryButton>Promoções</PrimaryButton>
        </ul>
        <PrimaryButton>Promoções</PrimaryButton>
        {!isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconClosed />
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <IconMenu />
          </button>
        )}
      </nav>
    </header>
  );
};
