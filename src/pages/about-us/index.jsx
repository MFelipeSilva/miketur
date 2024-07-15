import styles from "./AboutUs.module.css";

import suitcase from "../../assets/suitcase-image.webp";

function AboutUs() {
  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <img src={suitcase} alt="" />
        <div className={styles.text_container}>
          <h2>Quem somos?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas ullamcorper
            scelerisque feugiat sit justo. Ultricies ac eget neque tellus
            pellentesque ipsum consequat. Convallis bibendum turpis dolor
            elementum eu dolor a ornare. Lectus venenatis egestas vitae sed
            posuere.
            <br />
            Interdum egestas arcu nibh nunc. Tincidunt velit viverra ut sed
            feugiat est. Arcu fringilla volutpat semper neque praesent quisque
            sed malesuada sem. Venenatis tristique placerat quis mauris ut
            senectus at rutrum malesuada velit sem.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
