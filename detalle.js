const params = new URLSearchParams(window.location.search);
const pokemonId = params.get('id');
const pokemonNombre = params.get('nombre')
const div = document.getElementById('detalle');
const volver = document.getElementById('volver');
const verHistorial = document.getElementById('verHistorial');
console.log(pokemonId);

//Estructura fetch
const endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
fetch(endPoint)
    .then(response => response.json())
    .then(pokemonData => {
        console.log(pokemonData);
        console.table(pokemonData);
        const pokemoNombre = pokemonData.name;
        const pokemonAltura = pokemonData.height;
        const pokemonPeso = pokemonData.weight;
        const pokemonImg =  pokemonData.sprites.front_default;
        const pokemonHabilidades = pokemonData.abilities.map(ability => ability.ability.name).join(', ');
         div.innerHTML = "";
         div.innerHTML = `
                    <div class="card mx-auto w-15" style="width: 18rem;">
            <img src="${pokemonImg}" class="card-img-top" alt="${pokemoNombre }">
            <div class="card-body ">
                <h5 class="card-title text-uppercase miTdetalle">${pokemoNombre }</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Altura: ${pokemonAltura}</li>
                <li class="list-group-item">Peso: ${pokemonPeso}</li>
                <li class="list-group-item">Habilidades: ${pokemonHabilidades}</li>
            </ul>
            </div>`

    });

volver.addEventListener('click', () => {
    window.location.href = 'index.html';
})
/*Local*/
function guardarEnHistorial(pokemonId, pokemonNombre) {

    const pHistorial = JSON.parse(localStorage.getItem('pokemonHistorial'));
    const existe = pHistorial.some(pokemon => pokemon.id === pokemonId);

    if (!existe) {
      pHistorial.push({ id: pokemonId , nombre: pokemonNombre});
    if (pHistorial.length > 10) {
        pHistorial.shift(); 
    }
      localStorage.setItem('pokemonHistorial', JSON.stringify(pHistorial));
    }
  }

guardarEnHistorial(pokemonId, pokemonNombre)  
verHistorial.addEventListener('click', function(){
    window.location.href = 'historial.html';
  })