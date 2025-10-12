/* Exercici 1.2: Operador ternari

Nivell 1

Exercici 1
Operador ternari bàsic:
 Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar  si 
 l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'. 

 function canDrive(age) {
    let message = age >= 18 ? "Can drive" : "Can't drive";
    console.log(message);
 }
canDrive(8);

// Arrow function version
// const canDrive = (age) => {console.log(age >= 18 ? "Can drive" : "Can't drive")};
// canDrive(44);
*/

/* Exercici 2
Ús amb operadors de comparació: 
Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. 
Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'. 

const num1 = 19;
const num2 = 19;

const smallBigNumber = 
num1 === num2 ? "Both numbers are equals" : 
num1 > num2 ? "Num1 is bigger" : "Num2 is bigger";

console.log(smallBigNumber)
*/

/* 
Nivell 2

Exercici 3
Ús enllaçat d'operadors ternaris: 
Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar
si un número és positiu, negatiu o zero.

Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres
 (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

*/
let num = -5;

const negativePositive = 
    num === 0 ? "The number is zero" : 
    num > 0 ? "The number is positive" : "The number is negative";

console.log(negativePositive);

function findMaxValue(a, b, c) {
    console.log( a > b && a > c ? "A is the maximum value" : 
        b > a && b > c ? "B is the maximum value" : "C is the maximum value");
}
findMaxValue(4, 8, 32)