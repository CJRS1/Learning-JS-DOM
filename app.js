//ADD EVENT LISTENER
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')

console.log(cards)
const templateCard = document.getElementById('template-card').content //para acceder a los elementos
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content

const fragment = new DocumentFragment()
let carrito = {} // Se crea el objeto carrito


document.addEventListener('DOMContentLoaded',()=>{
    fetchData()
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
}) //Espera a que se cargue el DOM para recién ejecutar el fetch


cards.addEventListener('click',e =>{
    addCarrito(e) //e sirve para capturar el elemento que queremos modificar
})

items.addEventListener('click',e =>{
    btnAccion(e) //e sirve para capturar el elemento que queremos modificar
})


//Se obtienen los datos de nuestro api.json
const fetchData = async ()=>{
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        // console.log(data)
        pintarCards(data)
    } catch(error){
        console.log(error)
    }
}

// Se crean los cuadritos para los productos
const pintarCards = data =>{
    // console.log(data)
    data.forEach(producto=>{
        // console.log(producto)

        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src",producto.thumbnailUrl)

        templateCard.querySelector('.btn-dark').dataset.id = producto.id // Sele añade el dataset id

        const clone = templateCard.cloneNode(true)
        // console.log(clone)
        fragment.appendChild(clone)
        // console.log(fragment)
    })

    cards.appendChild(fragment)
}


const addCarrito = e =>{
    console.log(e.target) //Captura los elementos cada uno
    console.log(e.target.classList.contains('btn-dark')) //el que contenta la clase btn-dark
    if(e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement) //Ingresa a todo el div donde esta contenido el boton con clase btn dark
    }
    e.stopPropagation() //Detiene otro evento que se pueda generar
}


const setCarrito = objeto =>{ //el objeto tiene todos los elementos seleccionados
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    } // es un objeto

    if(carrito.hasOwnProperty(producto.id)){ //pregutna si tiene esa propiedad
        producto.cantidad = carrito[producto.id].cantidad +1 //Recien cuando se aumenta la cantidad se crea un objeto carrito para cambiar esa propiedad
        
    }

    carrito[producto.id] = {...producto} // se le pasa todo lo de producto
    pintarCarrito()
    console.log(carrito[producto.id])
}

const pintarCarrito = ()=>{

    items.innerHTML = ''

    Object.values(carrito).forEach(producto=>{
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    pintarFooter()

    localStorage.setItem('carrito',JSON.stringify(carrito))
}

const pintarFooter = () =>{

    footer.innerHTML = ''

    if(Object.keys(carrito).length ===0 ){
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return // sale de la funcion
    }
    
    const nCantidad = Object.values(carrito).reduce((acc,{cantidad})=>
    acc + cantidad,0
    )
    const nPrecio = Object.values(carrito).reduce((acc,{cantidad,precio})=>
    acc + cantidad * precio,0
    )
    console.log(nPrecio)
    templateFooter.querySelectorAll('td')[0].textContent = nCantidad 
    templateFooter.querySelector('span').textContent = nPrecio
    
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click',()=>{
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = (e) =>{
    
    if(e.target.classList.contains('btn-info')){
        const producto = carrito[e.target.dataset.id] 
        console.log(producto)
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }
    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id] 
        console.log(producto)
        producto.cantidad--
        carrito[e.target.dataset.id] = {...producto}
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id]
        }
        
        pintarCarrito()
    }
    e.stopPropagation()
}