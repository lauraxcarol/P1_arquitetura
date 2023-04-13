// Criação de funções
function hello (){
    console.log('Oi')
}
hello()

function hello (){
    console.log('Oi,' + nome) // O primeiro hello foi redefinido
}
hello('Laura')

function soma(a, b){
    return a + b
}
// const res = soma(2, 3)

console.log(res)
console.log(soma(2, 2))
console.log(hello('Silva'))

// Funções anônimas

// const dobro = function (n) {
//     return n * 2;
// };
// const res = dobro(4);
// console.log(res);

// const triplo = function (n = 5) {
//     return 3 * n;
// };
// console.log(triplo()); // irá assumir o valor 5 para a conta, pois este é o que definiu na função
// console.log(triplo(10)); // irá assumir o valor 10, pois é o que definiu entre ()

// Arrow functions
const hello = () => console.log('Hello');
hello()

const dobro = (valor) => valor * 2;
console.log(dobro(10))

const triplo = (valor) => {
    return valor * 3
}
console.log(triplo(10))

const ePar = (n) => {
    n % 2 === 0 
}
console.log(ePar(10))