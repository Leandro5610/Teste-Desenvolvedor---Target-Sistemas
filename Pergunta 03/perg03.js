//consumindo o arquivo dados.json
const json= require('./dados.json'); 
//usando o reduce para calcular o maior valor mensal
const maximo = json.reduce((valorAnterior, valorAtual) => valorAnterior.valor > valorAtual.valor ? valorAnterior : valorAtual)
//usando o reduce para calcular o menor valor mensal
const minimo = json.reduce((anterior ,atual) => anterior.valor < atual.valor ? anterior : atual)
//usando o reduce para somar todos os valores do mês valor mensal
const soma = json.reduce((result, user) => {return result + user.valor} ,0)
//calculando a média de faturamento no mês
const media = json.reduce((result, user) => {return result + user.valor / json.length} ,0)

console.log(`O dia com menor faturamento foi ${minimo.dia} com total de ${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(minimo.valor)} 
`);

console.log(`O dia com maior faturamento foi ${maximo.dia} com total de ${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(maximo.valor)} 
`);

console.log(`A total de Faturamento é mensal é: ${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(soma)} 
`); 

console.log(`A média de Faturamento é mensal é: ${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(media)} 
`);

console.log("Esse Foram os dias que faturamento foi acima da média mensal:");
//percorrendo o json e verificando se o valor
//de cada dia é maior ou não que a média
json.forEach(function(n){
    if(n.valor > media){
        console.log(`
        Dia: ${n.dia} com faturamento de ${new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n.valor)}
        `);

    }
})


