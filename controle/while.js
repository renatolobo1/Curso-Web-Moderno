function getInteiroAleatorioEntre(min, max){
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let cont = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    cont = cont+1
    //console.log('Opçao escollhida foi',opcao)
    console.log(`Opçao escolhida foi ${opcao}.`)
    
}
console.log('Até a próxima!')
console.log(cont,'Numero sorteados')