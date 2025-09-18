import React from "react";
import FlipCard from "../components/flipCard/flipCard.jsx";
import CarouselComponent from "../components/carousel/carousel.jsx";
import styles from "../styles/home.module.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import logo1 from "@images/logo1.png";
import img7 from "@images/img7.png";
import mahjong from "@images/mahjong.png";
import chromaticChaos from "@images/chromaticChaos.png";
import logoV5 from "@images/logo-v5.gif";
import team1 from "@images/team1.jpg";
import team2 from "@images/team2.jpeg";
import team3 from "@images/team3.PNG";

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
      <div className={styles.brand}>
        <img src={logo1} className={styles.logo} alt="" />
      </div>
      <div className={styles.line} />
      <div className={styles.gameSection}>
        <div className={styles.carouselContainer}>
          <CarouselComponent images={gamesAvailables[0].images} />
        </div>
        <div className={styles.descriptionContainer}>
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
          <div className={styles.buttonSection}>
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
        <p className={styles.subtitle}> Nuestros proyectos </p>
        <div className={styles.line} />
        <div className={styles.projectSection}>
          <div className={styles.cardContainer}>
            <FlipCard
              frontContent={img7}
              backContent={
                <div>
                  <p>
                    ¡Prepárate para una aventura épica mientras desafiamos las
                    leyes del cosmos y luchamos contra el tiempo en esta
                    emocionante odisea espacial!
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
              }
            />
          </div>
          {/* <div className={styles.cardContainer}>
            <FlipCard
              frontContent={mahjong}
              backContent={
                <div>
                  <p>
                    ¡Descubre la magia del Mahjong como nunca antes! Te
                    presentamos nuestra versión reimaginada del clásico juego
                    con fichas adornadas con imágenes representativas de
                    Argentina.
                  </p>
                  <a
                    href="https://play.google.com/store/apps/developer?id=argamunin"
                    className={styles.iconButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.buttonTabLarge} disabled>
                      Próximamente
                    </button>
                  </a>
                </div>
              }
            />
          </div> */}
          <div className={styles.cardContainer}>
            <FlipCard
              frontContent={chromaticChaos}
              backContent={
                <div>
                  <p>
                    ¡El equilibrio del color está en tus manos! Tras un
                    accidente en los laboratorios Cromáticos, el caos se ha
                    desatado: las esencias de color, contenidas en delicadas
                    burbujas mágicas, flotan fuera de control.
                    <br />
                    ¿Estás listo para restaurar el equilibrio antes de que los
                    colores se mezclen y desaten una catástrofe gris?
                  </p>
                  <a
                    href="https://argamunin.itch.io/chromatic-chaos"
                    className={styles.iconButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.buttonTabLarge}>Jugar</button>
                  </a>
                </div>
              }
            />
          </div>
          <div className={styles.cardContainer}>
            <FlipCard
              frontContent={logoV5}
              backContent={
                <div>
                  <p>
                    ¡Prepárate para más sorpresas! Estamos trabajando en nuevos
                    proyectos. Mantenete atento a nuestras actualizaciones y sé
                    el primero en descubrir las novedades.
                  </p>
                  <a
                    href=" "
                    className={styles.iconButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.buttonTabLarge} disabled>
                      Próximamente
                    </button>
                  </a>
                </div>
              }
            />
          </div>
          <div className={styles.cardContainer}>
            <FlipCard
              frontContent={logoV5}
              backContent={
                <div>
                  <p>
                    ¡Prepárate para más sorpresas! Estamos trabajando en nuevos
                    proyectos. Mantenete atento a nuestras actualizaciones y sé
                    el primero en descubrir las novedades.
                  </p>
                  <a
                    href=" "
                    className={styles.iconButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.buttonTabLarge} disabled>
                      Próximamente
                    </button>
                  </a>
                </div>
              }
            />
          </div>
        </div>
      </section>
      <section id="team-section">
        <p className={styles.subtitle}> Equipo </p>
        <div className={styles.line} />
        <div className={styles.teamSection}>
          <div className={styles.memberContainer}>
            <img src={team1} className={styles.profile} alt="" />
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
          <div className={styles.memberContainer}>
            <img src={team2} className={styles.profile} alt="" />
            <div className={styles.name}>Agustina Mendez</div>
            <p>- - -</p>
            <div className={styles.icons}>
              <a
                href="https://www.linkedin.com/in/agustinabmendez/"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/aguuusbelen"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className={styles.memberContainer}>
            <img src={team3} className={styles.profile} alt="" />
            <div className={styles.name}>Catriel De Benedetti</div>
            <p>Diseñador Gráfico</p>
            <div className={styles.icons}>
              <a
                href="https://ar.linkedin.com/in/catrieldebenedetti"
                className={styles.iconButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/"
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
