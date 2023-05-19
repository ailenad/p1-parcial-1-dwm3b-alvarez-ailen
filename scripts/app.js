
const btnConsultar = document.getElementById('btnConsultar');
const div = document.querySelector('#lista');

//Asocio el boton para consultar los pokemons
btnConsultar.addEventListener('click', function() {
    console.log("Iniciando fetch");
     //estructura fetch
    const endPoint= 'https://pokeapi.co/api/v2/pokemon?limit=100';
    fetch(endPoint)
    .then(response => response.json())
    .then( json => {
        console.log(json);
        const resultado = json.results;
        console.table(resultado)
        div.innerHTML="";
        resultado.forEach( pokemon => {
            const pokemonUrl = pokemon.url;
            fetch(pokemonUrl)
            .then(response => response.json())
            .then( pokemonData => {
                const pokemonNombre = pokemonData.name;
                const pokemonImgeURL = pokemonData.sprites.front_default;
                const pokemonId = pokemonData.id;
           div.innerHTML += `
                <div class="card col-sm-3 mb-3 mx-auto miCard" style="width: 18rem;">
                <img src="${pokemonImgeURL}" class="card-img-top" alt="${pokemonNombre}"/>
                <div class="card-body">
                    <h5 class="card-title text-uppercase">${pokemonNombre}</h5>
                   <button><a href="detalle.html?id=${pokemonId}&nombre=${pokemonNombre}" class="btnDetalles"> Ver Detalles </a> </button>
                </div>
                </div>`;

            })
    })
})
})
