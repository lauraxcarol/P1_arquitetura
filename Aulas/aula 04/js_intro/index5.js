// let calculadora = {
//         //pode ser arrow function
//         soma: (a, b) => a + b,
//         //e função comum também
//         subtracao: function (a, b) {
//         return a - b;
//     },
// };
// console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);

// ------------------------------------------------------------------
    
function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a = 2 + 3
const b = 5 + 9
/* const d = demorada()
o valor de e não depende do valor devolvido
pela função demorada.
*/

//função será executada depois de, pelo menos, 500 milissegundos
setTimeout(function(){
    const d = demorada()
    console.log(d)
}, 500)

//enquanto isso, essas linhas prosseguem executando
//sem ficar esperando
const e = 2 + a + b
console.log(e)

// ------------------------------------------------------------------

// setTimeout(function(){
// console.log('dentro da timeout')
// }, 0)
// const a = new Date().getTime() + 1000
// //não esqueça do ;, única instrução no corpo do while
// while (new Date().getTime() <= a);
// console.log('fora da timeout')

// ------------------------------------------------------------------

// function demorada(tempo) {
//     console.log(`demorada ${tempo}`);
//     const atualMaisTempo = new Date().getTime() + tempo;
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4;
//     return d;
// }
// setTimeout(function (){demorada(2000)}, 2000);
// setTimeout(function (){demorada(1000)}, 1000);
// console.log("chegou ao fim do script principal");