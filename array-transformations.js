//Exercici 1

const nums1 = [1, 2, 3, 4];
const quadrats = nums1.map(n => n * n);

console.log(quadrats);
 
//Exercici 2

const nums2 = [1, 2, 3, 4];
const parells = nums2.filter( n => n % 2 === 0 );

console.log(parells);

//Exercici 3

const nums3 = [1, 10, 8, 11];
const superiorDeu = nums3.find( n => n > 10 );

console.log(superiorDeu);

//Exercici 4

const nums4 = [13, 7, 8, 21];
const suma = nums4.reduce((acc, val) => acc + val, 0);

console.log(suma); 

//Exercici 5

const nums5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const resultat = nums5
  .filter(n => n >= 10)
  .map(n => n * 2)
  .reduce((acc, val) => acc + val, 0);

console.log(resultat); 

//Exercici 6

const nums6 = [11, 12, 13, 14];

console.log(nums6.every(n => n > 10)); 
console.log(nums6.some(n => n > 13));  


