function carregar() {
var msg = window.document.querySelector('#msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `<p>Agora são <strong>${hora}</strong> horas.</p>`

if (hora >= 0 && hora < 12){
    document.body.style.background = 'var(--manha-color)'
    img.innerHTML = '<img src="fotomanha.png" width="300px">'
}else if (hora >= 12 && hora <18){
    document.body.style.background = 'var(--tarde-color)'
    img.innerHTML = '<img src="fototarde.png" width="300px">'
}else{
    img.innerHTML = '<img src="fotonoite.png" width="300px">' 
}
}