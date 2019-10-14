// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Not a Numbrer
imprimirSoma() //Not a Numbrer
imprimirSoma(2,10,4,5) //Ignora os numero acima dos 2 primeiros

//Função com retorno

function soma(a=0, b = 1){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())
