/*
    !Type annotation + Type Inference
*/

//Type annotation - это небольшой кусочек кода, который говорит к какому типу принадлежит переменная
let number: number = 5; // (:number)
//Задать тип мы можем в ручную, либо позволить TS самому его определять
let str = 'str';

//Array annotation
const colors: string[] = ['red', 'green', 'blue'];

//Object annotation
const person: { name: string; age: number } = {
  name: 'Sem',
  age: 22,
};

//Function annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//! Там где TS может сам определить тип, позвольте ему сделать это

//* When to use annotations?

// 1) Functions that return the 'any' type

// 2) When we declare a variable on one line and initalized it later

// 3) Variable whose type cannot be infered

//* Union type

let whatIsThis: number | string;

whatIsThis = 5;
whatIsThis = 'five';
