                          // Iteraciones //

/*
1) Realiza un script que le pida al usuario una serie de números cualquiera y que solo dejaremos 
de hacerlo cuando el usuario ingrese un número igual a cero.
*/

// se utiliza prompt-sync para solicitar la entrada del usuario
const prompt = require("prompt-sync")();
// Realizar un script que solicite números al usuario, los cuente y muestre
// la cantidad de números que ingreso cuando ingrese el número 0 donde el
// script debe terminar.
// declarar una variable para almacenar el número ingresado
let numero;
// usamos un bucle do-while para solicitar números al usuario
// y contar cuántos números se han ingresado
// numero se inicializa en 0 para que el bucle se ejecute al menos una vez
// y se utiliza parseInt() para convertir el valor ingresado a un número entero
do {
  numero = parseInt(prompt("Ingrese un número (0 para terminar):"));
  // se utiliza !== para verificar si el número ingresado es diferente de 0
} while (numero !== 0);

console.log("Has ingresado 0. Fin del programa.");


/*
2)Realiza un script que pida al usuario cadenas de texto (strings) hasta que 
escriba “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas 
concatenadas con un guión -.
*/

const prompt = require("prompt-sync")();

let palabra = "";
// Se utiliza un bucle do-while para solicitar palabras al usuario
// y contar cuántas palabras se han ingresado
// palabra se inicializa como una cadena vacía para que el bucle se ejecute
// al menos una vez.
// Se utiliza trim() para eliminar espacios en blanco al inicio y al final
// de la palabra ingresada.
do {
  palabra = prompt("Ingrese una palabra (o 'cancelar' para terminar): ").trim();
  // Se utiliza !== para verificar si la palabra ingresada es diferente de "cancelar"
  // y se utiliza toLowerCase() para hacer la comparación sin importar mayúsculas o
  // minúsculas.
  if (palabra.toLowerCase !== "cancelar") {
    console.log("Has ingresado: " + palabra);
  }
  // se utiliza el bu
} while (palabra !== "cancelar");
console.log("Has escrito 'cancelar'. Fin del programa.");

/*
3)Realiza un script que muestre por pantalla los valores pares que se encuentran 
entre los números 500 y 1000.
*/

const prompt = require("prompt-sync")();
// el bucle for se utiliza para iterar sobre un rango de números
// en este caso, desde 500 hasta 1000
// y se utiliza el operador % para verificar si un número es par

for (let i = 500; i <= 1000; i++) {
  // si i es par (es decir, si el residuo de la división entre 2 es 0).
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*
4)Realiza un script que solicite un numero al usuario y muestre por pantalla  
una cuenta regresiva desde el numero ingresado hasta el valor 0.
*/

const prompt = require("prompt-sync")();
// Solicita un número al usuario
let numero = parseInt(prompt("Ingrese un número para la cuenta regresiva:"));

// Verifica que el valor ingresado sea un número válido
if (isNaN(numero) || numero < 0) {
  console.log("El valor ingresado no es un número válido.");
  // Termina el programa si el número no es válido
} else {
  for (let iteracion = numero; iteracion >= 0; iteracion--) {
    console.log(iteracion);
  }
}

/*
5)Dado un entero n, mostrar por pantalla todos los enteros de 1 hasta n, pero 
en caso de que el número sea múltiplo de 3 mostrar 'Fizz' en lugar del número, 
si es múltiplo de 5 mostrar 'Buzz' y si es múltiplo de 3 y 5 mostrar 'FizzBuzz' 
en lugar del numero.
*/

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Ingrese un número entero: "));
// Verifica que el valor ingresado sea un número válido.
// el bucle for se utiliza para iterar sobre un rango de números
// en este caso, desde 1 hasta el número ingresado por el usuario
// y se utiliza el operador % para verificar si un número es múltiplo de 3 o 5.
for (let i = 1; i <= n; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz: " + i, "Es multiplo de 3 y 5");
  } else if (i % 3 === 0) {
    console.log("Fizz: " + i, "Es multiplo de 3");
  } else if (i % 5 === 0) {
    console.log("Buzz: " + i, "Es multiplo de 5");
  } else {
    console.log(i);
  }
}

/*
6)Realiza un script que escriba los números del 1 al 500, que indique cuales 
son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
*/

