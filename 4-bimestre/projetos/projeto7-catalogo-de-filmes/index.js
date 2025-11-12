// CRIE UMA LÓGICA ABAIXO
let filme1 = {titulo: "Homem aranha", genero: "ação", ano: 2009, avaliacao: 10}
let filme2 = {titulo: "Batman", genero: "suspense", ano: 2022, avaliacao: 7.5}
let filme3 = {titulo: "Olhos famintos", genero: "terror", ano: 2001, avaliacao: 9.5}
let filme4 = {titulo: "Vingadores", genero: "ação", ano: 2013, avaliacao: 8.5}
let filme5 = {titulo: "Coringa", genero: "drama", ano: 2019, avaliacao: 6}
let filme6 = {titulo: "Invocação do Mal", genero: "terror", ano: 2013, avaliacao: 6.5}
let filme7 = {titulo: "Titanic", genero: "romance", ano: 1997, avaliacao: 4.5}
let filme8 = {titulo: "Doutor Estranho no Multiverso da Loucura", genero: "fantasia", ano: 2022, avaliacao: 9}
let filme9 = {titulo: "Oppenheimer", genero: "drama", ano: 2023, avaliacao: 4}
let filme10 = {titulo: "Jurassic Word", genero: "ficção", ano: 2015, avaliacao: 5.5}

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