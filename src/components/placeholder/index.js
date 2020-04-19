import React from "react";
import css from "./placeholder.module.css";

function Placeholder() {
  return (
    <div className={css.div}>
      <h2>Search for your Pokemon and click the Pokeball!</h2>
      <img
        src="http://pixelartmaker.com/art/5f9972379a3aee8.png"
        alt="red arrow pointing left"
        className={css.arrow}
      />
    </div>
  );
}

export default Placeholder;
