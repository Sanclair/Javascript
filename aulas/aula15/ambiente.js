let num = [5,8,2,9,3]
num.push(4,6,7)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log (num.length)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`Numero não encontrado!`)
} else {
    console.log(`A posição do valor é ${pos}`)
}