const prompt = require("prompt-sync")();
// el bucle for se utiliza para iterar sobre un rango de números
// en este caso, desde 500 hasta 1000.
// y se utiliza el operador % para verificar si un número es par.
for (let i = 1; i <= 500; i++) {
  // si i es par (es decir, si el residuo de la división entre 2 es 0)
  // la misma tecnica se utiliza para verificar si un número es múltiplo de 4, 5 o 9.
  if (i % 36 === 0) {
    console.log(i, ":", "Es multiplo de 4 y 9");
  } else if (i % 4 === 0) {
    console.log(i, ":", "Es multiplo de 4");
  } else if (i % 5 === 0) {
    console.log(i, ":", "-----------------------");
  } else if (i % 9 === 0) {
    console.log(i, ":", "Es multiplo de 9");
  } else {
    console.log(i);
  }
}

/*
7)Realizar un script que solicite palabras al usuario, las cuente y muestre la cantidad 
de palabras que ingreso cuando ingrese la palabra fin donde el script debe terminar.
*/

const prompt = require("prompt-sync")();

let palabra = "";
let contador = 0;
let suma = "";
// Se utiliza un bucle while para solicitar palabras al usuario
// y contar cuántas palabras se han ingresado
// palabra se inicializa como una cadena vacía para que el bucle se ejecute
// al menos una vez.
while (palabra.toLowerCase() !== "fin") {
  // Se utiliza trim() para eliminar espacios en blanco al inicio y al final
  // de la palabra ingresada.
  palabra = prompt("Ingrese palabras (escriba 'fin' para terminar): ").trim();
  if (palabra.toLowerCase() !== "fin") {
    contador++;
    suma += palabra + " - ";
  }
}

console.log("El total de palabras ingresadas es: " + contador);
console.log("Las palabras ingresadas son: " + suma);

/*
7.1) Con Array. (Tiene un error de concepto, porque si coloco fin para terminar, fin es una palabra
tambien.
*/

const prompt = require("prompt-sync")();
// se utiliza un array para almacenar las palabras ingresadas
// y se inicializa como un array vacío
let palabras = [];
let palabra;
// Se utiliza un bucle do-while para solicitar palabras al usuario
// y contar cuántas palabras se han ingresado
// palabra se inicializa como una cadena vacía para que el bucle se ejecute
// al menos una vez.
do {
  palabra = prompt("Ingrese una palabra (escriba 'fin' para terminar):");
  // si la palabra ingresada es diferente de "fin"
  // entonces seguimos solicitando palabras.
  if (palabra.toLowerCase() !== "fin") {
    // se utiliza .push() para agregar la palabra al array
    palabras.push(palabra);
  }
} while (palabra.toLowerCase() !== "fin");
// se utiliza .length para contar la cantidad de palabras ingresadas
console.log("Cantidad de palabras ingresadas: " + palabras.length);
// se utiliza .join() para unir las palabras en una cadena
// separadas por " - "
console.log("Las palabras ingresadas son: " + palabras.join(" - "));

/*
8) Crea script para generar pirámide siguiente con los números del 1 al número 
que indique el usuario (no mayor de 50).
*/

const prompt = require("prompt-sync")();
// Solicitar un número al usuario
// y validar que sea un número entre 1 y 50
let numero = parseInt(prompt("Ingrese un número (no mayor de 50): "));
// Validar que el número esté dentro del rango permitido
// y que sea un número válido
// Se utiliza isNaN() para verificar si el valor ingresado es un número
// y se utiliza parseInt() para convertir el valor ingresado a un número entero
// y se utiliza el operador lógico OR (||) para verificar si el número es menor que 1
// o mayor que 50
while (isNaN(numero) || numero < 1 || numero > 50) {
  console.log("Número inválido. Debe ser un número entre 1 y 50.");
  numero = parseInt(prompt("Ingrese un número (no mayor de 50): "));
}

// Se utiliza un bucle for para iterar desde 1 hasta el número ingresado
// y en cada iteración se genera una fila de la pirámide.
// Se utiliza un bucle for anidado para generar los números de cada fila.
// Se utiliza una variable fila para almacenar la fila actual.
// Se utiliza el método trim() para eliminar los espacios en blanco al
// inicio y al final de la fila antes de imprimirla.
for (let i = 1; i <= numero; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += j + " ";
  }
  console.log(fila.trim());
}

                              // Listas o Arrays //
/*
9) Realiza un script que cargue una lista con palabras ingresadas por el usuario.
*/

const prompt = require("prompt-sync")();

// Se utiliza un array para almacenar las palabras ingresadas
let palabras = [];
let palabra;

// Se utiliza un bucle do-while para solicitar palabras al usuario
do {
  palabra = prompt("Ingrese una palabra (escriba 'fin' para terminar): ");
  if (palabra.toLowerCase() !== "fin") {
    palabras.push(palabra);
  }
} while (palabra.toLowerCase() !== "fin");

