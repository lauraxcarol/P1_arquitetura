// // EXERCÍCIO 9 

// async function f1 (){
//     return 1
// }
// function f2(){
//     return Promise.resolve(1)
// }
// function f3(){
//     return Promise.reject(1)
// }
// async function teste(){
//     try{
//         const r1 = await f1()
//         console.log(r1)
//         const r2 = await f2()
//         console.log(r2)
//         const r3 = await f3()
//         console.log(r3)
//     }
//     catch (e){
//         console.log('e')
//     }
// }
// teste() // 1 ; 1 ; e

// // EXERCÍCIO 1

// const f = () => {
//     console.log('f')
// }

// setTimeout(function (){
//     f()
// })
// console.log("p") // p ; f

// // EXERCÍCIO 2

// var a = 2
// var b = 2
// let c = a + b
// console.log(c) // 4
// b = 3
// console.log(c) // 4

// // EXERCÍCIO 3

// var nome
// if (nome === undefined){
//     var nome = "Cristina"
// }

// console.log(nome) // Cristina

// // EXERCÍCIO 4

// const v = [100]
// console.log(v.length) // 1
// v[2] = 5
// console.log(v.length) // 3
// v = [5]
// console.log(v.length) // erro

// // EXERCÍCIO 5

// let valores = [1, 2, 3, 4, 5]
// valores = valores.filter(v => v >= 3)
// console.log(valores.length) // 3
// const res = valores.reduce((ac, v) => {
//     return ac + v
// })
// console.log(res) // 12

// // QUESTÃO 6

// const f1 = () => {
//     console.log('f1')
// }
// const f2 = (f) => {
//     console.log('f2')
//     f()
//     return f
// }
// f2(f1)()  // f2 ; f1 ; f1

// // QUESTÃO 8

// const nome = "Pedro"
// const idade = 22
// const pessoa = {nome, idade}
// console.log(pessoa.nome) // Pedro
// console.log(pessoa['idade']) // 22

// // QUESTÃO 10 

// console.log (2 === '2') // false
// console.log (2 == '2') // true