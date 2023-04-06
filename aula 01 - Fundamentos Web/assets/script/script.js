let nome  = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let textoNome = document.querySelector('#textoNome')

    if (nome.value.length < 2) {
        textoNome.innerHTML = "Nome inválido!"
        textoNome.style.color = 'red'
    } else{
        textoNome.innerHTML = "Nome válido"
        textoNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let textoEmail = document.querySelector('#textoEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        textoEmail.innerHTML = 'E-mail inválido!'
        textoEmail.style.color = 'red'
    } else{
        textoEmail.innerHTML = "E-mail válido"
        textoEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let textoAssunto = document.querySelector('#textoAssunto')

    if (assunto.value.length >= 100) {
        textoAssunto.innerHTML = 'Digite no máximo 100 caracteres!'
        textoAssunto.style.color = 'red'
        textoAssunto.style.display = 'block'
    } else{
        textoAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}