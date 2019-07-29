'use strict';
//Fase 1
//function ten () {
//    for (let i = 0; i < 10; i ++){
//    console.log ('patata' + i);
//}
//}
//ten();

//Fase 2 
//function ten (word){
//    for (let i = 0; i < 10; i++){
//        console.log (word);
//    }
//}

//ten ('Patata');
//ten ('Aguacate');
//ten ('Pizza');

//Fase 3 
//function writeThis (word,times){
//    for (let i= 0; i < times; i ++){
//        console.log (word);
//    }
//}

//writeThis ('patata', 10);
//writeThis ('aguacate', 7);
//writeThis ('Pizza', 50);



//Fase 4
//const myRandomNumber = getRandomNumber (10);
//console.log (myRandomNumber);

//function writeThis (word, myRandomNumber){
//    for (let i = 0; i < myRandomNumber; i ++){
//        console.log (word);
//}
//}

//function getRandomNumber (max){
//        return Math.ceil(Math.random() * max);
//}

//writeThis('patata', myRandomNumber);
//writeThis('aguacate', myRandomNumber);
//writeThis('pizza', myRandomNumber);

//Fase 5

function writeThis (word, number){
    for (let i = 0; i < number; i ++){
        console.log (word, number);
        }
}

const myWordList =  [
    {
      text: 'Pencil',
      total: 6
    },
    {
      text: 'Thermo',
      total: 2
    },
    {
      text: 'TV',
      total: 8
    },
    {
      text: 'Phone',
      total: 4
    }
  ];

  //Para ello crearemos una nueva función writeMyArray que aceptará como parámetro un array, lo recorrerá y escribirá cada palabra el número de veces indicado utilizando nuestra función writeThis.

  function writeThis (word, number){
    for (let i = 0; i < number; i ++){
        console.log (word, number);
        }
}

function writeMyArray (arr){
    for (const item of arr){
        writeThis (arr[item].text,arr[item].total);
    }
}
console.log (myWordList);


myWordList[item].text, myWordList[item].total