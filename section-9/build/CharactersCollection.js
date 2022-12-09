import { Sorter } from './Sorter.js';
export class CharactersCollection extends Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const charactersArray = this.data.split('');
        const temp = charactersArray[leftIndex];
        charactersArray[leftIndex] = charactersArray[rightIndex];
        charactersArray[rightIndex] = temp;
        this.data = charactersArray.join('');
    }
}
