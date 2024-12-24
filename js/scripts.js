let pokemonRepository = (function () {
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
    return {
      add: function() {
          pokemonList.push(pokemon);
      },
      getAll: function() {
          return pokemonList;
      }
  };
 }) ();


 pokemonRepository.getAll().forEach(function(pokemon){
    document.write(pokemon.name + " height: " + pokemon.height + "<p>")
});
//to print all pokemon's name and height


// to print message for the largest pokemon



  
  
