//Forma adecuada de colocar elementos dentro de una lista en HTML con JS

const arrayElement = ['primer elemento', 'segundo elemento','tercer elemento']

// const fragment = document.createDocumentFragment()
const fragment = new DocumentFragment()

arrayElement.forEach(item=>{
    const li = document.createElement('li')
    li.textContent = item

    const childNode = fragment.firstChild
    console.log(item,childNode)

    fragment.insertBefore(li,childNode)
})

lista.appendChild(fragment)
