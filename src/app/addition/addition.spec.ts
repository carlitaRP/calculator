import { addition } from "./addition";

describe('addition unit tests', () => {

    // Prueba números positivos
    it('Should add 8 + 19 = 27', () => {
        let result = addition(8, 19);
        expect(result).toBe(27);
    });

    it('Should add 26 + 26 = 52', () => {
        let result = addition(26, 26);
        expect(result).toBe(52);
    });

    it('Should add 26 + 0 = 26', () => {
        let result = addition(26, 0);
        expect(result).toBe(26);
    });

    it('Should add 50 + 0 = 50', () => {
        let result = addition(50, 0);
        expect(result).toBe(50);
    });

    // Prueba números negativos
    it('Should add -4 + -8 = -12', () => {
        let result = addition(-4, -8);
        expect(result).toBe(-12);
    });

    it('Should add -6 + -4 = -10', () => {
        let result = addition(-6, -4);
        expect(result).toBe(-10);
    });

    it('Should add -5 + 0 = -5', () => {
        let result = addition(-5, 0);
        expect(result).toBe(-5);
    });

    it('Should add -6 + -0 = -6', () => {
        let result = addition(-6, -0);
        expect(result).toBe(-6);
    });

    // Prueba combinación de números positivos y negativos
    it('Should add 5 + -3 = 2', () => {
        let result = addition(5, -3);
        expect(result).toBe(2);
    });

    it('Should add 6 + -3 = 3', () => {
        let result = addition(6, -3);
        expect(result).toBe(3);
    });

    it('Should add -5 + 3 = -2', () => {
        let result = addition(-5, 3);
        expect(result).toBe(-2);
    });

    it('Should add -6 + 3 = -3', () => {
        let result = addition(-6, 3);
        expect(result).toBe(-3);
    });

    // Prueba números decimales
    it('Should add -5.5 + -5.5 = -11', () => {
        let result = addition(-5.5, -5.5);
        expect(result).toBe(-11);
    });

    it('Should add 6.2 + 6.2 = 12.4', () => {
        let result = addition(6.2, 6.2);
        expect(result).toBe(12.4);
    });

    it('Should add -5.1 + 3.1 = -2', () => {
        let result = addition(-5.1, 3.1);
        expect(result).toBe(-2);
    });

    it('Should add 5.1 + -3.1 = 2', () => {
        let result = addition(5.1, -3.1);
        expect(result).toBe(2);
    });

    // Prueba de números grandes
    it('Should add 2500 + 2500 = 5000', () => {
        let result = addition(2500, 2500);
        expect(result).toBe(5000);
    });

    it('Should add 1000 + 1000 = 2000', () => {
        let result = addition(1000, 1000);
        expect(result).toBe(2000);
    });

});
