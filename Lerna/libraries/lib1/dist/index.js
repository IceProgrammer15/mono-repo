"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
var lib2_1 = require("@ali/lib2");
var calculate = function (a, b, operator) {
    if (operator === void 0) { operator = '+'; }
    var expression = lib2_1.prepare(a, b, operator);
    return eval(expression);
};
exports.calculate = calculate;
