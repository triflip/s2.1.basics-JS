//Exercici 1

const array1 =["car", "plane", "cycle", "ship"];
const array2 =[1, 2, 3, 4,];

const arrayMix = [];
arrayMix.push(...array1, ...array2);
console.log(arrayMix)

//Exercici 2

function suma(...nums) {
    const total = nums.reduce((acc, val) => acc + val, 0);
    return total;
}

console.log(suma(4, 6, 5, 9));

//Exercici 3

const objecte1 = {name:"Lena", age:"9", city: "Barcelona"};
const objecte2 = {...objecte1};

objecte2.age= 10;

console.log("Original:", objecte1);
console.log("Còpia modificada:", objecte2);

//Exercici 4

const colors = ["red", "blue", "green", "yellow", "purple"];

const [first, second, ...rest] = colors;

console.log("First color:", first);
console.log("Second color:", second);
console.log("Rest:", rest);


//Nivell 3

function showFruits(a, b, c) {
    console.log(a, b, c);
}
const fruits = ["orange", "watermelon", "apple"];

showFruits(...fruits);

console.log("Showing with:", fruits);


//Exercici 6

const personalInfo = { name: "Jan", city: "Barcelona" };
const professionalInfo = { job: "Football player", position: "Defender" };

const fullProfile = {...personalInfo, ...professionalInfo};

console.log("Combined profile:", fullProfile);
