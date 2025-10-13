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

/* Nivell 2


Exercici 3
Ús de callbacks en funcions asíncrones: 
Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. 
La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre. */

function waitAndGeet(name, cb) {
    console.log("Waiting for two seconds..");
    setTimeout(() => {
    cb(name);
  }, 2000);
}

function person(name){
    console.log(`Hi ${name}!`);
}

waitAndGeet("Erik", person);

/* Exercici 4
Callbacks amb arrays: 
Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
La funció processarElements ha d'invocar la funció de callback per cada element de l'array. */

const elements = [1, 2, 3, 4]

function processElements(arr, cbk) {
    cbk(arr);
}

function loop(array) {
    for (let index = 0; index < array.length; index++) {
         console.log(array[index]);        
    }
}
processElements(elements, loop);

/* Nivell 3
Exercici 5
Escriu una funció processarCadena que accepti dos paràmetres: 
una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir 
la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada. */

const charString = "ljtmp";

function processarCadena(stg, cb) {
   let toUpoer = stg.toUpperCase();
    cb(toUpoer);
}

function toUpperC(result) {
    console.log(result);
}
processarCadena(charString, toUpperC);