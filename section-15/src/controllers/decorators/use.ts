import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MethadataKeys } from './MethadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MethadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MethadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
