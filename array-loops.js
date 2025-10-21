//Exercici 1
let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(nom => console.log(nom));

// Exercici 2
let names1 = ['Anna', 'Bernat', 'Clara']; 

for (let name of names1) {
  console.log(name);
}

// Exercici 3
let numeros = [1, 2, 3, 4, 5, 6];
let parells = numeros.filter(n => n % 2 === 0);

console.log(parells); 

// Exercici 4

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
for (let clau in obj) {
  console.log(clau, obj[clau]);
}

// Exercici 5

let nums = [1, 2, 3, 4, 5, 6];
for (let num of nums) {
  if (num === 5) break;
  console.log(num);
}

// Exercici 6

let names = ['Anna', 'Bernat', 'Clara'];
let index = 0;
for (let nom of names) {
  console.log(`Posició ${index}: ${nom}`);
  index++;
}