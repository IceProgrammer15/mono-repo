"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepare = void 0;
var prepare = function (a, b, operator) {
    if (operator === void 0) { operator = '+'; }
    return " " + a + " " + operator + " " + b;
};
exports.prepare = prepare;
