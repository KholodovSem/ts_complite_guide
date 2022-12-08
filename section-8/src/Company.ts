import { faker } from '@faker-js/faker';
import { Marker } from './CustomMap';

//Ключевое слово "implement" - говорит что в данном классе, мы реализуем указанный интерфейс
export class Company implements Marker {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getContent(): string {
    return `
    <h3>Company Name: ${this.companyName}</h3>
    <h4>Catch Phrase: ${this.catchPhrase}</h4>
    `;
  }
}
