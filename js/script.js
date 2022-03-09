
/* This function tests whether two arrays are the same in terms
of length and content. */

function arrayCompare(array1, array2) {
  if (Array.isArray(array1) === false ||
  Array.isArray(array2) === false ||
  array1.length !== array2.length) {
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

// The IIFE containing the pokemon list and associated methods.

const pokemonRepository = (function() {

  const pokemonList = [];
  const keyTemplate =
  ["name", "category", "height", "weight", "type", "weakness", "stats"];

  /* The JSON methods are in the function to make sure it returns a completely
  new list of completely new objects of completely new... etc. This way the
  received copy can't be used to modify the original pokemonList. */

  function getAll() {
    return JSON.parse(JSON.stringify(pokemonList));
  }

  function add(pokemon) {
    if (typeof pokemon === 'object') {
      if (arrayCompare(keyTemplate, Object.keys(pokemon)) === true) {
        pokemonList.push(pokemon);
      }
      else {
        console.log(pokemon.name === undefined ?
          'pokemonRepository.add: Item is not a proper object or lacks a name key.'
          : 'pokemonRepository.add: ' + pokemon.name +
          ' is not a properly formated pokemon.' );
        }
      }
      else console.log('pokemonRepository.add: Type of item is not object.');
    }

    // This function acts as a test function in the getByName function. 

    function checkName(pokemon) {return pokemon.name === this.toString();}

    function getByName(name) {
      return JSON.parse(JSON.stringify(pokemonList.filter(checkName, name)));
    }

    return {
      getAll: getAll,
      getByName: getByName,
      add: add
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
  function createDummy() {
    return {
      name: 'Dummy',
      category: '',
      height: 0,
      weight: 0,
      type: [],
      weakness: [],
      stats: {
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0}
      }
    }

  /* This function assembles a big template literal consisting of first the name
  of the Pokemon, second its height, and third a comment if it is bigger than
  70''. Last the template is enclosed in <li> tags and written into index.html. */
    for (let i = 0; i < 40; i++) {
      pokemonRepository.add(createDummy());
    }

  function pokemonWrite(pokemon) {
    document.write( `<li class="pokemon-list__item">
    ${pokemon.name}
    (height: ${ heightInFeet( pokemon.height ).feet }'
    ${ heightInFeet( pokemon.height ).inches }'')
    ${(pokemon.height > 70 ? '- Wow, that\'s big!' : '')}
    </li>` );
  }

  pokemonRepository.getAll().forEach(pokemonWrite);
      function writeListItem(pokemon) {
        const list = document.querySelector('.pokemon-list');
        const listItem = document.createElement('li');
        const pokemonButton = document.createElement('button');
        pokemonButton.classList.add('pokemon-list__item');
        pokemonButton.classList.add(pokemon.name);
        addELToButton(pokemonButton, pokemon);
        listItem.appendChild(pokemonButton);
        list.appendChild(listItem);
        pokemonButton.innerText = pokemon.name;
      }

      pokemonRepository.getAll().forEach(writeListItem);
