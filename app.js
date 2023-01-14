const list = document.querySelector('#lista') //Se selecciona el ID de la lista

const arrayLista = ['item 1','item 2','item 3'] //Se crea array

const fragment = new DocumentFragment() // Se crea un fragmento

arrayLista.forEach(item=>{
    const li = document.createElement('li')
    li.classList.add('list') //añadir clase

    const b = document.createElement('b')
    b.textContent = 'Nombre:'

    const span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent = item

    li.appendChild(b) //Se coloca en li
    li.appendChild(span) //Se coloca en li
    fragment.appendChild(li) //Se coloca en el fragment
})

list.appendChild(fragment) //Se coloca en la lista