export class Sorter {
    sort() {
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
