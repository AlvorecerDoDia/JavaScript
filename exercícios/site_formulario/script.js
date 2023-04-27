function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = document.querySelector('#idade');
    var res = document.querySelector('#res');
    if (nasc.Value === "" || nasc > ano){
        alert('[ERROR] verifique os dados e tente novamente!');
    }else{
        var res = nasc - Number(ano.valueOf);
        res.innerHTML = `<p>Sua idade é ${res}</p>`
    }
}