let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 2
console.log(!!isAtivo) // !! Joga para verdadeiro e falso

console.log('Os verdadeiros.....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os Falsos......')
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar.....')
console.log(!!('' ||  null || 0 || ' '))

let nome =''
console.log(nome || 'Desconhecido')
