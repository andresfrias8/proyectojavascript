/*let identificar = true
let intentos =3

do{
let usuario = prompt ("ingresa tu usuario, tienes 3 intentos")
if(usuario == null){
    break
}
if(usuario == "andres" && intentos <=3){
    alert("bienvenido " + usuario)
    identificar=false
}else{
    alert("usuario no reconocido" + " te quedan " + intentos + " intentos")
    intentos--
    if(intentos>3){
        alert("ya llegaste al limite de intentos")
        break
    }
}

}while(identificar)*/


/* function saludar (){
    let usuario
    console.log("hola " + usuario) 
}
saludar()*/


/*function login(){
    let usuario = prompt("ingresa tu usuario: ")
    if(usuario !== ""){
        alert("error, dato ,mal ingresado")
    }
}
login ()*/


/*function sumar (numA,numB){
    numA = parseInt(prompt("ingrese primer numero que desea sumar"))
    numB = parseInt(prompt("ingrese segundo numero que desea sumar"))

    let resultado = numA + numB
    console.log("el resultado es: " + resultado)
}
sumar( )*/


/*const nombre = prompt ("como es tu nombre?")
console.log ("nombre del usuario " + nombre)
alert ("Bienvenido " + nombre)*/


/*const IVA = 1.21

function calcularIva(importe){
    if(parseFloat(importe)){
        let resultado = importe * IVA
        alert("el importe con IVA es: " + resultado)
    }else{
        alert("eso no es un numero")
    }
}
function calcularPrecioFinal(){
    let precioDelProducto = prompt("ingrese el importe del producto: ")
    calcularIva(precioDelProducto)
}

calcularPrecioFinal()*/

/*ARRAYS*/

/* FILTRO DE PRODUCTOS!

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

let palabraClave = 
prompt("ingresa producto que queres buscar").toUpperCase().trim()
let resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))
if(resultado.length >0){
    console.table(resultado)
}else{
    alert("no se encontro ninguna conincidencia con " + palabraClave)
}*/

/*CORRECCION 2DA ENTREGA

PARA QUE PUDIERA SER INTERACTIVO TUVE QUE SACAR LA PRIMERA LINEA DE LA FUNCION POR QUE EL PROMPT NO FUNCIONABA SINO

function filtrarProducto(){
    let palabraClave = 
    prompt("ingresa producto que queres buscar").toUpperCase().trim()
    let resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))
    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna conincidencia con " + palabraClave)
    }
}*/

 /*INTENTE HACER UNA LISTA CON LOS NOMBRES, PRECIOS Y STOCK DE LOS CUADROS DE ARTE QUE TENGO EN MI PROYECTO DE DESARROLLO WEB, PENSADO PARA CREAR UN CARRITO, QUISE LLAMARLO DESDE LA VARIABLE LISTA PERO NO ME FUNCIONO, 

for(const x of lista){
    let contenedor = document.createElement("div")
    contenedor.innerHTML=`
    
    <h1>nombre: ${nombre}</h1>
    <h2>precio: ${precio}</h2>
    <h3>stock: ${stock}</h3>
    
    `
    document.body.appendChild(contenedor)


}*/

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
}

botonEnviar.addEventListener("click", guardarFormulario)

/* EJEMPLO DE OPERADOR LOGICO FALSY*/

console.log(inputNombre || "codigo existente")

/* carrito.length === 0 && alert("el carrito esta vacio")*/
