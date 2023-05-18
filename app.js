console.info("Parcial 1")
/*El console info para mostrar que este bien vinculado el script*/
//Asocio el btn del indx para mostrar los pokemons
const btnConsultar = document.getElementById('btnConsultar');
const div = document.querySelector('#lista');

//Asocio el boton para consultar los pokemons
btnConsultar.addEventListener('click', function() {
    console.log("Iniciando fetch");
    const endPoint= 'https://pokeapi.co/api/v2/pokemon?limit=100';//endpoint 
     ////primero crear la estructura fetch
    fetch(endPoint)
    .then(response => response.json())
    .then( json => {
        console.log(json);
        const resultado = json.results;
        console.table(resultado)
        ////agregar datos al html
        div.innerHTML="";
        resultado.forEach( pokemon => {
            const pokemonUrl = pokemon.url;
            fetch(pokemonUrl)
            .then(response => response.json())
            .then( pokemonData => {
                const pokemonName = pokemonData.name;
                const pokemonImageURL = pokemonData.sprites.front_default;
                const pokemonId = pokemonData.id;
           div.innerHTML += `
                <div class="card col-sm-3 mb-3 mx-auto miCard" style="width: 18rem;">
                <img src="${pokemonImageURL}" class="card-img-top" alt="${pokemonName}"/>
                <div class="card-body">
                    <h5 class="card-title text-uppercase">${pokemonName}</h5>
                   <button><a href="detalle.html?id=${pokemonId}" class="btnDetalles"> Ver Detalles </a> </button>
                </div>
                </div>`;

            })
    })
})
})
