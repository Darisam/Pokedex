
function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  /* The JSON methods are in the function to make sure it returns a completely
  new list of completely new objects of completely new... etc. This way the
  received copy can't be used to modify the original pokemonList. */

  function getAll() {
    return JSON.parse(JSON.stringify(pokemonList));
  }

    // This function acts as a test function in the getByName function.

    function checkName(pokemon) {
      return pokemon.name.toUpperCase() === this.toString().toUpperCase();
    }

    function getByName(name) {
      return JSON.parse(JSON.stringify(pokemonList.filter(checkName, name)));
    }

    return {
      getAll: getAll,
      getByName: getByName,
      add: add
    };
  })();
    // Html output section

    // Create the functionality of the hamburger menu

    const menuButton = document.querySelector('.hamburger-menu');
    const menuList = document.querySelector('.pokemon-list');

    menuButton.addEventListener('click', function() {
      menuList.classList.toggle('present');
    })

    function showDetails(pokemon) {
      console.log(pokemon.name);
      menuList.classList.remove('present');
    }

    // Write the list of pokemon into document and add event listeners

    function addELToButton(button, pokemon) {
      button.addEventListener('click', function() {
        showDetails(pokemon);})
      }

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
  function add(pokemon) {pokemonList.push(pokemon);}


  function loadList() {
    return fetch(apiUrl).then( function(response) {
      return response.json();
    }).then( function(json) {
      json.results.forEach( function(item) {
        let pokemon = {
          name: capitalizeFirst(item.name),
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch( function(error) {
      console.error(error);
    });
  }

  function loadDetails(pokemon) {
    return fetch(pokemon.detailsUrl). then( function(response) {
      return response.json();
    }).then( function(details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch( function(error) {
      console.error(error);
    });
  }

    loadList: loadList,
    loadDetails: loadDetails
