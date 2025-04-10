async function mostrarDetalles(id){
    const app = document.getElementById("app");

    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')
    const data = await res.json()
    app.innerHTML = "id";
}