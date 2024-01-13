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



/*

const nombre = prompt ("como es tu nombre?")
console.log ("nombre del usuario " + nombre)
alert ("Bienvenido " + nombre)

*/