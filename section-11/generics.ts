/*
  *Generics
  Обобщённые типы.
*/

/* 
    Это пример использования "generic type". Вместо того, чтобы создавать несколько классов
    которые будут хранить коллекцию определённого типа и методы для работы с этой коллекцией.
    Мы создаём класс, тип коллекции, которого мы узнаем после создания экзмепляра этого класса.
    Тем самым мы избегаем дублирования кода.
*/
class ArrayOfSomething<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    let number: T | null = null;

    if (!this.collection[index]) {
      throw new Error('Value not found');
    } else {
      number = this.collection[index];
      return number;
    }
  }
}

const arrayOfNumbers = new ArrayOfSomething<number>([1, 2, 3, 4, 5]);
const arrayOfSrings = new ArrayOfSomething<string>([
  'HTML',
  'CSS',
  'JS',
  'React',
  'Node.js',
]);

//* Generics in functions
const printValue = <T>(value: T): void => {
  console.log(value);
};

//* Generics constraints
class Car {
  log(): void {
    console.log("I' m a car!");
  }
}

class House {
  log(): void {
    console.log("I' m a house!");
  }
}

interface Printable {
  log(): void;
}

const printLog = <T extends Printable>(arr: T[]) => {
  for (let entity of arr) {
    entity.log();
  }
};
