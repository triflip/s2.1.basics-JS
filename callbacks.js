//Exercici 1

function process(number, cb) {
    cb(number);
}
function callBack(n) {
    console.log(`The number is ${n}`);    
}
process(22, callBack);

// Exercici 2

function calculator(n1, n2, cb) {
    cb(n1, n2);
}
function numbers(num1, num2) {
    console.log(`The add of ${num1} and ${num2} is ${num1 + num2}`);
}
calculator(5, 9, numbers);

//Exercici 3

function waitAndGeet(name, cb) {
    console.log("Waiting Erick for two seconds..");
    setTimeout(() => {
    cb(name);
  }, 2000);
}

function person(name){
    console.log(`Hi ${name}!`);
}

waitAndGeet("Erik", person);

// Exercici 4


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

//Exercici 5

const charString = "ljtmp";

function processarCadena(stg, cb) {
   let toUpoer = stg.toUpperCase();
    cb(toUpoer);
}

function toUpperC(result) {
    console.log(result);
}
processarCadena(charString, toUpperC);