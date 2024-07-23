import React from "react";
import FlipCard from "../components/flipCard/flipCard";
import CarouselComponent from "../components/carousel/carousel";
import styles from "../styles/home.module.scss";
import "@fortawesome/fontawesome-free/css/all.css";

const gamesAvailables = [
  {
    id: 1,
    name: "Crazy Space Ships",
    images: [
      "img1.png",
      "img2.png",
      "img3.png",
      "img4.png",
      "img5.png",
      "img6.png",
    ],
    description: "Emergencia....",
  },
];
function HomePage() {
  return (
    <div>
      <div className={styles.marca}>
        <img
          src={require("@images/logo1.png")}
          className={styles.logo}
          alt=""
        />
      </div>
      <div className={styles.line} />
      <div className={styles.sectionGame}>
        <div className={styles.containerCarousel}>
          <CarouselComponent images={gamesAvailables[0].images} />
        </div>
        <div className={styles.containerDescription}>
          <p className={styles.text}>
            ¡Emergencia espacial! La nave de capitán Toki y su intrépida
            tripulación ha sufrido un desperfecto catastrófico, dejándolos sin
            control.
            <br />
            <br /> Con el destino colgando de un hilo, su única esperanza es
            aprovechar la gravedad de los planetas cercanos para maniobrar y
            regresar a salvo a casa.
            <br />
            <br /> ¡Prepárate para una aventura épica mientras desafiamos las
            leyes del cosmos y luchamos contra el tiempo en esta emocionante
            odisea espacial!
          </p>
          <div className={styles.sectionButton}>
            <p className={styles.formalText}>
              Disponible en: <i className="fab fa-google-play"></i>
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.Argamunin.com.unity.template.mobile2D"
              className={styles.iconButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.buttonTab}>Jugar</button>
            </a>
          </div>
        </div>
      </div>
      <section id="project-section">
        <p className={styles.subtitulos}> Nuestros proyectos </p>
        <div className={styles.line} />
        <div className={styles.sectionProject}>
          <div className={styles.containerCard}>
            <FlipCard
              frontContent={require("@images/img7.png")}
              backContent={
                <p>
                  ¡Prepárate para una aventura épica mientras desafiamos las
                  leyes del cosmos y luchamos contra el tiempo en esta
                  emocionante odisea espacial!
                </p>
              }
            />
          </div>
          <div className={styles.containerCard}>
            <FlipCard
              frontContent={require("@images/img7.png")}
              backContent={
                <p>
                  ¡Prepárate para una aventura épica mientras desafiamos las
                  leyes del cosmos y luchamos contra el tiempo en esta
                  emocionante odisea espacial!
                </p>
              }
            />
          </div>
          <div className={styles.containerCard}>
            <FlipCard
              frontContent={require("@images/img7.png")}
              backContent={
                <p>
                  ¡Prepárate para una aventura épica mientras desafiamos las
                  leyes del cosmos y luchamos contra el tiempo en esta
                  emocionante odisea espacial!
                </p>
              }
            />
          </div>
          <div className={styles.containerCard}>
            <FlipCard
              frontContent={require("@images/img7.png")}
              backContent={
                <p>
                  ¡Prepárate para una aventura épica mientras desafiamos las
                  leyes del cosmos y luchamos contra el tiempo en esta
                  emocionante odisea espacial!
                </p>
              }
            />
          </div>
        </div>
      </section>
      <section id="team-section">
        <p className={styles.subtitulos}> Equipo </p>
        <div className={styles.line} />
        <div className={styles.sectionTeam}>
          <div className={styles.containerMember}>
            <img
              src={require("@images/team1.jpg")}
              className={styles.profile}
              alt=""
            />
            <div className={styles.name}>Lautaro De Benedetti</div>
            <p>Desarrollador</p>
            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/lautarodebenedetti/"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/lautarodebenedetti"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className={styles.containerMember}>
            <img
              src={require("@images/team1.jpg")}
              className={styles.profile}
              alt=""
            />
            <div className={styles.name}>Lautaro De Benedetti</div>
            <p>Desarrollador</p>
            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/lautarodebenedetti/"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/lautarodebenedetti"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className={styles.containerMember}>
            <img
              src={require("@images/team1.jpg")}
              className={styles.profile}
              alt=""
            />
            <div className={styles.name}>Lautaro De Benedetti</div>
            <p>Desarrollador</p>
            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/lautarodebenedetti/"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/lautarodebenedetti"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
