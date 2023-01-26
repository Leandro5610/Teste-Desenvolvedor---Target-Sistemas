const sp = 67.83643

const rj = 36.67866

const mg = 29.22988

const es = 27.16548

const outros = 19.84953

const total = parseFloat(sp+rj+mg+es+outros)

//Fazendo o percentual de cada estado
const percentualSp = (sp /total) * 100
const percentualRj = (rj / total)* 100
const percentualMg = (mg /total) * 100
const percentualEs = (es /total) * 100
const percentualOutros =(outros /total) * 100


console.log(`O percentual de São Paulo é de ${percentualSp.toFixed(0)}%
`);
console.log(`O percentual do Rio de Janeiro é de ${percentualRj.toFixed(0)}%
`);
console.log(`O percentual de Minas Gerais é de d${percentualMg.toFixed(0)}%
`);
console.log(`O percentual do Espirito Santo é de ${percentualEs.toFixed(0)}%
`);
console.log(`O percentual dos Outros é de ${percentualOutros.toFixed(0)}%
`);