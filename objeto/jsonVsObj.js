//JSON e um formato textual onde so tem dados, não tem funções não e executado

const obj = { a: 1, b: 2, c: 3, soma() {return a+b+c}}
console.log(JSON.stringify(obj)) //transformando obj em JSON

//console.log(JSON.parse("{ a:1, b:2 , c:3}"))
//Console.log(JSON.parse("{ 'a':1, 'b':2 , 'c':3}"))
console.log(JSON.parse('{ "a":1, "b":2 , "c":3}'))
console.log(JSON.parse('{ "a":1.7, "b":"Renato" , "c":true, "d": {}, "e": [] }'))