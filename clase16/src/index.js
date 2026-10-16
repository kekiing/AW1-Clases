// metodos de arreglos -- ForEach y Map

const numeros = [2,8,4,6,12]

//metodo for heach = recorre el arreglo. Mas comodo que recorrer nosotros con un for
numeros.forEach((numero)=> {
    console.log(numero)
}) 

const numerosConIncremento = []

numeros.forEach((numero, indice) => {
    //const incremento = numero + 1
    //numerosConIncremento.push(incremento)
    //numeros[indice] = numero + 1
});

console.log(numerosConIncremento)


//.map --> devuelve un arreglo nuevo. Los elementos dependen de lo que retorne dentro d
// del callback
const numeroConIncremento = numeros.map((numero) => {
    return numero 
})

console.log(numeroConIncremento)
