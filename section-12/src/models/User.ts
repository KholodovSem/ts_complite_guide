import { Model } from './Model';
import { Collection } from './Collection';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attr: UserProps): User {
    return new User(
      new Attributes<UserProps>(attr),
      new Eventing(),
      new ApiSync<UserProps>('http://localhost:3000/users')
    );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection('http://localhost:3000/users', (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    this.set({ age: Math.floor(Math.random() * 100 + 1) });
  }
}
