let valor //Não inicializada
console.log(valor)
//console.log(valor2)  // ReferenceError: valor2 is not defined

valor = null // Ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //Sem preço
console.log(!!produto.preco)
console.log(produto)