// Mostrar la lista palabra por palabra
console.log("Las palabras ingresadas son:");
// Se utiliza un bucle forEach para recorrer el array y mostrar cada palabra
// se utiliza una función de flecha para definir la función que se ejecutará
// para cada elemento del array.
// lo saqu developer.mozilla.org.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
// Global_Objects/Array/forEach
palabras.forEach((palabra) => console.log(palabra));

/*
10) Realiza un script que solicite números al usuario correspondientes a 
notas de alumnos y los cargue en una lista. Luego debe calcular el promedio 
de las notas mayores a 7 y el promedio total.
*/


const prompt = require("prompt-sync")();
// Se utiliza un array para almacenar las notas ingresadas
let notas = [];
let nota;
// Se utiliza un bucle do-while para solicitar notas al usuario

do {
  nota = parseFloat(prompt("Ingrese una nota (escriba -1 para terminar): "));
  // si la nota ingresada es diferente de -1
  // entonces seguimos solicitando notas.
  if (nota !== -1) {
    // se utiliza .push() para agregar la nota al array
    notas.push(nota);
  }
  // Se valida que la nota esté en el rango de 0 a 10
} while (nota !== -1);
// Se utiliza .filter() para filtrar las notas mayores a 7
// notasMayoresA7 es un nuevo array que contiene solo las notas mayores a 7
// Se utiliza una función de flecha para definir la función que se ejecutará
let notasMayoresA7 = notas.filter((nota) => nota > 7);
// Se utiliza .reduce() para calcular la suma de las notas mayores a 7
let sumaNotasMayoresA7 = notasMayoresA7.reduce(
  // acumulador + nota es una función que se ejecuta para cada elemento del array
  // acumulador es el valor acumulado hasta el momento
  // nota es el elemento actual del array
  (acumulador, nota) => acumulador + nota,
  0
);
// Se utiliza .length para contar la cantidad de notas mayores a 7
let cantidadNotasMayoresA7 = notasMayoresA7.length;
// Se utiliza .reduce() para calcular la suma de todas las notas
let sumaTotal = notas.reduce((acumulador, nota) => acumulador + nota, 0);
// Se utiliza .length para contar la cantidad de notas totales
let cantidadTotal = notas.length;
// Se calcula el promedio de las notas mayores a 7
let promedioNotasMayoresA7 =
  cantidadNotasMayoresA7 > 0 ? sumaNotasMayoresA7 / cantidadNotasMayoresA7 : 0;
// Se calcula el promedio total
let promedioTotal = cantidadTotal > 0 ? sumaTotal / cantidadTotal : 0;
// Se muestran los resultados
console.log(
  "Promedio de notas mayores a 7: " + promedioNotasMayoresA7.toFixed(2)
);
console.log("Promedio total: " + promedioTotal.toFixed(2));

/*
11)Realiza un script que invierta los datos de un arreglo.
*/

const prompt = require("prompt-sync")();
// Se utiliza un array para almacenar los datos ingresados

let datos = [];
let dato;
// Se utiliza un bucle do-while para solicitar datos al usuario
do {
  dato = prompt("Ingrese un dato (escriba 'fin' para terminar): ");
  // si el dato ingresado es diferente de "fin"
  // entonces seguimos solicitando datos.
  if (dato.toLowerCase() !== "fin") {
    // se utiliza .push() para agregar el dato al array
    datos.push(dato);
  }
} while (dato.toLowerCase() !== "fin");

// Se crea una copia del array original
let datosOriginales = [...datos];
// Se utiliza .reverse() para invertir el array
let datosInvertidos = datos.reverse();
// Se muestra el array original
console.log("Los datos originales son: " + datosOriginales.join(" - "));
// Se muestra el array invertido
console.log("Los datos invertidos son: " + datosInvertidos.join(" - "));

/*
12)Realiza un script que dado una lista de números. Solicite un otro número 
al usuario e indique si el número se encuentra en la lista.
*/

const prompt = require("prompt-sync")();
// Se utiliza un array para almacenar los números ingresados
let numeros = [];
let numero;

// Se utiliza un bucle do-while para solicitar números al usuario
do {
  numero = parseFloat(prompt("Ingrese un número (escriba -1 para terminar): "));
  // si el número ingresado es diferente de -1
  // entonces seguimos solicitando números.
  if (numero !== -1) {
    // se utiliza .push() para agregar el número al array
    numeros.push(numero);
  }
} while (numero !== -1);
// Se solicita un número al usuario para buscar en la lista
let numeroABuscar = parseFloat(prompt("Ingrese un número a buscar: "));
// Se utiliza .includes() para verificar si el número está en la lista
let encontrado = numeros.includes(numeroABuscar);
// Se muestra el resultado
if (encontrado) {
  console.log("El número " + numeroABuscar + " se encuentra en la lista.");
} else {
  console.log("El número " + numeroABuscar + " no se encuentra en la lista.");
}

