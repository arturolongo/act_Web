import React from 'react';
import Head from 'next/head';
import styles from '../public/styles/styles.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monster</title>
      </Head>
      <div className={styles.navbarPlaceholder}></div>
      <header>
        <nav className={styles.navbar}>
          <div className="logo-container">
            <img src="/src/logooriginal.png" alt="Logo de Monster" />
          </div>
          <div className={styles.centerText}>Promociones</div>
          <div className={styles.countryCode}>MX</div>
        </nav>
        <div className={styles.headerImage}>
          <img src="/src/fondonava.jpeg" alt="Imagen rectangular" />
          <h1 className={styles.monsterTitle}>
            MONSTER ENERGY <span className={styles.drinks}>DRINKS</span>
          </h1>
        </div>
      </header>
      {/* Resto del contenido */}
    </div>
  );
}
