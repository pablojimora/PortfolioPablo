import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./landing.module.css";

export default function Home() {
  const techs = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "TailwindCSS",
    "MongoDB",
    "PostgreSQL",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <p className={styles.status}>🟢 Disponible para proyectos</p>

        <h1 className={styles.title}>
          Hola, soy <span className={styles.name}>Pablo Jiménez Mora</span>
        </h1>

        <h2 className={styles.subtitle}>
          Ingeniero Biomédico & Full Stack Developer
        </h2>

        <p className={styles.description}>
          Creo soluciones tecnológicas innovadoras que conectan la medicina con
          la programación. Especializado en desarrollo web full-stack y
          aplicaciones biomédicas.
        </p>
      </div>

      <div className={styles.techSection}>
        <h3 className={styles.techTitle}>Tecnologías</h3>

        <div className={styles.techGrid}>
          {techs.map((tech) => (
            <div key={tech} className={styles.techCard}>
              {tech}
            </div>
          ))}
        </div>
      </div>
        {/* 🔹 Sección de iconos sociales */}
      <div className={styles.socials}>
        <a
          href="https://github.com/pablojimora"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/pablo-jim%C3%A9nez-mora-83500531b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
    </section>
  );
}
