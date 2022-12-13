import 'reflect-metadata';
import { NextFunction, RequestHandler } from 'express';
import { AppRouter } from './../../appRouter';
import { Methods } from './Methods';
import { MethadataKeys } from './MethadataKeys';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req, res, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send('Invalid request');
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MethadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MethadataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MethadataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MethadataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
