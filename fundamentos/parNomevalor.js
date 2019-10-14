// par nome/valor
const saudacao = 'Opa'// Contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
    
}


//Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 38,
    peso: 85,
        endereco: {
        logradouro: 'Deputado josé lages',
        numero: 1230
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)

