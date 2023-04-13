// function f() {
//     let nome = "Laura"
//     function g() {
//         console.log (nome)
//     }
//     g()
// }
// f()

function ola(){
    let nome = 'João';
    return function (){
        console.log ('Olá, João');
    }
}
    
let olaResult = ola();
/*perceba que aqui a função ola já terminou.
É de se esperar que a variável nome já não
possa ser acessada.*/
olaResult();
    
     //também vale com parâmetros
function saudacoesFactory(saudacao, nome){
    return function (){
        console.log (saudacao + ', ' + nome);
    }
}
let olaJoao = saudacoesFactory ('Olá', 'João');
let tchauJoao = saudacoesFactory('Tchau', 'João');
olaJoao();
tchauJoao();
    