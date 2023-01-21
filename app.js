const list = document.querySelector('#lista') //Se selecciona el ID de la lista

const arrayLista = [' item 1',' item 2',' item 3'] //Se crea array

//Fragment no acepta INNERHTML

/* const template = document.querySelector('#template').content //Se crea template
console.log(template)
const fragment = new DocumentFragment() // Se crea fragment 

arrayLista.forEach(item=>{
    template.querySelector('.list span').textContent = item // Se modifica el template
    const clone = template.cloneNode(true) // Se clonan los nodos
    fragment.appendChild(clone)
    console.log(item)
})

lista.appendChild(fragment) */

const template = document.querySelector('#template').content
console.log(template)
const fragment = new DocumentFragment()

arrayLista.forEach(item=>{
    template.querySelector('.list span').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone) 
    console.log(item)

})

lista.appendChild(fragment)
