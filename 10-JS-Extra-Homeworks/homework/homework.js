// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
//var res = Object.entries(objeto);
//return res;
var array = [];
for (clave in objecto){
  array = push([clave, objecto[clave]]);
}
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var miCadena = string;
var caracter = miCadena.length;
let cadena = [];
let final = [];
let resultado = [];
var letra = 0;
var cuenta = 0;

for (var i = 0; i < caracter; i++){
  letra = miCadena.charAt(i);
  unica.push(letra);

  posicion = miCadena.indexOf(letra);
    while ( posicion != -1 ) {
        cuenta++;
        posicion = miCadena.indexOf(letra,posicion+1);
    }

  cadena = (letra + ':' + cuenta);
  final.push(cadena);
  cuenta = 0;
  }
  console.log(final);
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
let masyuscula = [];
let minuscula = [];
let min = [];
let final = [];
for(var index = 0; index < s.length; index++)
{
  var letraActual = s.charAt(index);
    if (letraActual === letraActual.toUpperCase()){ 
      mayuscula = letraActual;
      final.push(mayuscula);}

    if (letraActual === letraActual.toLowerCase()){
      minuscula = letraActual;
      min.push(minuscula);}          
}

final = final.concat(min);
return final.join("");
}




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var palabras = [];
var canPalabras = 0;
var canLetras = 0; 
var letras = 0;
var nueva = [];


palabras = str.split(' ');
canPalabras = palabras.length;
palabras.reverse();

for (var p = 0; p < canPalabras; p++){
  canLetras = palabras[p].length;
  for (var i = 0; i < canLetras; i++){
    letras = palabras[p];
    nueva.unshift(letras[i]);
    }
  nueva.unshift('  ');
  }
  nueva.shift();
  return (nueva.join (' '));
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = '' + numero + '';
  largo = numero.length;

    if ( numero[0] === numero[largo - 1]){
      return 'Es capicua';}
    else{return 'No es capicua';}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

let words = arr;

words.sort((a,b) =>{
   return a.length - b.length;
});
return words;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

var nuevo = [];
nuevo = arreglo1.concat(arreglo2);

var obj = {};
var dup = [];

 for(var i = 0; i < nuevo.length; i++){
  if(!obj[nuevo[i]]){
    obj[nuevo[i]] = 1;
  }else{
    dup.push(nuevo[i]);
  }
   }
return dup;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

