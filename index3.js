const h1 = document.querySelector('h1'); // agarra el primer elemento

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const form = document.querySelector('#form');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result');
const imagen1 = document.querySelector('#idimg');
let c = 0;

//btn.addEventListener('click', btnOnClick);// llamamos al addeventListener y tenemos 2 argumento que son 
// el tipo de evento que quiero escuchar y la funcion que realizara ese evento 
// si estamos usando form para evitar la recarga y que se elimine los datos debido a esto entonces
form.addEventListener('submit',sumarInputValue);

function sumarInputValue(event) {
    event.preventDefault(); // en el html se puede poner en el button un type="button" ya no seria necesario hacer event
    let a = parseInt(input1.value);// para convertir los datos debemos usar
    let b = Number(input2.value);// o bien el parseInt / parse Float  o el Number()
    c = a + b;
    console.log(`la suma es ${c}`);
    console.log(`${a + b} `);
    presult.innerHTML = "Resultado: " + c;
  //  console.log(input1.value + input2.value);
}
// addEventListener => escucha los eventos


form.addEventListener('submit',otroeventoquefuncione);


  const imgdt = document.createElement('img');
  imgdt.setAttribute('src','./img/c1.png');
  console.log(imgdt);
  imagen1.append(imgdt);
  
form.addEventListener('mouseover',otroeventoquefuncione);

function otroeventoquefuncione(event) {
  event.preventDefault();
  let random = parseInt(Math.random() * 4);
  switch (random) {
    case 1:imgdt.setAttribute('src','./img/c1.png') ;
      break;
    case 2:imgdt.setAttribute('src','./img/c2.png')  ;
      break;
    case 3:imgdt.setAttribute('src','./img/c3.png')  ;
      break;
    case 4:imgdt.setAttribute('src','./img/c4.png')  ;
      break;
  }
}

//console.log(otroeventoquefuncione());