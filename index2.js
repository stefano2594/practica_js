const h1 = document.querySelector('h1'); // agarra el primer elemento
const p = document.querySelectorAll('p');// agarra todos los elementos que sean similar a lo escrito entre los ' '
const parrafito=document.querySelector('.parrafito');// o getElementByClassName
const pid = document.querySelector('#pid');// o getElementById
const input = document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = 'BIENVENIDO A <br> ESTA APLICACION WEB';// pega codigo html incluyendo todas sus etiquetas
h1.innerText = "BIENVENIDO COMPAÑEROS"// pega codigo html pero como texto da mas seguridad

//console.log(h1.getAttribute('class'));// obtener el contenido o descripcion de la propiedad
//h1.setAttribute('class', 'rojo');// cambia el valor de la propiedad en este caso de class propiedad a class rojo

h1.classList.add('rojo');// agregar un nombre mas al class de verde ahora sera verde rojo
h1.classList.remove('verde');
//h1.classList.toggle('verde');//si se ejecuta agrega o quita dependiendo si tiene el mismo valor o no
//h1.classList.contains('verde');// ag

input.value = '345';

//document.createElement('img'); o br o  h1 h2 p title <section en fin para crear elementos
const img = document.createElement('img');
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

// lo insertamos con
pid.append(img);

