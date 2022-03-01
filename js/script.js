
// This function test whether two arrays are the same in terms of length and content.

function arrayCompare(array1, array2) {
  if (Array.isArray(array1) === false || Array.isArray(array1) === false || array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

function heightInFeet(heightInInches) {
  return {
    feet: Math.floor(heightInInches / 12),
    inches: heightInInches % 12
  };
}

const pokemonRepository = (function() {

  const pokemonList = [];
  const keyTemplate = ["name", "category", "height", "weight", "type", "weakness", "stats"];

/* The JSON methods are in the function to make sure it return a completely
new list of completely new objects of completely new... etc. This way the
received copy can't be used to modify the original pokemonList. */

  function getAll() {
     return JSON.parse(JSON.stringify(pokemonList));
  }

  function addToList(pokemon) {
    if (typeof pokemon === 'object') {
      if (arrayCompare(keyTemplate, Object.keys(pokemon)) === true) {
        pokemonList.push(pokemon);
      }
      else {
        console.log(pokemon.name === undefined ?
          'Item is not a proper object or lacks a name key.'
          : pokemon.name + ' is not a properly formated pokemon.' );
        }
      }
      else console.log('Item is not an object.');
    }

    function checkName(pokemon) {return pokemon.name === this.toString();}

    function getByName(name) {
      return JSON.parse(JSON.stringify(pokemonList.filter(checkName, name)));
}

return {
  getAll: getAll,
  getByName: getByName,
  add: addToList
};
})();

// Adding some raw data to the repository so we have something to work with.

pokemonRepository.add(
  {
    name: 'Bulbasaur',
    category: 'Seed',
    height: 28,
    weight: 15.2,
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
    stats: {
      hp: 3,
      attack: 3,
      defense: 3,
      specialAttack: 4,
      specialDefense: 4,
      speed: 3
    }
  }
);

pokemonRepository.add(
  {
    name: 'Ivysaur',
    category: 'Seed',
    height: 39,
    weight: 28.7,
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
    stats: {
      hp: 4,
      attack: 4,
      defense: 4,
      specialAttack: 5,
      specialDefense: 5,
      speed: 4
    }
  }
);

pokemonRepository.add(
  {
    name: 'Venusaur',
    category: 'Seed',
    height: 79,
    weight: 220.5,
    type: ['Grass', 'Poison'],
    weakness: ['Fire', 'Psychic', 'Flying', 'Ice'],
    stats: {
      hp: 5,
      attack: 5,
      defense: 5,
      specialAttack: 6,
      specialDefense: 6,
      speed: 5
    }
  }
);

pokemonRepository.add(
  {
    name: 'Charmander',
    category: 'Lizard',
    height: 24,
    weight: 18.7,
    type: ['Fire'],
    weakness: ['Water', 'Ground', 'Rock'],
    stats: {
      hp: 3,
      attack: 4,
      defense: 3,
      specialAttack: 4,
      specialDefense: 3,
      speed: 4
    }
  }
);

// Html output section

/* This function assembles a big template literal consisting of first the name
of the Pokemon, second its height, and third a comment if it is bigger than
70''. Last the template is enclosed in <li> tags and written into index.html. */

function documentWrite(pokemon) {
  document.write( `<li class="pokemon-list__item">
  ${pokemon.name}
  (height: ${ heightInFeet( pokemon.height ).feet }'
  ${ heightInFeet( pokemon.height ).inches }'')
  ${(pokemon.height > 70 ? '- Wow, that\'s big!' : '')}
  </li>` );
}

pokemonRepository.getAll().forEach(documentWrite);

documentWrite(pokemonRepository.getByName('Ivysaur')[0]);
