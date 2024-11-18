import React from 'react';
import Link from 'next/link';
import styles from "./styles.module.css";

const LateralMenu: React.FC = () => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.menu}>
                <ul className={styles.menuList}>
                    <li className={styles.menuItem}>
                        <h3 className={styles.titleMenu}>Dashboard</h3>
                        <div className={styles.divItem}>
                            <Link className={styles.menuLink} href="/dashboard/panel" >Panel</Link>
                        </div>
                        <div className={styles.gradientDivisor}></div>
                    </li>
                    <li className={styles.menuItem}>
                        <h3 className={styles.titleMenu}>Servicios</h3>
                        <div className={styles.divItem}>
                            <Link className={styles.menuLink} href="/brand" >Registro de Marca</Link>
                        </div>
                        <div className={styles.gradientDivisor}></div>
                        <div className={styles.divItem}>
                            <Link className={styles.menuLink} href="/brand" >Estudio de Marca</Link>
                        </div>
                        <div className={styles.gradientDivisor}></div>
                        <div className={styles.divItem}>
                            <Link className={styles.menuLink} href="/brand" >Otros servicios</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LateralMenu;
