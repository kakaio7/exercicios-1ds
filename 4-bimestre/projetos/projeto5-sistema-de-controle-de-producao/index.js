// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO
const prompt = require("prompt-sync")()


let dia = 0
let producao1 = 0
let producao2 = 0
let producao3 = 0
let producao4 = 0
let producao5 = 0
let meta
let continuarProducao 
let total = 0

do{
    do{
        meta = parseInt(prompt("quantas peças devem ser produzidas nesse turno?: "))
    
    } while(typeof meta !== 'number' || meta !== meta)

    dia++
    let producao = 0
    while(producao < meta){
        producao++
        console.log(`Peça ${producao}, produzida com sucesso`)
    }
    // se a meta foi alcançada ou não
    if(producao === meta){
        console.log("Meta alcançada!")
    } else {
        console.log("meta não alcançada!")
    }
    switch(dia){
        case 1:
            producao1 = producao
            producao = 0
            break
        case 2:
            producao2 = producao
            producao = 0
            break
        case 3:
            producao3 = producao
            producao = 0
            break
        case 4:
            producao4 = producao
            producao = 0
            break
        case 5:
            producao5 = producao
            producao = 0
            break
    }
    if(dia > 1){
        console.log("Resumo dos dias anteriores:")
        for(let i = 0; i <= dia; i++){
            if(i === 1){
                console.log(`Dia 1 : ${producao1} peças produzidas`)
            } else if(i === 2){
                console.log(`Dia 2 : ${producao2} peças produzidas`)
            } else if(i === 3){
                console.log(`Dia 3 : ${producao3} peças produzidas`)
            } else if(i === 4){
                console.log(`Dia 4 : ${producao4} peças produzidas`)
            } else if(i === 5){
                console.log(`Dia 5 : ${producao5} peças produzidas`)
            } else{
                console.log("esse programa salva o ultimos 5 dias, para salvar novamente, reinicie o programa!")
            }
        }
    }
    if(dia > 1){
        total = total + producao1 + producao2 + producao3 + producao4 + producao5
        console.log(`Total geral: ${total}`)
        total = 0
    }
    
    do{
        continuarProducao = prompt("Deseja simular outro turno? S/N: ").toUpperCase()
    } while(continuarProducao === "" || continuarProducao === null)
}while(continuarProducao == "S")

console.log("Encerrando sistema de produção")