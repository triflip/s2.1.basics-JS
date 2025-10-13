/* Nivell 1

Exercici 1
Operador Spread en Arrays: 
Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una 
tercera array que contingui tots els elements de array1 i array2.
*/

const array1 =["car", "plane", "cycle", "ship"];
const array2 =[1, 2, 3, 4,];

const arrayMix = [];
arrayMix.push(...array1, ...array2);
console.log(arrayMix)

/* 
Exercici 2
Operador Rest en Funcions: 
Crea una funció 'suma' que utilitzi l'operador rest per a acceptar 
un nombre indeterminat d'arguments i retornar la seva suma.
*/

/* 
Nivell 2


Exercici 3
Copiant objectes amb Spread: 
Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' 
utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
*/

/* 
Exercici 4
Rest en Destructuring: 
Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar 
els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
*/

/*
Nivell 3
Exercici 5
Spread en Funcions: 
Crea una funció que accepti tres arguments. Després, crea una array amb tres elements 
i crida la funció utilitzant l'operador spread amb aquesta array.
*/

/*
Exercici 6
Fusionant Objectes amb Spread: 
Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.
*/

/*

*/