//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const btn1 = document.createElement('button')
btn1.id = 'btnToClick'
btn1.textContent = 'cuentaClicks'
document.body.appendChild(btn1)
let contClick = 0
const input1 = document.querySelector('.click')
input1.value = 'Contador de clicks'
btn1.addEventListener('click', () => {
  contClick++
  input1.value = contClick
})

// Añade un evento 'focus' que ejecute un console.log con el valor del input.
const input2 = document.querySelector('.focus')
let contFocus = 0
input2.value = 'Contador de focus'
const p = document.createElement('p')
document.body.appendChild(p)
p.textContent = 'Aqui contamos Focus'
btn1.addEventListener('focus', () => {
  contFocus++
  input2.value = contFocus
})

//Añade un evento 'input' que ejecute un console.log con el valor del input.
const input3 = document.querySelector('.value')
let contValue = 0
input3.value = 'Contador de Value'
const p1 = document.createElement('p')
document.body.appendChild(p1)
p1.textContent = 'Aqui contamos Value'
input3.addEventListener('input', () => {
  console.log('input')
  contValue++
  p1.textContent = 'El contador de valores es ' + contValue
})

//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
const ul = document.createElement('ul')
const li = document.createElement('li')
li.textContent = ' Dinamic Albums '
li.id = 'albums'
ul.appendChild(li)
for (let i = 0; i < albums.length; i++) {
  const li = document.createElement('li')
  li.textContent = albums[i]
  ul.appendChild(li)
}
document.body.appendChild(ul)
