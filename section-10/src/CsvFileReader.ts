import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(private fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((str) => str.split(','))
      .map(this.mapRow);
  }

  abstract mapRow(row: string[]): T;
}
