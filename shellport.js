const botao = document.querySelector('#botao')
const inputName = document.querySelector('#inputName')
const inputEmail = document.querySelector('#inputEmail')
const formulario = document.querySelector('#formulario')

formulario.onsubmit = (evento) => {
    evento.preventDefault()
    
    const temErro = false
    const logar = document.forms['formulario']['nome']
    
    if(!logar.value) {
        temErro = true
        inputName.classList.add('erro')
    } else {
        inputName.classList.remove('erro')
    }

    if(!temErro) {
        formulario.submit()
    }
}

