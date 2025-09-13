/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { getImage } from "./images";

function ImageComponent({ imageName }) {
  const imagen = getImage(imageName);

  return (
    <div>
      {imagen ? (
        <img src={imagen} alt="Dynamic Image" />
      ) : (
        <p>Image not found</p>
      )}
    </div>
  );
}

export default ImageComponent;
