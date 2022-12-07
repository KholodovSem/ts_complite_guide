//* Classes
/* 
    Позволяют быстро создавать однотипные объекты
*/

class Vehicle {
  drive(): void {
    console.log('Chugga Chugga');
  }

  honk(): void {
    console.log('Beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

//* Basic inheritance

/* 
    С помощью ключевого слова "extends" мы можем расширить новый класс.
    При желании мы можем переопределить старые методы класса, как в примере ниже.
    Или можем дать ему новые свойства/методы.
*/
class Car extends Vehicle {
  drive(): void {
    console.log('Chugga Chugga Chugga');
  }
}

//* Class modifiers
/* 
    public - публичное свойство (значение по-умолчанию)

    private - метод или свойство будет может вызываться только другим методом внутри данного класа

    protected - метод или свойство будет может вызываться только другим методом внутри данного класа или его детей
*/

class Person {
  public name: string;
  private logName(): void {
    console.log(this.name);
  }
  protected age: number;
  public logAge(): void {
    console.log(this.age);
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const sem = new Person('Sem', 22);

//* Class fields
class Animal {
  legth: number = 4; //Default value if you need this

  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//Если в родительском классе есть поля, которые должны быть заполнены
//то в дочернем классе, в конструкторе, вызывается метод super()
class Bird extends Animal {
  constructor(name: string, public speed: number) {
    super(name);
    this.speed = speed;
  }
}
