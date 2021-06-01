const { fetchData } = require("./getter.js");

class pokemonAPI {
  constructor() {

  }
  async getPokemonByNameId (input) {
    try {
      if (!input) throw new Error('Invalid Pokemon Name or Pokemon ID')
      return fetchData(input, 'pokemon');
    } catch (error) {
      throw error
    }
  };
}

module.exports = pokemonAPI;
