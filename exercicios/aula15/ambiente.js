let num = [2, 4, 6, 7, 3, 5]

num[4] = 1
num.push(9)
num.push(3)
num.push(0)
let pos = num.indexOf(7)

console.log(`Nosso vetor é [${num}]`)
console.log(`O numero 7 esta na posição ${pos}`)

num.sort()
let pos2 = num.indexOf(7)

console.log(`O vetor em ordem [${num}]`)
console.log(`Seu tamanho é de ${num.length}`)
console.log(`O numero 7 agora esta na posição ${pos2}`)

