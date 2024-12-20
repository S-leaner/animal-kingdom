let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 7,
        types: ['grass', 'poison']
    },
    {
        name: 'Charmander',
        height: 4,
        types: ['fire']
    },
    {
        name: 'Squirtle',
        height: 5,
        types: ['water']
    }
];


pokemonList.forEach(function(pokemon){
    document.write(pokemon.name + " height: " + pokemon.height + "<p>")
});
//to print all pokemon's name and height

pokemonList.forEach(pokemon => {
    if (pokemon.height >= 6) {
        document.write(pokemon.name + " : wow it is big");
    }
});

//to print message for the largest pokemon

