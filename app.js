//Colocar elementos en el ul (ninguna de estas formas es recomendada) genera reflow y genera multiples solicitudes

//FORMA 1 (NO RECOMENDADA)

const arrayElement = ['primer elemento', 'segundo elemento','tercer elemento']

arrayElement.forEach(item=>{
    lista.innerHTML += `<li>${item}</li>`
}) 