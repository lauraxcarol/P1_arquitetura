// Métodos utilitário dos vetores

// FILTER
const nomes = ["Ana Maria", "Antonio", "Alex", "Cristina"]

const apenasComA = nomes.filter((n) => n.startsWith("A")) // critério do filtro - arrow function (função lâmbida): n é o parâmetro que a função que recebe; se der true, ele mantém, no false, ele remove
console.log(apenasComA)

// MAP - sempre retorna boolean
const res = nomes.map(nome => nome.charAt(0))
console.log(res)

// EVERY
const todosComecamComA = nomes.every(n => n.startsWith("A"))
console.log(todosComecamComA)

// REDUCE - criar um objeto final a pertir de uma regra (reduz os itens de um vetor a uma valor único)
const valores = [1, 2, 3, 4]
const soma = valores.reduce((ac, v) => ac + v)
console.log(soma)

// Hadoop leva o processamento até os dados