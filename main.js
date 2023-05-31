/*This is a comment*/
console.log('Hello World');
console.log(40+40);
console.log('Hola la temp de hoy es: ',8,' C°')

/*Constante*/
const letrasContainer = 
            document.getElementById('letras-container');
const opcionesContainer = 
            document.getElementById('opciones-container');
const seccionIngresarUsuario = 
            document.getElementById('seccion-ingresar-usuario');
const nuevoJuegoContainer =
            document.getElementsByClassName('nuevo-juego-popu');
const nuevoJuegoButton = 
            document.getElementById('nuevo-juego-button');

const canvas = 
            document.getElementById('canvas');

const resultadoTexto = 
            document.getElementById('resultado-texto');


/*ARRAYS SON OBJETOS SIMILARES A UNA LISTA , SON VARIABLES con (LET) */

let opciones ={
    frutas:[
        "Manzana",
        "Banana",
        "Tomate",
        "Kiwi",
        "Naranja",
        "Pera",
        "Frutilla",
        "Sandia",
        "Pomelo",
        "Mandarina",
        "Limon",
        "Uva",
    ],
    animales:[
        "Perro",
        "Gato",
        "Mono",
        "Nutria",
        "Tigre",
        "Leon",
        "Jirafa",
        "Rinoceronte",
        "Pantera",
        "Hamster",
        "Cocodrilo"
    ],
    paises:[
        "Argentina",
        "Brasil",
        "Francia",
        "Dinamarca",
        "Holanda",
        "Estados Unidos",
        "España",
        "Alemania",
        "Honduras",
        "Chile",
        "Irlanda",  
    ],

    
}