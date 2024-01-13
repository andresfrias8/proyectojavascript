/*
html
script
variables
bucles
funciones
interactividad con el usuario
*/

let identificar = true
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


}while(identificar)

/* function saludar (){
    let usuario
    console.log("hola " + usuario) 
}
saludar()
*/

/*
function login(){
    let usuario = prompt("ingresa tu usuario: ")
    if(usuario !== ""){
        alert("error, dato ,mal ingresado")
    }
}
login ()
*/

function sumar (numA,numB){
    numA = parseInt(prompt("ingrese primer numero que desea sumar"))
    numB = parseInt(prompt("ingrese segundo numero que desea sumar"))

    let resultado = numA + numB
    console.log("el resultado es: " + resultado)
}
sumar( )
/*

const nombre = prompt ("como es tu nombre?")
console.log ("nombre del usuario " + nombre)
alert ("Bienvenido " + nombre)

*/

const IVA = 1.21

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

calcularPrecioFinal()