import React from 'react';
import styles from './menu.module.css';

const Menu = (props) => {
  return (
    <ul className={styles.container}>
      <li className={styles.box}>
        <button className={styles.button}>
          <i className="fas fa-home"></i>
        </button>
        <p>홈</p>
      </li>
      <li className={styles.box}>
        <button className={styles.button}>
          <i className="fas fa-compass"></i>
        </button>
        <p>탐색</p>
      </li>
      <li className={styles.box}>
        <button className={styles.button}>
          <i className="fas fa-folder-open"></i>
        </button>
        <p>구독</p>
      </li>
      <li className={styles.box}>
        <button className={styles.button}>
          <i className="fas fa-folder-minus"></i>
        </button>
        <p>보관함</p>
      </li>
    </ul>
  );
};

export default Menu;
