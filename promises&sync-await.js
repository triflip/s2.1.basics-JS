// Exercici 1
const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

// Exercici 2

promesa.then(resultat => console.log(resultat)); 

// Exercici 3

 function saluda(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      input === "Hola" ? resolve("Salutació acceptada") : reject("Entrada incorrecta");
    }, 2000);
  });
}
// Exercici 4

async function mostraSalutacio() {
  const resultat = await promesa;
  console.log(resultat);
}
mostraSalutacio();

// Exercici 5

async function gestionaSalutacio() {
  try {
    const resultat = await saluda("Hola");
    console.log(resultat);
  } catch (error) {
    console.error("Error:", error);
  }
}
gestionaSalutacio();

// Exercici 6

const p1 = new Promise(resolve => setTimeout(() => resolve("Primer"), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Segon"), 3000));

Promise.all([p1, p2]).then(resultats => console.log(resultats));