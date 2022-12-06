//* Arrays
//Single type in arrays
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

//In examples above, TS identify types automaticly. It's fine.
//! Only in one case, we use type annotation independetly
//! When we initialize empty array
const arrayOfString: string[] = [];

//Multiple types in arrays
const numbersOrStringArray: (string | number)[] = [1, 'one'];

//Tuples
//Упорядоченный массив с ограниченой длинной, чаще всего защищен от изменений
//TODO: Representing the "drink"
const tuple: [string, boolean, number] = ['brown', true, 40]; //Coca-cola
