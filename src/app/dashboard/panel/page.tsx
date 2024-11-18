import Image from "next/image";
import styles from "./styles.module.css";

export default function Panel() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Prueba Técnica</h1>
                <p>Este proyecto fue desarrollado con el propósito de demostrar habilidades en desarrollo full stack para la empresa Signa. Consiste en un aplicativo para la gestión de marcas, que permite realizar operaciones como crear, leer, editar y eliminar marcas. Cabe mencionar que el proyecto no incluye persistencia de datos, por lo que la información registrada podría perderse al cerrar la aplicación. Para el almacenamiento temporal, se utiliza un arreglo en memoria, lo que permite visualizar y gestionar los cambios realizados durante la sesión de uso.</p>
            </header>

            <main className={styles.main}>
                <section className={styles.section}>
                    <h2>Enlaces</h2>
                    <ul className={styles.linksList}>
                        <li>
                            <a
                                href="https://github.com/tu-usuario/repo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <Image
                                    src="/logos/github.png"
                                    alt="GitHub"
                                    width={24}
                                    height={24}
                                />
                                Repositorio en GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://signa-backend.onrender.com/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <Image
                                    src="/logos/swagger.png"
                                    alt="FastAPI"
                                    width={24}
                                    height={24}
                                />
                                Documentación Endpoint CRUD - Swagger
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://youtu.be/tu-video"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <Image
                                    src="/logos/loom.png"
                                    alt="YouTube"
                                    width={24}
                                    height={24}
                                />
                                Video de la prueba
                            </a>
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Tecnologías Utilizadas</h2>
                    <ul className={styles.techList}>
                        <li>Next.js - React</li>
                        <li>FastAPI - Python</li>
                        <li>TypeScript</li>
                        <li>CSS - HTML</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Librerías y Herramientas</h2>
                    <ul className={styles.techList}>
                        <li>Axios</li>
                        <li>Uvicorn (Servidor en backend)</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>Cómo visualizar la API</h2>
                    <p>
                        Puedes explorar la documentación interactiva de FastAPI en:
                    </p>
                    <ul className={styles.linksList}>
                        <li>
                            <a
                                href="https://signa-backend.onrender.com/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Swagger UI (/docs)
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://signa-backend.onrender.com/redoc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Redoc (/redoc)
                            </a>
                        </li>
                    </ul>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>Desarrollado por <strong>Andrea Camargo Ruiz - Desarrolladora Full Stack Junior</strong> | 2024</p>
            </footer>
        </div>
    );
}