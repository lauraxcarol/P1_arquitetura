const n1 = 2;
const n2 = '3';

// Coerção implícita de n1, acontece concatenação

const n3 = n1 + n2;
console.log(n3)

// Coerção explícita, soma acontece

const n4 = n1 + Number(n2);
console.log(n4)