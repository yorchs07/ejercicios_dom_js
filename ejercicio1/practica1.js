// Usa query selector para mostrar por consola el botón .showme
const button = document.querySelector('.showme')
console.log(button)

//Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector('#pillado')
console.log(title)

//Usa querySelector para mostrar por consola todos los p
const pe = document.querySelectorAll('p')
console.log(pe)

//Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const pokem = document.querySelectorAll('.pokemon')
console.log(pokem)

//Usa querySelector para mostrar por consola todos los elementos con el atributo data-function = "testMe"
const data = document.querySelectorAll('[data-function="testMe"]')
console.log(data)

//Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const personajes = document.querySelectorAll('[data-function="testMe"]')
console.log(personajes[2].textContent)
