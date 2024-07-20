// images.js
const images = require.context("../../../images/", false, /\.(png|jpe?g|svg)$/);

export const getImage = (imageName) => {
  try {
    return images(`./${imageName}`);
  } catch (err) {
    return null;
  }
};
