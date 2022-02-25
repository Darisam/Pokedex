
let pokemonList = [];

// The height of a Pokemon is given in inches, the weight in pounds.

pokemonList[0] = {
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
};

pokemonList[1] = {
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
};

pokemonList[2] = {
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
};

pokemonList[3] = {
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
};

let pokemonNumber = 1;

function heightInFeet(heightInInches) {
  return {
    feet: Math.floor(heightInInches / 12),
    inches: heightInInches % 12
  };
}

let htmlOutput =
`Name: ${pokemonList[pokemonNumber].name} <br/>
Category: ${pokemonList[pokemonNumber].category} <br/>
Height: ${ heightInFeet( pokemonList[pokemonNumber].height ).feet }'
${ heightInFeet( pokemonList[pokemonNumber].height ).inches }'' <br/>
Weight: ${pokemonList[pokemonNumber].weight} lbs`;
for(let i = 0; i < pokemonList.length; i++) {
document.write( `<li class="pokemon-list__item">
${pokemonList[i].name}
(height: ${ heightInFeet( pokemonList[i].height ).feet }'
${ heightInFeet( pokemonList[i].height ).inches }'')
${(pokemonList[i].height > 70 ? '- Wow, that\'s big!' : '')}
</li>` );
}

document.write(htmlOutput);
