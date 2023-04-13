// Closures
// uma funcção pode ser atribuída a uma variável

let umaFuncao = function () {
    console.log ("Fui armazenada uma uma variável")
}
umaFuncao()

// F recebe uma função como parâmetro e, por isso, é uma função de alta ordem
// Por devolver uma função, g também é de alta ordem

function f (funcao) {  // chamando a função; note como a tipagem dinâmica tem seu preço
    funcao()
}

function g () {
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao
}

f (function () {
    console.log ('Estou sendo passada para f')
})

const gResult = g()
gResult()
g()()

f(g)
f(g())
f(g()())
f(1)