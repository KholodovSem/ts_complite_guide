/* 
    *Decorator
    Это функция - которую можно использовать для модификации изменения свойств или методов 
    внутри класса.
*/

@classDefenitionDecorator
class Boat {
  @propertyDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `
      Boat color is ${this.color}
    `;
  }

  @logErrorFabric('Ops, boat was sunk!')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }

  anything(@parametrDecorator speed: string): void {}
}

/* 
    Аргументы в декораторах очень важны.
    Первым идёт - target (1) : any (Это прототип объекта(класса)).
    Вторым идёт - key (2) : string (Это имя метода или акссесора).
    Третим идёт - propertyDescriptor: PropertyDescriptor (Описание свойства - объект)
*/

//! Декоратор запускаеться только один раз, когда мы определяем класс.

/* 
    Property Descriptor
    It's object with methods:

    1. Writable: true or false (Можно ли свойтсво перезаписать(изменить))
    2. Enumerable: true or false (Будет ли это свойство отображаться в цикле)
    3. Value: current value this property (Текущее значение данного свойства)
    4. Configurable: true or false (Можно ли изменить конфигурацию этого свойства)
*/

function testDecorator(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
  console.log('Property Descriptor: ', desc);
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (error) {
      console.log('Ops, boat was sunk');
    }
  };
}

/* 
    *Decorator Factory 
    Если мы хотим передавать аргументы декоратору, тогда нам будет нужно
    воспользоваться паттерном "фабрика", фабрика декораторов.

    По факту, это просто функция, которая возращает декоратор, и за 
    счёт замыкания, мы можем использовать передаваемые аргументы.
*/

function logErrorFabric(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

/*
    *Property decorator 
    Мы не можем получить доступ к свойству на прямую.
    Не нужно пробовать его изменить.
*/

function propertyDecorator(target: any, key: string) {
  console.log('Target: ', target);
  console.log('Key: ', key);

  //target[key] - undefined
  //taget.key - undefined
}

/*
    *Parametr decorator 
    Также декоратор может применяться к параметрам метода.
    В качестве третего параметра вместо "PropertyDescriptor" - выступает
    index данного параметра.
*/

function parametrDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

/*
    *Class defenition decorator 
    Декоратор может применяться к определению класса.
    Единственным аргументом будет функция - конструктор : Function.
*/

function classDefenitionDecorator(constructor: Function) {
  console.log(constructor);
}
