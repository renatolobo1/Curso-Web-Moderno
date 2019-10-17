function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
    else 
        console.log('Reprovado com ' + nota)
    
    
}
soBoaNoticia(7)
soBoaNoticia(6.9)

function seFOrVerdadeEuFalo(valor) {
    if(valor) {
        console.log('E verdade...' + valor)
    }
}

seFOrVerdadeEuFalo()
seFOrVerdadeEuFalo(null)
seFOrVerdadeEuFalo(undefined)
seFOrVerdadeEuFalo(NaN)
seFOrVerdadeEuFalo('')
seFOrVerdadeEuFalo(0)
seFOrVerdadeEuFalo(-1)
seFOrVerdadeEuFalo(' ')
seFOrVerdadeEuFalo('?')
seFOrVerdadeEuFalo([])
seFOrVerdadeEuFalo({})
seFOrVerdadeEuFalo([1, 2])
