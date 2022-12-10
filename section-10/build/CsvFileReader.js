import fs from 'fs';
export class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map((str) => str.split(','))
            .map(this.mapRow);
    }
}
