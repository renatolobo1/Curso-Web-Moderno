const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5) {
        break
    }
    console.log(`Indice ${x} = ${nums[x]}`)
}

for ( y in nums){
    if (y == 5) {
        continue
    }
    console.log(`Indice ${y} = ${nums[y]}`)
}

for ( j in nums){
    if (y == 5) {
        
    }
    console.log(`Indice ${j} = ${nums[j]}`)
}

externo: for (a in nums){
    for (b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }

}