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

function suma(...nums) {
    const total = nums.reduce((acc, val) => acc + val, 0);
    return total;
}

console.log(suma(4, 6, 5, 9));
/* 
Nivell 2

Exercici 3
Copiant objectes amb Spread: 
Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' 
utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
*/

const objecte1 = {name:"Lena", age:"20", city: "Barcelona"};
const objecte2 = {...objecte1};

objecte2.age= 21;

console.log("Original:", objecte1);
console.log("Còpia modificada:", objecte2);

/* 
Exercici 4
Rest en Destructuring: 
Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar 
els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
*/

const colors = ["red", "blue", "green", "yellow", "purple"];

const [first, second, ...rest] = colors;

console.log("First color:", first);
console.log("Second color:", second);
console.log("Rest:", rest);


/*
Nivell 3
Exercici 5
Spread en Funcions: 
Crea una funció que accepti tres arguments. Després, crea una array amb tres elements 
i crida la funció utilitzant l'operador spread amb aquesta array.
*/

function showFruits(a, b, c) {
    console.log(a, b, c);
}
const fruits = ["orange", "watermelon", "apple"];

showFruits(...fruits);

console.log("Showing with:", fruits);


/*
Exercici 6
Fusionant Objectes amb Spread: 
Crea dos objectes amb propietats diferents. 
Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.
*/

const personalInfo = { name: "Jan", city: "Barcelona" };
const professionalInfo = { job: "Football player", position: "Pivot" };

const fullProfile = {...personalInfo, ...professionalInfo};

console.log("Combined profile:", fullProfile);
