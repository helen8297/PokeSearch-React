import React from "react";
import css from "./header.module.css";

function HeaderImage() {
  return (
    <img
      src="http://pixelartmaker.com/art/d98dde45d242734.png"
      alt="pokemonlogo"
      className={css.logo}
    />
  );
}

export default HeaderImage;
