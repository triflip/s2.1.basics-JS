/* Exercici 1.3: Callbacks

Nivell 1

Exercici 1
Callback bàsic: 
Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre. 
*/

function process(number, cb) {
    cb(number);
}
function callBack(n) {
    console.log(`The number is ${n}`);    
}
process(22, callBack);

/* Exercici 2
Callbacks amb operacions matemàtiques: 
Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. 
La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. 
Després, crida calculadora amb una funció que faci la suma dels dos nombres. */

function calculator(n1, n2, cb) {
    cb(n1, n2);
}
function numbers(num1, num2) {
    console.log(`The add of ${num1} and ${num2} is ${num1 + num2}`);
}
calculator(5, 9, numbers);