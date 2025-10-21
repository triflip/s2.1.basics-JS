//Exercici 1

 const add = (a, b) => a + b;

 console.log(add(2, 9));

//Exercici 2 

const randomNumber = () =>  Math.floor(Math.random() * 100);

console.log(randomNumber())

//Exercici 3 

class Person {
    constructor (name) {
        this.name = name;
        this.greet= () => `Hi! ${this.name}`;
    }
}

const user = new Person ("Toni");

console.log(user.greet());

//Exercici 4:

const numbers = [1, 2, 3, 4];
 
const printNumbers = function(arr)  {
     for (let index = 0; index < arr.length; index++) {
         const showNumber = (num) => console.log(num);
          showNumber(arr[index])
        }
    };
    
 printNumbers(numbers);

 // Exercici 5


const showMessage = () => {
    setTimeout(() => {
        console.log("See u soon")
    }, 3000);
};
        console.log("Bye!")

showMessage();

