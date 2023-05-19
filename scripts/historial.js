const historialContenedor = document.getElementById('contenedor-historial');
const  pHistorial = JSON.parse(localStorage.getItem('pokemonHistorial'));
console.table(pHistorial)

historialContenedor.innerHTML="";
pHistorial.forEach(pokemon => {
  
  historialContenedor.innerHTML +=`
      <div class="card mb-3 mx-auto" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Pokemon: ${pokemon.nombre}</h5>
            <p class="card-text"><small class="text-body-secondary">ID: ${pokemon.id}</small></p>
          </div>
        </div>
      </div>
    </div>
  `
});

volver.addEventListener('click', () => {
    window.location.href = 'index.html';
})
