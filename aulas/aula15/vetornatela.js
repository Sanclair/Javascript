let valores = [0,1,2,7,3,9,4,6]
/*
console.log(`Os valores sào ${valores}`)

for (let pos = 0; pos <= valores.length; pos++) {
    valores.sort()
    console.log(`Valor ${valores[pos]} na posição ${pos}`)
}
*/

for (let pos in valores) {
    console.log(valores[pos])
}