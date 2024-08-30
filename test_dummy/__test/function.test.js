"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("../function");
describe("function test", () => {
    describe("addition function should work as expected", () => {
        it("should return 1", () => {
            expect((0, function_1.addition)(0, 1)).toBe(1);
        });
        it("should return 3", () => {
            expect((0, function_1.addition)(1, 2)).toBe(3);
        });
    });
    describe("subtraction function shoul work as expected", () => {
        it("should return 0", () => {
            expect((0, function_1.subtraction)(2, 2)).toBe(0);
        });
        it("should return 10", () => {
            expect((0, function_1.subtraction)(20, 10)).toBe(10);
        });
    });
});