/*
13)Como modificarías el ejercicio anterior para que devuelva la ubicación 
donde se encontraba el dato dentro de la lista?. En caso de no encontrarse 
indicarlo también.
*/

const prompt = require("prompt-sync")();
// Se utiliza un array para almacenar los números ingresados
let numeros = [];
let numero;
// Se utiliza un bucle do-while para solicitar números al usuario
do {
  // Se solicita un número al usuario y se convierte a número decimal
  // utilizando parseFloat para permitir números decimales
  // y parseInt para permitir números enteros.
  // Se utiliza prompt para solicitar el número al usuario
  // y se almacena en la variable numero.
  numero = parseFloat(prompt("Ingrese un número (escriba -1 para terminar): "));
  // si el número ingresado es diferente de -1
  // entonces seguimos solicitando números.
  if (numero !== -1) {
    // se utiliza .push() para agregar el número al array
    numeros.push(numero);
  }
  // Se valida que el número esté en el rango de -1 a infinito
  // (en este caso no se valida el rango, pero se podría agregar una validación
  // para asegurarse de que el número esté dentro de un rango específico)
  // Se podría agregar una validación para asegurarse de que el número
  // esté dentro de un rango específico, por ejemplo, entre 0 y 100.
  // if (numero < 0 || numero > 100) {
  //   console.log("Número fuera de rango. Intente nuevamente.");
  //   continue;
  // }
} while (numero !== -1);
// Se solicita un número al usuario para buscar en la lista
let numeroABuscar = parseFloat(prompt("Ingrese un número a buscar: "));
// Se utiliza .indexOf() para verificar si el número está en la lista
// y obtener su índice
// .indexOf() devuelve el índice del primer elemento que coincide con el valor
// buscado, o -1 si no se encuentra.
let indice = numeros.indexOf(numeroABuscar);
// Se muestra el resultado
// Si el índice es diferente de -1, significa que el número se encontró
// en la lista y se muestra su posición
if (indice !== -1) {
  console.log(
    "El número " +
      numeroABuscar +
      " se encuentra en la lista en la posición " +
      indice +
      "."
  );
} else {
  console.log("El número " + numeroABuscar + " no se encuentra en la lista.");
}

/*
14)Realiza un script que dada una lista de números devuelva el mayor y el menor 
de esa lista y donde se encuentra cada uno.
*/

const prompt = require("prompt-sync")();
// Se utiliza un array para almacenar los números ingresados
let numeros = [];
let numero;
// Se utiliza un bucle do-while para solicitar números al usuario
do {
  numero = parseFloat(prompt("Ingrese un número (escriba -1 para terminar): "));
  // si el número ingresado es diferente de -1
  // entonces seguimos solicitando números.
  if (numero !== -1) {
    // se utiliza .push() para agregar el número al array
    numeros.push(numero);
  }
} while (numero !== -1);
// Se inicializan las variables mayor y menor con el primer elemento del array
let mayor = numeros[0];
let menor = numeros[0];
// Se inicializan las variables para almacenar los índices del mayor y menor
let indiceMayor = 0;
let indiceMenor = 0;
// Se utiliza un bucle for para recorrer el array
for (let i = 1; i < numeros.length; i++) {
  // Si el número actual es mayor que el mayor encontrado hasta ahora
  // i se pone entre [] para que no se confunda con el nombre de la variable
  // y se pueda acceder al elemento del array
  if (numeros[i] > mayor) {
    mayor = numeros[i]; // Actualiza el mayor
    indiceMayor = i; // Actualiza el índice del mayor
  }
  // Si el número actual es menor que el menor encontrado hasta ahora
  if (numeros[i] < menor) {
    menor = numeros[i]; // Actualiza el menor
    indiceMenor = i; // Actualiza el índice del menor
  }
}
// Se muestra el resultado
// Se puede utilizar mayor.toFixed(2) para mostrar el número con 2 decimales

console.log(
  "El número mayor es " +
    mayor +
    " y se encuentra en la posición " +
    indiceMayor +
    "."
);
console.log(
  "El número menor es " +
    menor +
    " y se encuentra en la posición " +
    indiceMenor +
    "."
);

/*
15)Realiza un script que dada una lista de caracteres devuelva si la
 misma es un palindromo o no.
*/

