let valores = [4, 6, 3, 8, 9, 5]

console.log(valores)

/* for(var i = 0; i < valores.length; i++){
    console.log(`Na posição ${i} tem o valor ${valores[i]}`)
} */

for (var i in valores) {
    console.log(`Na posição ${i} tem o valor ${valores[i]}`)
}