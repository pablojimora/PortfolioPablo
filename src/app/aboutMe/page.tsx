import Image from "next/image";
import styles from "./about.module.css";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Sobre mí</h2>

      <div className={styles.content}>
        {/* Imagen a la izquierda */}
        <div className={styles.imageContainer}>
          <Image
            src="/imagenPortafolioPrueba.jpg"
            alt="Pablo Jiménez Mora"
            width={250}
            height={250}
            className={styles.photo}
            priority
          />
        </div>

        {/* Texto a la derecha */}
        <div className={styles.text}>
          <p>
            Soy <span className={styles.highlight}>Pablo Jiménez Mora</span>,
            Ingeniero Biomédico apasionado por la tecnología y el desarrollo
            web. Me motiva crear soluciones que unan la medicina con la
            programación, utilizando herramientas modernas para generar impacto
            real.
          </p>

          <p>
            Durante mi experiencia profesional he trabajado en proyectos de
            análisis de datos, automatización de procesos y desarrollo de
            interfaces intuitivas. Actualmente, estoy profundizando en{" "}
            <span className={styles.highlight}>desarrollo full-stack</span> con
            tecnologías como <strong>React, Next.js, Node.js y MongoDB</strong>.
          </p>

          <p>
            Mi objetivo es seguir creciendo como desarrollador, contribuyendo a
            proyectos que impulsen la innovación tecnológica y el bienestar
            humano.
          </p>
        </div>
      </div>
    </section>
  );
}
