import { Sorter } from './Sorter.js';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const charactersArray = this.data.split('');
    const temp = charactersArray[leftIndex];

    charactersArray[leftIndex] = charactersArray[rightIndex];
    charactersArray[rightIndex] = temp;

    this.data = charactersArray.join('');
  }
}
