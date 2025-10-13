/* Exercici 1
forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara']; */

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(nom => console.log(nom));

/* Exercici 2
for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara']; */

for (let nom of noms) {
  console.log(nom);
}

/* Exercici 3
filter: Teniu una array de números. Utilitza filter per a crear una nova 
array que només contingui els números parells. 
let numeros = [1, 2, 3, 4, 5, 6];
*/

let numeros = [1, 2, 3, 4, 5, 6];
let parells = numeros.filter(n => n % 2 === 0);

console.log(parells); 

/* Exercici 4
for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; 
Utilitza un bucle for-in per a imprimir 
a la consola cada clau i el seu valor corresponent. */

let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };
for (let clau in obj) {
  console.log(clau, obj[clau]);
}

/* Exercici 5
for-of amb break: Teniu una array de números. 
Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, 
llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6]; */


let nums = [1, 2, 3, 4, 5, 6];
for (let num of nums) {
  if (num === 5) break;
  console.log(num);
}