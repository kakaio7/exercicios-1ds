// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()

let continuar
let contadorDias = 0
let resumo = ""
let totalGeral = 0

do {
    let meta = parseInt(prompt("Quantas peças devem ser produzidas no turno? "))

    let producao = 0
    while (producao < meta) {
        producao++
        console.log(`Peças ${producao} produzida com sucesso!`)
    }

    console.log(`Total produzido: ${producao}`)
    if (producao === meta) {
        console.log("Meta alcançada!")
    } else {
        console.log("Meta não alcançada.")
    }

    contadorDias++
    totalGeral += producao
    resumo += `\nDia ${contadorDias}: ${producao} peças produzidas`

    continuar = prompt("Deseja simular outro turno? (S/N) ").toUpperCase()

} while (continuar === "S")

console.log("\nResumo dos dias anteriores:")
console.log(resumo)
console.log(`Total geral: ${totalGeral} peças produzidas`)
console.log("Encerrando sistema de produção...")