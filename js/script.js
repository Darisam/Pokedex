
// Some functions that will be helpful later.

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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

  function add(pokemon) {pokemonList.push(pokemon);}


  // This function acts as a test function in the getByName function.

  function checkName(pokemon) {
    return pokemon.name.toUpperCase() === this.toString().toUpperCase();
  }

  function getByName(name) {
    return JSON.parse(JSON.stringify(pokemonList.filter(checkName, name)));
  }

  // Load the names of the pokemon from the API and write them to pokemonList

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

  // Loads details for a specific pokemon from the API

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


  return {
    getAll: getAll,
    getByName: getByName,
    add: add,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();


// Create an IIFE that handles the Html output.

const documentOutput = ( function() {

  const modalContainer = document.querySelector('.modal-container');
  const modal = modalContainer.querySelector('.modal');
  const pokemonPicture = modal.querySelector('img');

  // Write Pokemon list into the html document and add Event Listeners

  function addELToButton(button, pokemon) {
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
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

    // Show details of the a clicked pokemon

    function showDetails(pokemon) {
      loadDetails(pokemon).then( function() {
        console.log(pokemon);
      });
    }
  // Show details of the a clicked pokemon and add methods to close the window
  // showing the pokemon.

  function showDetails(pokemon) {
    pokemonPicture.setAttribute('src', 'img/No_Image.svg');
    pokemonRepository.loadDetails(pokemon).then( function() {
      const pokemonHeading = modalContainer.querySelector('.modal h1');
      const pokemonDescription = modalContainer.querySelector('.modal p');
      const closeModalButton = modalContainer.querySelector('.modal button');

      pokemonPicture.setAttribute('src', pokemon.imageUrl);
      pokemonPicture.setAttribute('alt', 'Picture of ' + pokemon.name);
      pokemonHeading.innerText = pokemon.name;
      pokemonDescription.innerText = 'Height: ' + pokemon.height / 10 + 'm';
      modalContainer.classList.add('modal-container-present');

      function hideDetails() {
        modalContainer.classList.remove('modal-container-present');
      }

      closeModalButton.addEventListener('click', hideDetails);

      modalContainer.addEventListener('click', function(e) {
        if (e.target === modalContainer) { hideDetails(); }
      });

      window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') { hideDetails(); }
      });
    });
  }

  return {
    writeListItem: writeListItem
  };

})();

  pokemonRepository.loadList().then( function() {
    pokemonRepository.getAll().forEach(pokemonRepository.addListItem)
  });
