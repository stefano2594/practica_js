
// un algoritmo de equilibrar mis ahorros vs deudas
let ahorros = 4100;

let deudas = [{
    deuda: "celular",
    valor: 75
},
{
    deuda: "internet",
    valor: 180
},
{
    deuda: "luz",
    valor: 200
}
];

let mideuda = deudas.map((deuda) => {
    return deuda.valor;
});
//
let key=0;
let sipagotodo = () => {
    let deudatotal = 0;
   // let mequeda = 0;
    for (key in mideuda) {// de map a for clasico no funciona pero de map a for con elemento in miarregloconmap si funciona
        deudatotal+=mideuda[key];
    }
    return ahorros-deudatotal;
};
console.log(sipagotodo());
// mideuda();
const YourSaving = (ahorros) => {
    console.log( `tus ahorros son de ${ahorros} soles`);
}
console.log(sipagotodo());


//
let nombres = 'Stefano Vincenzo';
let apellidos = 'Clausen Portocarrero';

function minombre(nombres, apellidos) { // si quito los parametros no me funcionara lo que inicialice las variables arriba
    return ` tu nombre es ${nombres} ${apellidos}`;
}

console.log(minombre('Stefano','Clausen')); // pero podria usar argumento en la funcion para restablecer o poner los datos

// suscripcion con puro if y else

let suscripcion = 'basic'

//

let respuesta;

while (respuesta != 4) {
    let pregunta = prompt('¿Cuanto es 2 + 2');
    respuesta = pregunta;
}

// cuando es mejor usar objetos o arrays?
// arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas
//( la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importanters para el algoritmo

// podemos hacer utilizar un array con parametros y argumentos ejem

function arraparametrosconargumentos(arr) {
   // console.log(arr[0]); 1 elemento
    for (let i = 0; i < arr.length; i++){ // ahora el total dde los arreglos
        console.log(arr[i]);
    }
}

arraparametrosconargumentos(['Juanita', 'Paola', 'Maria']);


// convertir un objeto a traves de una funcion en un arreglo
// para eso se utiliza Object.values
const objeto = {
    nombre: 'Player1',
    vida:500,
    mana:150,
    habilidad: ' Destructor resistente',
    
}

const arrobj = Object.entries(objeto); // convertir obj a un arreglo
console.log(arrobj);
const arreglo = Object.values(objeto); // convertir obj a un arreglo



function arrayparaconvertirobjetoaarray(arreglo) {
    for (let i = 0; i < arreglo.length; i++){ // ejecutar el arreglo de objeto
        console.log(arreglo[i]);
    }
}

arrayparaconvertirobjetoaarray(arreglo);

// sobre if
// poner return para parar la ejecucion y usar el console.warn que reemplaza al else

const tiposuscripcionplatzi = {
    free: ' Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomarr casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
};

function conseguirtipodesuscripcion(suscripcion) {
    if (tiposuscripcionplatzi[suscripcion]) {
        console.log(tiposuscripcionplatzi[suscripcion]);
        return
    }
    console.warn('Ese tipo de suscripcion no existe');
}

conseguirtipodesuscripcion('Free');