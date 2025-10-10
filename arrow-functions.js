/*Exercici 1
Conversió de funcions:
 Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
 Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.
 */

 //const add = (a, b) => a + b;

 //console.log(add(2, 9));

/*
Exercici 2
Funció de fletxa sense paràmetres: 
Crea una funció de fletxa anomenada randomNumber que no necessiti 
paràmetres i que retorni un número aleatori entre 0 i 100.
*/

let randomNumber = () => Math.random();



//console.log(randomNumber());


/*
Exercici 3
Ús de 'this' en les funcions de fletxa: 
Crea una classe person que tingui una propietat name i una funció greet 
que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació 
que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});*/

class Person {
    constructor (name) {
        this.name = name;
        this.greet= () => `Hi! ${this.name}`;
    }
}

const user = new Person ("Toni");

console.log(user.greet());
