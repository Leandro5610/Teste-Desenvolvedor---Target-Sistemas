const butao = document.querySelector('#inverter')
const result = document.querySelector('#result')
const limpar = document.querySelector('#limpar')
butao.addEventListener('click', function(e){
    e.preventDefault()
    const palavra = document.querySelector('#palavra').value
    var o = ''

    for(var i = palavra.length - 1; i >= 0; i--){
        o+=palavra[i]
    }
    const p = document.createElement('h1')
    p.innerText = `A palavra invertida é : ${o}`
    result.appendChild(p)
    if(palavra == o){
        alert(`A palavra ${palavra} invertida é ${o} então não muda nada`)
    }
    const input = document.getElementById('palavra').value =""
    return o
     
})

limpar.addEventListener('click', function(e){
    e.preventDefault()
    result.innerHTML =""
})

const input  =document.querySelector('#palavra')


input.addEventListener('keypress', function(e){
    const keyCode =(e.keyCode ? e.keyCode : e.wich)

    if(keyCode >47 && keyCode <58){
        e.preventDefault();

    }
})