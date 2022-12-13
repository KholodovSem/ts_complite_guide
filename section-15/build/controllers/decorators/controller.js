"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const appRouter_1 = require("./../../appRouter");
function controller(routePrefix) {
    return function (target) {
        const router = appRouter_1.AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
