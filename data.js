/*EL ERROR QUE ME DICE CHAT GPT QUE EXPERIMENTO ES ESTE: El problema que estás experimentando parece estar relacionado con la política CORS (Cross-Origin Resource Sharing) de la API de Rick and Morty. CORS es un mecanismo de seguridad que restringe las solicitudes de recursos desde un origen diferente al del servidor que sirve el recurso.

NO ESTOY SEGURO QUE PASO, REALICE PASO POR PASO COMO EN EL EJEMPLO DE LA API DE POKEMON PERO ME SALTA EL ERROR

COLOCO EL MISMO EJEMPLO DE LA CLASE PARA NO DEJAR UNA PAGINA QUE NO FUNCIONE, QUE FRUSTRACION..*/



/*let personajesContainer = document.getElementById("personajesContainer")

const url = "https://rickandmortyapi.com/api/character/1,2,3,4,5"

fetch(url)
.then (response => response.json())
.then ( data=> {
    console.log(data)
    const characters = data.results;
    characters.forEach ( (character)=>{
        fetch(character.url)
        .then(response => response.json())
        .then((characterData =>{
            const characterElement = document.createElement ("div")
            characterElement.innerHTML = ` <h2> ${characterData.name} </h2>`
            personajesContainer.appendChild(characterElement)

        }))
    })
})*/


let pokemonContainer = document.getElementById("pokemonContainer")

const url = "https://pokeapi.co/api/v2/pokemon?limit=16"

fetch(url)
.then(response => response.json())
.then( data=>{

    const pokemons = data.results;

    pokemons.forEach( (pokemon)=>{
        fetch(pokemon.url)
        .then(response=> response.json())
        .then( (pokemonData=>{

            const pokemonElement = document.createElement("div")
            pokemonElement.innerHTML= `
            
            <h2 class="background"> ${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.front_default}">
            `
            pokemonContainer.appendChild(pokemonElement)

        })    )
    })



})
.catch(error=>{
    console.error("ocurrio un error")
})

let titulo = document.getElementById("titulo")
console.log(titulo)
titulo.innerText = "Bienvenidos a la glorieta del arte"

let container = document.getElementById("container")
container.innerHTML=`
<form>
<div class="row mb-3">
  <div class="col-md-4">
    <label for="Nombre" class="form-label">Nombre*</label>
    <input type="text" class="form-control" id="inputNombre">
  </div>
  <div class="col-md-4">
    <label for="Apellido" class="form-label">Apellido*</label>
    <input type="text" class="form-control" id="inputApellido">
  </div>
  <div class="col-md-4">
    <label for="Email" class="form-label">Email*</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="ejemplo@servidor.com">
  </div>
</div>
<div class="mb-3">
  <label for="Asunto" class="form-label">Asunto</label>
  <input type="text" class="form-control" id="inputAsunto">
</div>
<div class="mb-3">
  <label for="Mensaje" class="form-label">Mensaje*</label>
  <textarea class="form-control" id="inputMensaje" rows="3"></textarea>
</div>
<div class="mb-3">
  <button type="submit" class="btn btn-primary rounded-pill" id="button">Enviar</button>
</div>
</form>
`

const inputNombre = document.querySelector("#inputNombre")
const inputApellido = document.querySelector("#inputApellido")
const inputEmail = document.querySelector("#inputEmail")
const inputAsunto = document.querySelector("#inputAsunto")
const inputMensaje = document.querySelector("#inputMensaje")
const botonEnviar = document.querySelector("#button")

function guardarFormulario(){
    localStorage.setItem ("nombre", inputNombre.value)
    localStorage.setItem ("apellido", inputApellido.value)
    localStorage.setItem ("email", inputEmail.value)
    localStorage.setItem ("asunto", inputAsunto.value)
    localStorage.setItem ("mensaje", inputMensaje.value)

    /*COLOQUE UN SWEET ALERT PARA QUE CUANDO LLENE EL FORMULARIO SALGA EL EJEMPLO PERO NO ME FUNCIONO!*/ 

    Swal.fire({
         title: "Genial!",
        text: "El formulario fue creado correctamente.",
        icon: "success"
});
}

botonEnviar.addEventListener("click", guardarFormulario)


console.log(inputNombre || "codigo existente")

/*ARRAYS*/

/* FILTRO DE PRODUCTOS! */

const cuadros = ["En éxtasis", "Fuá..", "Banana", "El fisura", "El tula", "Tabla"]

cuadros.push("Bad bunny")

console.log(cuadros)

const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}
let producto1 =  new Producto("En éxtasis", 200000, 1)
let producto2 =  new Producto("Fuá..", 300000, 1)
let producto3 =  new Producto("Banana", 120000, 1)
let producto4 =  new Producto("El fisura", 80000, 1)
let producto5 =  new Producto("El tula", 80000, 1)
let producto6 =  new Producto("Tabla", 180000, 1)
let lista = [producto1,producto2,producto3,producto4,producto5,producto6]

console.log(lista)

document.getElementById("btnBuscar").addEventListener("click", function() {
    let palabraClave = document.getElementById("inputProducto").value.toUpperCase().trim();
    let resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave));
    let resultadoContainer = document.getElementById("resultado");

/*SUGAR SINTAXIS*/

    let alerta = resultado.length > 0 ?         Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      }) :         Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      })
    });

/*    if (resultado.length > 0) {
        Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });    }*/
