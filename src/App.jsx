import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { OverviewPokemon } from "./components/OverviewPokemon/OverviewPokemon";
import "./styles.css";
import SpriteCard from "./components/SpriteCard/SpriteCard";
import InfoCard from "./components/InfoCard/InfoCard";
const URI_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

const initialPokemon = [
  {
    id: 1,
    name: "bulbasaur",
    sprite: ""
  },
  {
    id: 2,
    name: "ivisaur",
    sprite: ""
  },
  {
    id: 3,
    name: "venusaur",
    sprite: ""
  },
  {
    id: 4,
    name: "squirtle",
    sprite: ""
  }
];

export default function App() {
  const [pokemon, setPokemon] = useState(initialPokemon);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=149")
      .then((result) => result.json())
      .then(({ results }) => {
        console.log(results);
        results.forEach((pokemon) => {});
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Router>
        <h1>Pokedex</h1>
        <article className="pokedex">
          {pokemon.map((pokemon) => (
            <OverviewPokemon id={pokemon.id} name={pokemon.name} />
          ))}
        </article>
        <SpriteCard />
        <InfoCard />
      </Router>
    </div>
  );
}
