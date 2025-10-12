/* Exercici 1.2: Operador ternari

Nivell 1

Exercici 1
Operador ternari bàsic:
 Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar 
 si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'. */

//  function canDrive(age) {
//     let message = age >= 18 ? "Can drive" : "Can't drive";
//     console.log(message);
//  }
//canDrive(8);

const canDrive = (age) => {console.log(age >= 18 ? "Can drive" : "Can't drive")};

canDrive(44);

