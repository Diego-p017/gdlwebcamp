
// formas de crear variables  (let,Cons,var)

// let NombreCliente = 'Juan'; //PascalCase
// const Nombre_Cliente = 'Carlos' //Under_Score
// var nombreCliente = 'diego' //camelCase

///////////////////////////////////////////////////////


//Concantenar Variables 
// let aprendiendo = "Aprendiendo",
//     tecnologia = "JavaScript";

// console.log(`${aprendiendo} ${tecnologia}`); // nueva forma `${variable}`
// console.log(aprendiendo + ' ' + tecnologia); // forma convencional variable1 + variable2

///////////////////////////////////////////////////////


//funiones anidadas JavaScript

// let banda = 'Metallica',
//     cancion = 'Enter Sandman';

// let nombre =  banda + " " + cancion;

//     console.log(nombre.length); //funcion para contar total de caracteres 

//     nombre = nombre.concat(" ", "y es genial"); //funcion para concantenar

//     // nombre = nombre.toUpperCase(); // todas mayusculas

//     // nombre = nombre.toLowerCase(); //todas minusculas

//     //nombre = nombre.split(" ");  //seperar caracteres 

//     //nombre = nombre.replace("genial", "increible");  //reemplazar un valor

//     //nombre = nombre.includes("Enter");  //revisa que algo exista

//     //nombre = nombre.repeat(3); //repite el contenido de la variable


// console.log(nombre);

///////////////////////////////////////////////////////////


//convertir strings a numero

// let numero1 = 50,
//     numero2 = '10';

    // console.log(Number(numero2) + numero1); //pasar string a int (Number)
    // console.log(parseInt(numero2) + numero1); //pasar String a int (parseInt)
    // console.log(parseFloat(numero2) + numero1); //pasar String a numero con decimales


////////////////////////////////////////////////////////////

//Arreglos 


// let meses = ['febrero', 'marzo']; //estructura del arreglo
//     meses = new Array('febrero', 'marzo'); // segunda estructura

// meses.push('abril'); // agregar datos al final del arreglo
// meses.unshift('enero'); // agregar datod al inicio del arreglo

// meses.pop(); // eliminar el primer dato del arreglo
// meses.shift(); // eliminar el ultimo dato dell arreglo
// meses.splice(0,2) // eliminar datos entre un rango del arreglo

// meses.reverse(); // cambia el orden del arreglo al sentido contrario

// meses.sort(); // ordena el arreglo en orden alfabetio

// console.log(meses);

////////////////////////////////////////////////////////////////


//objetos

//object literal
// const persona= {
//     nombre: 'Diego',
//     Apellido: 'Puentes',
//     edad: 20,
//     hogar : {
//         ciudad: 'bogota',
//         pais: 'colombia'
//     }
// }

// console.log(persona.hogar); //mostrar datos de un objeto
// console.log(persona['hogar']['ciudad']); //segunda forma



//////////////////////////////////////////////////////////////////

// Template Strings

const nombre = 'diego puentes';
const edad = 20;
const pais = 'colombia';

console.log(`el es ${nombre}, es de ${pais} y tiene ${edad} años`);

const contenedorApp = document.querySelector('#mensaje');

let html = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Edad: ${edad}</li>
                <li>Pais: ${pais}</li>
            </ul>`;

contenedorApp.innerHTML = html;