
const button = document.querySelector('#calcular')

const result = document.querySelector('#result')
//evento para calcular sequencia fibonacci
button.addEventListener('click', function(e){
    e.preventDefault()
    const valor = document.querySelector('#num').value
    //variaveis para realizar a sequência fibonacci
    var anterior =0 
    var atual = 1
    var proximo = 1

    //array de numro com o primeiro termo da sequência fibonacci
    var numeros =[1]
    //transfomando o valor do input em inteiro
    var numero = Number.parseInt(valor)

    for(let i = 0; i < valor ; i++){
        //cria um paragrafo para cada numero da sequência de acordo
        //com o número escolhido pelo usuário
        var p = document.createElement('p')
        //imprimi na página web a posição e valor da sequência
        p.innerText = `posição  ${i} = ${proximo}`
        //somando os valores iniciais da sequêcia fibonacci 1 + 1 que é o padrão 
        anterior = atual + proximo
        //atribui o valor 1 na variavel atual
        atual = proximo
        //atribui o valor 2 na variavel próximo
        proximo = anterior
        //adiciona no vetor o valor que está armazenado na variavel próximo
        numeros.push(proximo)
        result.appendChild(p)

    }
    //verifica se o número existe na sequência fibonacci
    //de acordo com  que foi digitado pelo usuário
    //e faz um alerta na página informando se o valor está na sequência ou não
    if(numeros.includes(numero)){
        alert(`O numero ${valor} pertence a sequêcina fibonacci`)
    }else{
        alert(`O numero ${valor} não pertence a sequêcina fibonacci`)
    }

    const input = document.getElementById('num').value =""
})

limpar.addEventListener('click', function(e){
    e.preventDefault()
    result.innerHTML =""
})


  
