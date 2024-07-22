const form = document.querySelector('#form')
const lista = document.querySelector('ul')
const li = document.querySelector('liKey')

form.button>addEventListener('click', (event)=>{
    event.preventDefault()
    const texto = form.input.value
    if(texto.length > 0){
        const liClone = li.cloneNode(true)
        liClone.textContent = texto
    }
    
})

