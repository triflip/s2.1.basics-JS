/*
Nivell 1

Exercici 1
Map: Teniu un array de números [1, 2, 3, 4]. 
Crea una nova array que contingui el quadrat de cada número.
*/

const nums1 = [1, 2, 3, 4];
const quadrats = nums1.map(n => n * n);

console.log(quadrats);
 
/*
Exercici 2
Filter: Teniu una array de números [1, 2, 3, 4]. 
Crea una nova array que només contingui els números parells.
*/

const nums2 = [1, 2, 3, 4];
const parells = nums2.filter( n => n % 2 === 0 );

console.log(parells);

/*
Exercici 3
Find: Teniu una array de números [1, 10 , 8, 11]. 
Utilitza la funció find per a trobar el primer número que és major a 10.
*/

const nums3 = [1, 10, 8, 11];
const superiorDeu = nums3.find( n => n > 10 );

console.log(superiorDeu);

/*
Exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. 
Fes servir la funció reduce per a calcular la suma total dels números.
*/

const nums4 = [13, 7, 8, 21];
const suma = nums4.reduce((acc, val) => acc + val, 0);

console.log(suma); 

/*
Nivell 2
*/
/*
Exercici 5
Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

- Filtra els nombres majors o iguals a 10.

- Multiplica cada nombre filtrat per 2.

- Calcula la suma dels nombres filtrats i multiplicats per 2.

- La funció ha de retornar el resultat de la suma.
*/
/*
Nivell 3
Exercici 6
Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament
*/