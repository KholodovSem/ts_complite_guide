import express from 'express';

/* 
    *Паттерн "Singleton"
    Для всего приложения у нас будет только один экземпляр раута.
    У данного класса доступен статический метод getInstance().
    Который при вызове будет проверять, есть ли уже созданный
    экземпляр, если да - вернёт его, если нет - создаст новый 
    и (единственный) и вернёт его.
*/
export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
