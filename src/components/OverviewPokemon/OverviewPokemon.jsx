import "./OverviewPokemon.css";

const OverviewPokemon = ({ id, name, sprite }) => {
  return (
    <article className="ov-pokemon">
      <img
        className="ov-pokemon__sprite"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        alt={`${name} sprite`}
      />
      <p className="ov-pokemon__id">#{id}</p>
      <h4 className="ov-pokemon__name ov-pokemon__name--active">{name}</h4>
    </article>
  );
};

export { OverviewPokemon };
