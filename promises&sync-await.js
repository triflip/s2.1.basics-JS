/* Exercici 1
Creació d'una Promesa: Crea una promesa que es resolgui després
 de 2 segons i que retorni la cadena de text 'Hola, món'. */

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

/* Exercici 2
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. 
Crea un .then que imprimeixi el resultat a la consola. */

promesa.then(resultat => console.log(resultat)); 