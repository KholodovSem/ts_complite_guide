import { faker } from '@faker-js/faker';
import { Marker } from './CustomMap';

//Ключевое слово "implement" - говорит что в данном классе, мы реализуем указанный интерфейс
export class User implements Marker {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  getContent(): string {
    return `<h3>User Name: ${this.name}</h3>`;
  }
}
