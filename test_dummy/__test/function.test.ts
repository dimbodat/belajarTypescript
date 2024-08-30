import { addition, subtraction } from "../function";

describe("function test", () => {
    describe("addition function should work as expected", () => {
        it("should return 1", () => {
            expect(addition(0, 1)).toBe(1);
        });

        it("should return 3", () => {
            expect(addition(1, 2)).toBe(3);
        });
    });

    describe("subtraction function shoul work as expected", () => {
        it("should return 0", () => {
            expect(subtraction(2, 2)).toBe(0);
        });

        it("should return 10", () => {
            expect(subtraction(20, 10)).toBe(10);
        });
    });
});
