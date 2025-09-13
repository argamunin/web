// images.js
import chromaticChaos from "../../../images/chromaticChaos.png";
import img1 from "../../../images/img1.png";
import img2 from "../../../images/img2.png";
import img3 from "../../../images/img3.png";
import img4 from "../../../images/img4.png";
import img5 from "../../../images/img5.png";
import img6 from "../../../images/img6.png";
import img7 from "../../../images/img7.png";
import logoV3 from "../../../images/logo-v3.gif";
import logoV4 from "../../../images/logo-v4.gif";
import logoV5 from "../../../images/logo-v5.gif";
import logo1 from "../../../images/logo1.png";
import mahjong from "../../../images/mahjong.png";
import profileicon from "../../../images/profileicon.png";
import team1 from "../../../images/team1.jpg";
import team2 from "../../../images/team2.jpeg";
import team3 from "../../../images/team3.PNG";

const images = {
  "chromaticChaos.png": chromaticChaos,
  "img1.png": img1,
  "img2.png": img2,
  "img3.png": img3,
  "img4.png": img4,
  "img5.png": img5,
  "img6.png": img6,
  "img7.png": img7,
  "logo-v3.gif": logoV3,
  "logo-v4.gif": logoV4,
  "logo-v5.gif": logoV5,
  "logo1.png": logo1,
  "mahjong.png": mahjong,
  "profileicon.png": profileicon,
  "team1.jpg": team1,
  "team2.jpeg": team2,
  "team3.PNG": team3,
};

export const getImage = (imageName) => {
  try {
    return images[imageName] || null;
  } catch (err) {
    return null;
  }
};
