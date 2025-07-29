//Basandote en el array siguiente, crea una lista ul > li  dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ul = document.createElement('ul')
for (let i = 0; i < countries.length; i++) {
  const li = document.createElement('li')
  li.textContent = countries[i]
  ul.appendChild(li)
}
document.body.appendChild(ul)

//Elimina el elemento que tenga la clase .fn-remove-me.
const removElement = document.querySelector('.fn-remove-me')
removElement.remove()

//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const imprime = document.querySelector('[data-function="printHere"]')
console.log(imprime)
const ul1 = document.createElement('ul')
for (let i = 0; i < cars.length; i++) {
  const li = document.createElement('li')
  li.textContent = cars[i]
  ul1.appendChild(li)
}
imprime.appendChild(ul1)

//Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesImg = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
for (let i = 0; i < countriesImg.length; i++) {
  const div = document.createElement('div')
  div.classList = 'countries'
  const h4 = document.createElement('h4')
  const img = document.createElement('img')
  div.appendChild(h4)
  div.appendChild(img)
  h4.textContent = countriesImg[i].title
  img.src = countriesImg[i].imgUrl
  document.body.appendChild(div)
}

//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const button = document.createElement('button')
const divCountries = document.querySelectorAll('.countries')
button.textContent = 'Borrar ultimo div'
document.body.appendChild(button)
button.addEventListener('click', () => {
  const eliminar = divCountries[divCountries.length - 1]
  eliminar.remove()
})

//Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
for (let i = 0; i < divCountries.length; i++) {
  const btn = document.createElement('button')
  btn.textContent = 'Borrar'
  divCountries[i].appendChild(btn)
  btn.addEventListener('click', () => {
    divCountries[i].remove()
  })
}
