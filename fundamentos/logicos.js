function compras(trabalho1, trabalho2) {
    const comprarSorverte = trabalho1 || trabalho2 //  || Referente a "OU"
    const comprarTv50 = trabalho1 && trabalho2 // && Referente a "E"
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // Bitwise "XOR"
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorverte // Operador unário

    return {comprarSorverte, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))    
console.log(compras(false, true))
console.log(compras(false, false))