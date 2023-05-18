const params = new URLSearchParams(window.location.search);
const pokemonId = params.get('id');
const div = document.getElementById('detalle');
const volver = document.getElementById('volver');
console.log(pokemonId);
//consulta de nuevo
const endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
fetch(endPoint)
    .then(response => response.json())
    .then(pokemonData => {
        // Aquí puedes usar los datos del pokemon para mostrarlos en el detalle.html
        console.log(pokemonData);
        console.table(pokemonData);
        const pokemonName = pokemonData.name;
        const pokemonHeight = pokemonData.height;
        const pokemonWeight = pokemonData.weight;
        const pokemonImgane =  pokemonData.sprites.front_default;

      
         const pokemonAbilities = pokemonData.abilities.map(ability => ability.ability.name).join(', ');

         div.innerHTML = "";
         div.innerHTML = `
                    <div class="card mx-auto w-15" style="width: 18rem;">
            <img src="${pokemonImgane}" class="card-img-top" alt="${pokemonName}">
            <div class="card-body ">
                <h5 class="card-title text-uppercase miTdetalle">${pokemonName}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Altura: ${pokemonHeight}</li>
                <li class="list-group-item">Peso: ${pokemonWeight}</li>
                <li class="list-group-item">Habilidades: ${pokemonAbilities}</li>
            </ul>
            </div>`

    });

volver.addEventListener('click', () => {
    window.location.href = 'index.html';
})
