import { substraction } from "./substraction"

describe('subtraction unit tests', () => {

    // Prueba números positivos
    it('Should subtract 18 - 9 = 9', () => {
        let result = substraction(18, 9);
        expect(result).toBe(9);
    });

    it('Should subtract 26 - 20 = 6', () => {
        let result = substraction(26, 20);
        expect(result).toBe(6);
    });

    it('Should subtract 26 - 0 = 26', () => {
        let result = substraction(26, 0);
        expect(result).toBe(26);
    });

    it('Should subtract 50 - 0 = 50', () => {
        let result = substraction(50, 0);
        expect(result).toBe(50);
    });

    // Prueba números negativos
    it('Should subtract -4 - -8 = 4', () => {
        let result = substraction(-4, -8);
        expect(result).toBe(4);
    });

    it('Should subtract -6 - -4 = -2', () => {
        let result = substraction(-6, -4);
        expect(result).toBe(-2);
    });

    it('Should subtract -5 - 0 = -5', () => {
        let result = substraction(-5, 0);
        expect(result).toBe(-5);
    });

    it('Should subtract -6 - -0 = -6', () => {
        let result = substraction(-6, -0);
        expect(result).toBe(-6);
    });

    // Prueba combinación de números positivos y negativos
    it('Should subtract 5 - -3 = 8', () => {
        let result = substraction(5, -3);
        expect(result).toBe(8);
    });

    it('Should subtract 6 - -3 = 9', () => {
        let result = substraction(6, -3);
        expect(result).toBe(9);
    });

    it('Should subtract -5 - 3 = -8', () => {
        let result = substraction(-5, 3);
        expect(result).toBe(-8);
    });

    it('Should subtract -6 - 3 = -9', () => {
        let result = substraction(-6, 3);
        expect(result).toBe(-9);
    });

    // Prueba números decimales
    it('Should subtract -5.5 - -4.5 = -1', () => {
        let result = substraction(-5.5, -4.5);
        expect(result).toBe(-1);
    });

    it('Should subtract 6.2 - 5.2 = 1', () => {
        let result = substraction(6.2, 5.2);
        expect(result).toBe(1);
    });

    it('Should subtract -5.1 - 3.1 = -8.2', () => {
        let result = substraction(-5.1, 3.1);
        expect(result).toBe(-8.2);
    });

    it('Should subtract 5.1 - -3.1 = 8.2', () => {
        let result = substraction(5.1, -3.1);
        expect(result).toBe(8.2);
    });

    // Prueba de números grandes
    it('Should subtract 2500 - 1500 = 1000', () => {
        let result = substraction(2500, 1500);
        expect(result).toBe(1000);
    });

    it('Should subtract 2000 - 1000 = 1000', () => {
        let result = substraction(2000, 1000);
        expect(result).toBe(1000);
    });

});
