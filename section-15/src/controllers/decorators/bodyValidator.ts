import 'reflect-metadata';
import { MethadataKeys } from './MethadataKeys';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MethadataKeys.validator, keys, target, key);
  };
}
