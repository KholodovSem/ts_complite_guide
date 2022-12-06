/* 
    Object types in TypeScript
*/

//* Function
let combineFn = (num1: number, num2: number) => {
  return num1 + num2;
};

//* Arrays
let array = [];
let arrayWithStrings = ['hello', "it's me"];
let arrayWithObjects = [{}, {}];

//And more, more, more

//* Classes
class Person {
  constructor(public name: string, public age: number) {}

  getInfoForPerson() {
    return `
    Person name: ${this.name},
    Person age: ${this.age}
    `;
  }
}

//* Objects
let randomObject = {
  technologies: ['HTML', 'CSS', 'JS', 'TypeScript', 'React', 'Nodejs'],
};

console.log('abra', 'ABRA');
