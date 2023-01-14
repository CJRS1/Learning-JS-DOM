const list = document.querySelector('#lista') //Se selecciona el ID de la lista

const arrayLista = ['item 1','item 2','item 3'] //Se crea array

//Fragment no acepta INNERHTML

let fragment = ''
arrayLista.forEach(item=>{
    fragment+=`
    <li class = "list">
        <b>Nombre:</b><span class="text-danger">${item}</span>
    </li>
    `
})

lista.innerHTML = fragment
lista.appendChild(fragment)