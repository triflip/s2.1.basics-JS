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
