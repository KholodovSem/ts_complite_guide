export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

/* 
    Тут примененна техника "Type Guard".
    Если мы ожидаем разные типы в качестве аргумента.
    С помощью if-оператора и проверки на тип, мы получаем
    конкретный тип, с которым можем работать в теле оператора if.

    В противном случае, TS оставит общие методы и свойства для 
    заявленных типов.
*/

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rigthIndex: number): boolean;
  abstract swap(leftIndex: number, rigthIndex: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i += 1) {
      for (let j = 0; j < length - i - 1; j += 1) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
