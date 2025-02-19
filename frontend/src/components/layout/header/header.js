/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src={require("../../../images/logo-v5.gif")}
          width={"50px"}
          height={"50px"}
          className={styles.logo}
          alt=""
        />
      </div>
      <div className={styles.containerTabs}>
        <a href="#">
          <button className={styles.buttonTab}>Inicio</button>
        </a>
        <a href="#project-section">
          <button className={styles.buttonTab}>Juegos</button>
        </a>
        <a href="#team-section">
          <button className={styles.buttonTab}>Equipo</button>
        </a>
      </div>
    </div>
  );
}
