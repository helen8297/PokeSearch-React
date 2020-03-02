import React from "react";
import css from "./PokemonDisplay.module.css";

function PokemonDisplay({ results }) {
  return (
    <div className={css.containerdiv}>
      {console.log(results.name)}
      <h1>{results.name}</h1>
      <p className={css.id}>ID:{results.pkdx_id}</p>
      <img src={results.img_url} className={css.pokeimage} alt="pokemon" />
      <p className={css.description}>{results.description}</p>
      <p className={css.types}>Types: {results.types}</p>
    </div>
  );
}

export default PokemonDisplay;
