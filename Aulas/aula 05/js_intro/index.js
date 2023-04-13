// function demorada(tempo) {
//     console.log(`demorada ${tempo}`)
//     const aulaMaisTempo = new Date().getTime() + tempo

//     while (new Date().getTime() <= aulaMaisTempo);
//     const d = 8 + 4
//     return d
// }

// setTimeout(function(){demorada(2000)}, 2000)
// setTimeout(function(){demorada(1000)}, 1000)
// console.log('chegou ao fim do script principal')

const fs = require("fs") // importando uma biblioteca - para file system
const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`)
        } else {
            console.log(conteudo.toString())
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
}
abrirArquivo('arquivo.txt')
