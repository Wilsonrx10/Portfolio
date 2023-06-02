import styles from "../../assets/about/index.module.css";

const AboutHome = () => {
  return (
    <div className={styles.principal}>
      <div className={styles.content}>
        <section className={styles.about}>
          <h2>Sobre Mim</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            dolorem deserunt. Consectetur fugit non ab eligendi aspernatur aut
            animi amet magni nihil culpa qui, officia vel nesciunt voluptatum
            porro quas.
          </p>
        </section>

        <section className={styles.skill}>
          <h2>Minhas Habilidades</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            dolorem deserunt. Consectetur fugit non ab eligendi aspernatur aut
            animi amet magni nihil culpa qui, officia vel nesciunt voluptatum
            porro quas.
          </p>
        </section>

        <section className={styles.skill}>
          <h2>Experiência Profissional</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            dolorem deserunt. Consectetur fugit non ab eligendi aspernatur aut
            animi amet magni nihil culpa qui, officia vel nesciunt voluptatum
            porro quas.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutHome;
