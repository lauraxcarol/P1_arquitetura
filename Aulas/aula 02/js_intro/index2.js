var linguagem = 'Javascript'
console.log('Aprendendo' + linguagem)

var linguagem = 'Java' // Pode ser redeclarado
console.log('Aprendendo' + linguagem)

var idade = 18;
let nome = 'João';

console.log(`Oi, ${nome}.`) // Ao invés de concatenar com + na hora de realizar o print, trocamos '' por `` (crases) para que o ${nome} (conhecido como token) faça a troca pela variável que utilizamos dentro das chaves

if (idade >= 10){
    var nome2 = 'João';
    console.log(`Parabéns, ${nome2}, você pode dirigir!`)
}
console.log(`Até mais, ${nome}.`)