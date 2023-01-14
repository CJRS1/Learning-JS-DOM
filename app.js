//Añadir texto, etiquetas en HTML con JS

console.log(document) //Estructura de HTML
document.querySelector('H1').textContent = 'Texto desde JS' //Se cambia el texto a Texto desde JS
console.log(document.querySelector('H1')) //Muestra lo que esta contenido en H1

document.querySelector('h3')
console.log(document.querySelector('h3'))
console.log(document.querySelector('.h3-danger'))
console.log(document.querySelector('#parrafo'))

// document.getElementById('parrafo').textContent = 'hola mundo'Z
console.log(document.getElementById('parrafo')) //hace lo mismo

console.log(document.querySelectorAll('.h3-danger')) //Selecciona todos los elemntos con clase h3-danger
console.log(document.querySelector('h3'))

//Se debe guardar en una variable

const parrafo = document.querySelector('#parrafo')
// parrafo.textContent = 'Textooo desde JS'
parrafo.innerHTML = '<b>texto con innerHTML</b>'

