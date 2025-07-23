//Inserta dinámicamente en un html un div vacío con javascript.
const div = document.createElement('div')
document.body.appendChild(div)
div.textContent = 'Creando un nuevo div con js.'

//Inserta dinámicamente en un html un div que contenga un p con javascript.
const otroDiv = document.createElement('div')
document.body.appendChild(otroDiv)
otroDiv.innerHTML = '<p>Un p dentro de un nuevo div</p>'

//Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const tercerDiv = document.createElement('div')
document.body.appendChild(tercerDiv)
for (let i = 0; i < 6; i++) {
  const x = document.createElement('p')
  tercerDiv.appendChild(x)
  x.textContent = 'elemento ' + (i + 1) + ' creado correctamente.'
}

//Inserta dinámicamente con javascript en un html una p con el texto "soy dinámico!".
const parrafo = document.createElement('p')
document.body.appendChild(parrafo)
parrafo.textContent = 'Soy dinámico!'

//Inserta en el h2 con la clase .fn-insert-here el texto "Wubba Lubba dub dub".
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

//Basándote en el siguiente array crea una lista ul>li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  ul.appendChild(li)
  li.textContent = apps[i]
}
document.body.appendChild(ul)

//Elimina todos los nodos que tengan la clase .fn-remove-me.
const remove = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < remove.length; i++) {
  remove[i].remove()
}

//Inserta una p con el texto "Voy en medio!" entre los div. Recuerda que no sólo puedes insertar elementos con .appendChild.
const parrafoDos = document.createElement('p')
parrafoDos.textContent = 'Voy en medio!'
document.body.insertBefore(parrafoDos, tercerDiv)

//Inserta una p con el texto "Voy dentro!" dentro de todos los div con la clase .fn-insert-here.
const insert = document.querySelectorAll('div.fn-insert-here')
for (let i = 0; i < insert.length; i++) {
  const parrafoTres = document.createElement('p')
  parrafoTres.textContent = 'Voy dentro!'
  console.log(insert[i])
  insert[i].appendChild(parrafoTres)
}
