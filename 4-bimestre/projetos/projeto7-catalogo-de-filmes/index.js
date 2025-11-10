// CRIE UMA LÓGICA ABAIXO
let filme1 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme2 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme3 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme4 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme5 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme6 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme7 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme8 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme9 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}
let filme10 = {titulo: "filme", genero: "terror", ano: 2009, avaliacao: 10}

const filme = {filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10}

const avaliacoes = [filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao, filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao]
let maior = avaliacoes[0]
for(let i = 1; i < avaliacoes.length; i++){
    if(avaliacoes[i] > maior){
        maior = avaliacoes[i]
    }
}
let filmemaior = avaliacoes.indexOf(maior) + 1
let soma = avaliacoes.reduce((acumulador, valorAtual) => { return valorAtual + acumulador}, 0) 
let media = soma / avaliacoes.length
console.log(`
    === Catalogo de filmes ===
    1. ${filme1.titulo} - ${filme1.genero}
    2. ${filme2.titulo} - ${filme2.genero}
    3. ${filme3.titulo} - ${filme3.genero}
    4. ${filme4.titulo} - ${filme4.genero}
    5. ${filme5.titulo} - ${filme5.genero}
    6. ${filme6.titulo} - ${filme6.genero}
    7. ${filme7.titulo} - ${filme7.genero}
    8. ${filme8.titulo} - ${filme8.genero}
    9. ${filme9.titulo} - ${filme9.genero}
    10. ${filme10.titulo} - ${filme10.genero}

    Filme mais bem avaliado:
    ${filme[`filme${filmemaior}`].titulo} (${maior})

    media geral das avaliaçoes:${media}
    `)
// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }