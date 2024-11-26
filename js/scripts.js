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

for ( let i = 0; i < pokemonList.length; i++ ){
    document.write( pokemonList[i].name + "  height: " + pokemonList[i].height + "<p>");
} //to print all pokemon's name and height

for( let i = 0; i< pokemonList.length; i++ ){
    if( pokemonList[i].height >= 6 ) {
        document.write(pokemonList[i].name + " : wow it is big");
    }
}//to print message for the largest pokemon

