const nome = "Renato"
const concatenacao = 'Olá' + ' ! '
const template = `
    Olá
    ${nome} !`

console.log(concatenacao, template)

// expressões...

console.log(`1 + 1 = ${1 + 1}`)

const up = texto =>  texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)