const prompt = require("prompt-sync")();
// Se utiliza un array para almacenar los caracteres ingresados
let caracteres = [];
let caracter;
// Se utiliza un bucle do-while para solicitar caracteres al usuario
do {
  caracter = prompt("Ingrese un caracter (escriba 'fin' para terminar): ");
  // si el caracter ingresado es diferente de "fin"
  // entonces seguimos solicitando caracteres.
  if (caracter.toLowerCase() !== "fin") {
    // se utiliza .push() para agregar el caracter al array
    caracteres.push(caracter);
  }
} while (caracter.toLowerCase() !== "fin");
// Se crea una copia del array original
// Se utiliza el operador de propagación (...) para crear una copia
// del array original, de esta manera no se modifica el array original
// al invertirlo. Esto es útil si se desea conservar el array original
// para otras operaciones o para mostrarlo después de invertirlo.
let caracteresOriginales = [...caracteres];
// Se utiliza .reverse() para invertir el array
let caracteresInvertidos = caracteres.reverse();
// Se muestra el array original
console.log(
  "Los caracteres originales son: " + caracteresOriginales.join(" - ")
);
// Se muestra el array invertido
console.log(
  "Los caracteres invertidos son: " + caracteresInvertidos.join(" - ")
);
// Se verifica si el array original es igual al array invertido
if (
  JSON.stringify(caracteresOriginales) === JSON.stringify(caracteresInvertidos)
) {
  console.log("La lista de caracteres es un palíndromo.");
} else {
  console.log("La lista de caracteres no es un palíndromo.");
}

/*
16)Realiza un script que indique si dos listas contienen los mismos datos en 
las mismas ubicaciones, es decir si son idénticas.
*/

const prompt = require("prompt-sync")();
let numeros1 = [];
let numeros2 = [];
let numero;
do {
  numero = parseFloat(
    prompt("Ingrese numeros para la lista 1 (escriba -1 para terminar): ")
  );
  if (numero !== -1) {
    numeros1.push(numero);
  }
} while (numero !== -1);
do {
  numero = parseFloat(
    prompt("Ingrese numeros para la lista 2 (escriba -1 para terminar): ")
  );
  if (numero !== -1) {
    numeros2.push(numero);
  }
} while (numero !== -1);
let mayor = numeros1[0];
let menor = numeros1[0];
let indiceMayor = 0;
let indiceMenor = 0;
for (let i = 1; i < numeros1.length; i++) {
  if (numeros1[i] > mayor) {
    mayor = numeros1[i];
    indiceMayor = i;
  }
  if (numeros1[i] < menor) {
    menor = numeros1[i];
    indiceMenor = i;
  }
}
console.log("Los números de la primera lista son: " + numeros1.join(" - "));
console.log("Los números de la segunda lista son: " + numeros2.join(" - "));
if (JSON.stringify(numeros1) === JSON.stringify(numeros2)) {
  console.log("Las listas son idénticas.");
} else {
  console.log("Las listas no son idénticas.");
}

/*
17)Realiza un script que indique si dos listas contienen los mismos datos pero 
en ubicaciones distintas.
*/

const prompt = require("prompt-sync")();
let numeros1 = [];
let numeros2 = [];
let numero;
do {
  numero = parseFloat(
    prompt("Ingrese numeros para la lista 1 (escriba -1 para terminar): ")
  );
  if (numero !== -1) {
    // Esto es usando push pero lucas no nos deja numeros1.push(numero);
    numeros1[numeros1.length] = numero;
  }
} while (numero !== -1);
do {
  numero = parseFloat(
    prompt("Ingrese numeros para la lista 2 (escriba -1 para terminar): ")
  );
  if (numero !== -1) {
    numeros2[numeros2.length] = numero;
  }
} while (numero !== -1);
let mayor = numeros1[0];
let menor = numeros1[0];
let indiceMayor = 0;
let indiceMenor = 0;
for (let i = 1; i < numeros1.length; i++) {
  if (numeros1[i] > mayor) {
    mayor = numeros1[i];
    indiceMayor = i;
  }
  if (numeros1[i] < menor) {
    menor = numeros1[i];
    indiceMenor = i;
  }
}
console.log("Los números de la primera lista son: " + numeros1.join(" - "));
console.log("Los números de la segunda lista son: " + numeros2.join(" - "));
if (JSON.stringify(numeros1.sort()) === JSON.stringify(numeros2.sort())) {
  console.log(
    "Las listas contienen los mismos datos pero en ubicaciones distintas."
  );
} else {
  console.log("Las listas no contienen los mismos datos.");
}

