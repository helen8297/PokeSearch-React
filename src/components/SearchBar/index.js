import React from "react";
import css from "./SearchBar.module.css";

function SearchBar({ handleChange, value, chosenPokeClick }) {
  return (
    <div className={css.searchbar}>
      <input
        className={css.input}
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Search-a-poke"
      ></input>

      <img
        src="http://pngimg.com/uploads/pokeball/pokeball_PNG24.png"
        className={css.pokeball}
        alt="pokeball"
        onClick={chosenPokeClick}
      />
    </div>
  );
}

export default SearchBar;
