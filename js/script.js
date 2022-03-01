
// This function test whether two arrays are the same in terms of length and content.

function arrayCompare(array1, array2) {
  if (Array.isArray(array1) === false || Array.isArray(array1) === false || array1.length !== array2.length) {
    return false;
  }
};
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
};
  return true;
}

const pokemonRepository = (function() {

  const pokemonList = [];
  const keyTemplate = ["name", "category", "height", "weight", "type", "weakness", "stats"];

  function getAll() {return pokemonList;}

  function addToList(pokemon) {
    if (typeof(pokemon) === 'object') {
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

    return {
      getAll: getAll,
      add: addToList
    };
  })();

  function heightInFeet(heightInInches) {
    return {
      feet: Math.floor(heightInInches / 12),
      inches: heightInInches % 12
    };
  }


/* This loops assembles a big teplate literal consisting of first the name
of the Pokemon, second its height and third a comment if it is bigger than
70''. Last it is enclosed in <li> tags and wriiten into index.html. */

for(let i = 0; i < pokemonList.length; i++) {
document.write( `<li class="pokemon-list__item">
${pokemonList[i].name}
(height: ${ heightInFeet( pokemonList[i].height ).feet }'
${ heightInFeet( pokemonList[i].height ).inches }'')
${(pokemonList[i].height > 70 ? '- Wow, that\'s big!' : '')}
</li>` );
}
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

/* This ia an alternative approach that first assembles the string in the
pokemonText variable. */
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

/* let pokemonText = '';
  pokemonRepository.add(
    {
      name: "Charmander",
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

for(let i = 0; i < pokemonList.length; i++) {
  pokemonText = `${pokemonList[i].name} `;
  pokemonText += `(height: ${heightInFeet( pokemonList[i].height ).feet}'
  ${heightInFeet( pokemonList[i].height ).inches}'')`;
  pokemonText += (pokemonList[i].height > 70 ? ' - Wow, that\'s big!' : '');
  document.write(`<li class="pokemon-list__item"> ${pokemonText} </li>`);
} */
