//* Interfaces
/* 
    Интерфейсы позволяют описать структуру объекта или класса
*/

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

//Сейчас аннотация аргумента в функции выглядит слишком громоздко. Исправить это нам поможет интерфейс.

interface Car {
  name: string;
  year: number;
  broken: boolean;
}

const honda: Car = {
  name: 'honda',
  year: 2010,
  broken: true,
};

const printVehicleModify = ({ name, year, broken }: Car) => {
  console.log(`Name: ${name}`);
  console.log(`Year: ${year}`);
  console.log(`Broken: ${broken}`);
};

//Теперь код читаеться намного лучше. Также интерфейс мы можем переиспользовать.

//* Modify interface

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const toyota: Vehicle = {
  name: 'corolla',
  year: 2010,
  broken: true,
  summary() {
    return `Name: ${this.name}, year: ${this.year}, broken? ${this.broken}`;
  },
};
