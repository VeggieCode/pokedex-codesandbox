import { getPokemon } from "../../services/Pokemon";
test("fetching pokemon", () => {
  const pokemon = getPokemon();
  console.log(pokemon);
  expect(pokemon).toBe([]);
});
