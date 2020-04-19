import React, { useEffect, useState } from "react";
import css from "./Autocomplete.module.css";

function Autocomplete({ searchTerm, handleSelect }) {
  const [options, setOptions] = useState([""]);

  useEffect(
    function () {
      fetch(`http://localhost:5000/pokemon?search=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setOptions(data);
        });
    },
    [searchTerm]
  );

  return (
    <ul>
      {searchTerm &&
        options.map((item) => (
          <li className={css.listItem} onClick={() => handleSelect(item.name)}>
            <img src={item.img_url} alt="pokemon" />
            <div>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Autocomplete;
