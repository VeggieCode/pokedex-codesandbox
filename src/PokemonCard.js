export default function PokemonCard() {
  //Block -Eleento- Modificador
  return (
    <div className="image-card">
      <div className="pokemon-sprite-container">
        <img
          className="pokemon-sprite-container__pokemon-sprite"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        />
      </div>
      <div className="preevolution-sprite-container">
        <img
          className="preevolution-sprite-container__preevolution-sprite"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        />
        <p className="preevolution-sprite-container__preevolution-name">
          Pokemon
        </p>
      </div>
    </div>
  );
}
