const valores =[7.7, 8.9, 6.3, 9.2]  // [ Representação de arrays]
console.log(valores[0], valores[3])
console.log(valores[4]) // acessar indice que não existe fica "undefined"

valores[4] = 10
console.log(valores.length) //quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //deleta o ultimo indice
delete valores[0] // deleta o indice escolhido
console.log(valores)

console.log(typeof valores)
