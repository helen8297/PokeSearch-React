import React, { useState } from "react";
import css from "./App.module.css";
import SearchBar from "./SearchBar";
import PokemonDisplay from "./PokemonDisplay";
import Autocomplete from "./Autocomplete";
import HeaderImage from "./header";
import Placeholder from "./placeholder";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
    //setResults("");
  }
  function handleSelect(option) {
    setSearchTerm(option);
  }
  function chosenPokeClick() {
    setResults("");
    fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("this is the logged data from fetch" + data);
        setResults(data[0]);
      });
  }
  return (
    <div className={css.app}>
      <header className={css.header}>
        <HeaderImage />
      </header>

      <div className={css.search}>
        <SearchBar
          handleChange={handleChange}
          value={searchTerm}
          chosenPokeClick={chosenPokeClick}
        />
        <Autocomplete searchTerm={searchTerm} handleSelect={handleSelect} />
      </div>

      <div className={css.pokemondisplay}>
        {results ? <PokemonDisplay results={results} /> : <Placeholder />}
      </div>
    </div>
  );
}
export default App;
