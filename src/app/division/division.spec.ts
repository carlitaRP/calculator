import { division } from "./division";

describe('division unit tests', () => {

    // Prueba números positivos
    it('Should divide 18 / 9 = 2', () => {
        let result = division(18, 9);
        expect(result).toBe(2);
    });

    it('Should divide 26 / 20 = 1.3', () => {
        let result = division(26, 20);
        expect(result).toBe(1.3);
    });

    it('Should throw an error for division by zero 26 / 0', () => {
        expect(() => division(26, 0)).toThrowError("Cannot divide by zero");
    });

    it('Should throw an error for division by zero 50 / 0', () => {
        expect(() => division(50, 0)).toThrowError("Cannot divide by zero");
    });

    // Prueba números negativos
    it('Should divide -4 / -8 = 0.5', () => {
        let result = division(-4, -8);
        expect(result).toBe(0.5);
    });

    it('Should divide -6 / -4 = 1.5', () => {
        let result = division(-6, -4);
        expect(result).toBe(1.5);
    });

    it('Should throw an error for division by zero -5 / 0', () => {
        expect(() => division(-5, 0)).toThrowError("Cannot divide by zero");
    });

    it('Should throw an error for division by zero -6 / -0', () => {
        expect(() => division(-6, -0)).toThrowError("Cannot divide by zero");
    });

    // Prueba combinación de números positivos y negativos
    it('Should divide 5 / -3 = -1.6666666666666667', () => {
        let result = division(5, -3);
        expect(result).toBe(-1.6666666666666667);
    });

    it('Should divide 6 / -3 = -2', () => {
        let result = division(6, -3);
        expect(result).toBe(-2);
    });

    it('Should divide -5 / 3 = -1.6666666666666667', () => {
        let result = division(-5, 3);
        expect(result).toBe(-1.6666666666666667);
    });

    it('Should divide -6 / 3 = -2', () => {
        let result = division(-6, 3);
        expect(result).toBe(-2);
    });

    // Prueba números decimales
    it('Should divide -5.5 / -4.5 = 1.2222222222222223', () => {
        let result = division(-5.5, -4.5);
        expect(result).toBe(1.2222222222222223);
    });

    it('Should divide 6.2 / 5.2 = 1.1923076923076923', () => {
        let result = division(6.2, 5.2);
        expect(result).toBe(1.1923076923076923);
    });

    it('Should divide -5.1 / 3.1 = -1.6451612903225807', () => {
        let result = division(-5.1, 3.1);
        expect(result).toBeCloseTo(-1.6451612903225807, 15); // Ajusta el número de dígitos decimales según sea necesario
    });    

    it('Should divide 5.1 / -3.1 = -1.6451612903225807', () => {
        let result = division(5.1, -3.1);
        expect(result).toBeCloseTo(-1.6451612903225807, 15); // Ajusta el número de dígitos decimales según sea necesario
    });    

    // Prueba de números grandes
    it('Should divide 2500 / 1500 = 1.6666666666666667', () => {
        let result = division(2500, 1500);
        expect(result).toBe(1.6666666666666667);
    });

    it('Should divide 2000 / 1000 = 2', () => {
        let result = division(2000, 1000);
        expect(result).toBe(2);
    });

});
