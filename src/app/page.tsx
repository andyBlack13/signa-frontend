import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            ¡Bienvenido! Este aplicativo te ayudará a administrar marcas.
          </li>
          <li>Explora el menu que tenemos para ti. (Panel y Registro de marcas)</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/dashboard/panel"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            <h4 style={{color: "black"}}>Para iniciar da clic AQUI</h4>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Andrea Camargo - Desarrolladora Software 2024</p>
      </footer>
    </div>
  );
}
