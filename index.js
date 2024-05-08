//Escribe un programa que compare dos números y muestre un mensaje indicando cuál es el mayor.
let numero1 = Number(prompt("Ingresa un número"))
let numero2 = Number(prompt("Ingresa otro número"))

if (numero1 > numero2) {
alert(numero1 + " es más grande que " + numero2)
} 
else if (numero1 < numero2) {
alert(numero2 + " es más grande que " + numero1)
} 
else {
alert(numero1 + " es igual a " + numero2)
}
//Crea un programa que determine si un número es positivo, negativo o cero
let numero = prompt("Ingresa un número")
if (numero > 0) {
alert ("El número es positivo")
}
else if (numero < 0) {
alert ( "El número es negativo" )
}
else {
alert ( "El número es cero" )
}
//Escribe un programa que verifique si un número es par o impar.
let numero3 = Number(prompt("Ingresa un número:"))

{
if (numero3 % 2 == 0) {
alert ("El número es par")
} else {
alert ("El número es impar")
}
}
//Crea un programa que solicite la edad del usuario y muestre un mensaje indicando si es mayor de edad o no
let edad = Number(prompt("Ingresa tu edad:"))
{
if (edad >= 18) {
alert ("Eres mayor de edad.")
} else {
alert ("Eres menor de edad.")
}
}
//Crea un programa que solicite un número del 1 al 7 y muestre el día de la semana correspondiente.
let numeroDia = Number(prompt("Ingresa un número del 1 al 7 para conocer el día de la semana:"))
let diaSemana

if (numeroDia == 1) {
diaSemana = "Lunes";
} else if (numeroDia == 2) {
diaSemana = "Martes";
} else if (numeroDia == 3) {
diaSemana = "Miércoles";
} else if (numeroDia == 4) {
diaSemana = "Jueves";
} else if (numeroDia == 5) {
diaSemana = "Viernes";
} else if (numeroDia == 6) {
diaSemana = "Sábado";
} else if (numeroDia == 7) {
diaSemana = "Domingo";
} else {
diaSemana = "Número inválido, por favor ingresa un número del 1 al 7.";
}
//Crear un programa que verifique si un número ingresado por el usuario es divisible por 3 y por 5.
let numero4 = Number(prompt("Ingresa un número para saber si es divisible por 3 y por 5:"))
let esDivisible = false

if (numero % 3 == 0 && numero % 5 == 0) {
esDivisible = true
}
if (esDivisible) {
alert("El número " + numero + " es divisible por 3 y por 5.")
} else {
alert("El número " + numero + " no es divisible por 3 y por 5.")
}
//Desarrollar un programa que determine si un número ingresado por el usuario es positivo y menor que 100.
let numero5 = Number(prompt("Ingresa un número para determinar si es positivo y menor que 100:"))
let positivoymenorque100 = false
if (numero > 0 && numero < 100) {
positivoymenorque100 = true;
}
if (positivoymenorque100) {
alert("El número " + numero + " es positivo y menor que 100.");
} else {
alert("El número " + numero + " no es positivo o no es menor que 100.");
}
//Escribir un programa que solicite al usuario su edad y su género, y determine si es elegible para jubilarse, considerando que debe tener al menos 65 años si es hombre y al menos 60 años si es mujer.
let edad2 = Number(prompt("Ingresa tu edad:"))
let genero = prompt("Ingresa tu género (hombre/mujer):")
let sepuedejubilar = false

if ((genero == "hombre" && edad >= 65) || (genero == "mujer" && edad >= 60)) {
sepuedejubilar = true
}
if (sepuedejubilar) {
alert("Podés jubilarte.");
} else {
alert("No podés jubilarte todavía.")
}
//Crear un programa que solicite al usuario tres números y determine si al menos dos de ellos son iguales
let numeroN1 = Number(prompt("Ingresa el primer número:"))
let numeroN2 = Number(prompt("Ingresa el segundo número:"))
let numeroN3 = Number(prompt("Ingresa el tercer número:"))
let almenosdosiguales = false

if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3) {
almenosdosiguales = true
}
if (almenosdosiguales) {
alert("Al menos dos de los números ingresados son iguales.")
} else {
alert("Ninguno de los números ingresados es igual a otro.")
}
//Desarrollar un programa que determine si un número ingresado por el usuario es divisible por 4 y por 6, o si es divisible por 9 y por 12.
let numero6 = Number(prompt("Ingresa un número para determinar su divisibilidad por 4 y 6, o por 9 y 12:"))
let divisiblepor4y6 = (numero % 4 === 0) && (numero % 6 === 0)
let divisiblepor9y12 = (numero % 9 === 0) && (numero % 12 === 0)
if (divisiblepor4y6) {
alert("El número " + numero + " es divisible por 4 y por 6.")
} else if (divisiblepor9y12) {
alert("El número " + numero + " es divisible por 9 y por 12.")
} else {
alert("El número " + numero + " no es divisible ni por 4 y por 6, ni por 9 y por 12.")
}
//Escribir un programa que solicite al usuario tres edades y determine si al menos una de ellas es mayor que 18 años.
let edadN1 = Number(prompt("Ingresa la primera edad:"))
let edadN2 = Number(prompt("Ingresa la segunda edad:"))
let edadN3 = Number(prompt("Ingresa la tercera edad:"))

let almenosunamayorde18 = (edadN1 > 18) || (edadN2 > 18) || (edadN3 > 18)

if (almenosunamayorde18) {
alert("Al menos una de las edades ingresadas es mayor que 18 años.")
} else {
alert("Ninguna de las edades ingresadas es mayor que 18 años.")
}