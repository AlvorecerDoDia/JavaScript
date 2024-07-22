const form = document.querySelector('form')
const ul = document.querySelector('ul')
const pattern = document.createElement('li')
pattern.textContent = ''
ul.appendChild(pattern)
const li = pattern.cloneNode()

form.onsubmit = function(event){
    event.preventDefault()
   
    const input = form.querySelector('input')
    const value = input.value
    const button = document.createElement('button')

    li.textContent = value
    
    button.textContent = 'x'
    button.setAttribute('id', 'delete')

    li.appendChild(button)
    ul.textContent += li

    input.value = ''
}

