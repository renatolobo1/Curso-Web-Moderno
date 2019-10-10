const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) //codigo do caractere
console.log(escola.indexOf('d')) // vai informar em qual indice ta

console.log(escola.substring(1)) //mostra o indice 1
console.log(escola.substring(0, 3)) //vai do indice 0 ao indice 2

console.log('escola '.concat(escola.concat("!"))) 
console.log('escola ' + escola + "?")
console.log(escola.replace(3, '*')) // substitui a primeira pela segunda

console.log('Ana,Maria,Pedro'.split(','))
