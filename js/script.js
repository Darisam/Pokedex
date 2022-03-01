
  }
};
  }
};
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
  }

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

/* This ia an alternative approach that first assembles the string in the
pokemonText variable. */

/* let pokemonText = '';

for(let i = 0; i < pokemonList.length; i++) {
  pokemonText = `${pokemonList[i].name} `;
  pokemonText += `(height: ${heightInFeet( pokemonList[i].height ).feet}'
  ${heightInFeet( pokemonList[i].height ).inches}'')`;
  pokemonText += (pokemonList[i].height > 70 ? ' - Wow, that\'s big!' : '');
  document.write(`<li class="pokemon-list__item"> ${pokemonText} </li>`);
} */
