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

/* Exercici 3
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola',
 i que la rebutgi si l'input és qualsevol altra cosa. */

 function saluda(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      input === "Hola" ? resolve("Salutació acceptada") : reject("Entrada incorrecta");
    }, 2000);
  });
}
/* Exercici 4
Ús de async/await: 
Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, 
i que després imprimeixi aquest resultat a la consola. */

async function mostraSalutacio() {
  const resultat = await promesa;
  console.log(resultat);
}
mostraSalutacio();

/* Exercici 5
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol 
possible error utilitzant un bloc try/catch. */

async function gestionaSalutacio() {
  try {
    const resultat = await saluda("Hola");
    console.log(resultat);
  } catch (error) {
    console.error("Error:", error);
  }
}
gestionaSalutacio();

/* Exercici 6
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, 
i imprimeix els resultats a la consola. */

const p1 = new Promise(resolve => setTimeout(() => resolve("Primer"), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Segon"), 3000));

Promise.all([p1, p2]).then(resultats => console.log(resultats));