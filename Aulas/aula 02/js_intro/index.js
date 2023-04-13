// Declarando constantes
const nome = 'José'; // Depois que inicializei uma constante, eu não consigo reatribuir o valor
const idade = 27, outra_idade = 10;
const sexo = "M"; // Não há diferença entre aspas simples e aspas duplas
const endereco = 'Rua K, 12'

// nome = 'Maria';
// console.log(nome);

console.log(nome, idade, outra_idade, sexo, endereco); // Faz a função de print


// Declarando variáveis

let a = 2; // let: variável local (vale apenas neste bloco de código) ou escopo de bloco - bloco: trecho de código definido entre chaves
let b = 'abc';

console.log(a, b);
b = 20; // Não há diferença entre variáveis numéricas e strings = tipagem dinâmica

var c = 2 + 3; // var: variável global (vale em qualquer lugar do meu código) ou com escopo dentro da função onde foi criada
var d = 'abcd' // O ponto e vírgula não é obrigatório

console.log(b, c, d)

// node index.js > no terminal para exibir os resultados

if (a > 1){
    var x = 0 // Na hora de terminal, por conta do console estar fora das chaves, o let dará erro, pois essa variável só existirá dentro desse bloco de texto definido dentro de {} > se o console fosse dentro da chave, o let iria funcionar > por conta disso, usaremos o var
    a = 10
}
console.log(x, a)

// Dica do professor: usar o let ao invés do var para ter mais controle sobre o código