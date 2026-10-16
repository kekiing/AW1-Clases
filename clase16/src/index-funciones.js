// Funciones

// 2 maneras de declararlas 
// --> funciton + identificador (parametros) {bloque de codigo}
function suma(a, b) {
    return a+b
} 

const n1 = 1
const n2 = 2

const resultado = suma(n1,n2)
console.log(resultado)

//--> funciones flecha (sin identificador) o "FatArrow"
//--> [const/let] + [identificador/nombre] = (parametros) => {bloque}
const resta = (a,b) => {
    return a-b
}

const resultado2 = resta(n2, n1)
console.log(resultado2)

//resumir sin tener que poner un return.
const multiplicar = (a,b) => a*b  //todo lo que esta despues ya tiene un return implicito
console.log(multiplicar(10,10))

// Callbacks
//--funcion que se pasa a otra funcion como argumento para ser ejecutada despues

const b = (cb) => {
    cb() //ejecuto la funcion callback
}

//funcion callback para pasar como argumento 
const cb = ()=> {
    console.log("Se ejecuto el callback")
}

b(cb) //ejecuta. En este caso a cb() no se debe poner con los "()".
      //EZ mode: la funcion de adentro no lleva los ()
