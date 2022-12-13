"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = __importDefault(require("express"));
/*
    *Паттерн "Singleton"
    Для всего приложения у нас будет только один экземпляр раута.
    У данного класса доступен статический метод getInstance().
    Который при вызове будет проверять, есть ли уже созданный
    экземпляр, если да - вернёт его, если нет - создаст новый
    и (единственный) и вернёт его.
*/
class AppRouter {
    static getInstance() {
        if (!AppRouter.instance) {
            AppRouter.instance = express_1.default.Router();
        }
        return AppRouter.instance;
    }
}
exports.AppRouter = AppRouter;
