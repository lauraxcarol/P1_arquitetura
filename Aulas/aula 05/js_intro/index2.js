// function calculoDemorado(numero){
//     return new Promise(function (resolve, reject){ // devolve uma promessa de execução; executa paralelamente
//         let res = 0
//         for (let i = 1; i <= numero; i++){
//             res += 1
//         }
//         resolve(res)
//     })
// }

// calculoDemorado(10).
//     then((resultado) => {
//         console.log(resultado)
//     })

function calculaRapidinho (numero){
    return numero >= 0 // if de uma linha só - comando ternário
        ? Promise.resolve((numero * (numero +1))/2) // if verdadeiro
        : Promise.reject("Somente valores positivos.") // else
}
calculaRapidinho(10) // calcula com o número 10
    .then(resultado => {
        console.log(resultado)
    })
    .catch((err) => {
        console.log(err)
    })

    calculaRapidinho(-1) // calcula com o número -1 - irá aparecer mensagem de erro, pois fizemos um if com apenas número positivos
    .then(resultado => {
        console.log(resultado)
    })
    .catch((err) => {
        console.log(err)
    })

console.log('Esperando...')