// Temas: bucles, arreglos, y objetos

// for

/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

// ----- Arreglos. En js no hay vectores, hay arreglos.
// los arreglos son NO PRIMITIVOS
const numeros = [1, 2, 3, 4, 5, 6, true, "hola"];
console.log("largo del arreglo: " + numeros.length);

// aca pueden haber arreglos dentro de arreglos
const arreglo2 = [
    1, 2, 3, 
    [4, 5, 6],
     7
    ];
console.log("elemento posicion 1 del arreglo interno: " + arreglo2[3][1]); //posicion del primer arreglo y despues la del arreglo interno

console.log("Iterar el arreglo")
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// ---- Objetos. Tambien son NO primitivos
// organizada por "clave/propiedad - valor"

const persona = { //si despues del = viene un corchete, te das cuenta que es un objeto
    nombre: "Juan", //tambien cambia el = por :
    edad: 20,
    estudia: true,
    redes: [
        "instagram", 
        "tiktok"
    ],
    otros: {
        mascotas: 2
    }
}

//Imprimir una propiedad del objeto
//TIP: ir del mas grande al mas chico del objeto.
console.log("Nombre: " + persona.nombre);

//persona --> arreglo redes
console.log("red principal: " + persona.redes[0]);
//persona --> objeto otros 
console.log("cantidad de mascotas: " + persona.otros.mascotas);


// ---En objetos si puedo redefinir el valor de una propiedad
/* persona.nombre = "Pedro"; */
// ---Pero no puedo redefinir el objeto 
/* persona = {} */

// realizar actividad 10