import { multiplication } from "./multiplication";

describe('multiplication unit tests', () => {

    // Prueba números positivos
    it('Should multiply 18 * 9 = 162', () => {
        let result = multiplication(18, 9);
        expect(result).toBe(162);
    });

    it('Should multiply 26 * 20 = 520', () => {
        let result = multiplication(26, 20);
        expect(result).toBe(520);
    });

    it('Should multiply 26 * 0 = 0', () => {
        let result = multiplication(26, 0);
        expect(result).toBe(0);
    });

    it('Should multiply 50 * 0 = 0', () => {
        let result = multiplication(50, 0);
        expect(result).toBe(0);
    });

    // Prueba números negativos
    it('Should multiply -4 * -8 = 32', () => {
        let result = multiplication(-4, -8);
        expect(result).toBe(32);
    });

    it('Should multiply -6 * -4 = 24', () => {
        let result = multiplication(-6, -4);
        expect(result).toBe(24);
    });

    it('Should multiply -5 * 0 = 0', () => {
        let result = multiplication(-5, 0);
        expect(result).toBe(0);
    });

    it('Should multiply -6 * -0 = 0', () => {
        let result = multiplication(-6, -0);
        expect(result).toBe(0);
    });

    // Prueba combinación de números positivos y negativos
    it('Should multiply 5 * -3 = -15', () => {
        let result = multiplication(5, -3);
        expect(result).toBe(-15);
    });

    it('Should multiply 6 * -3 = -18', () => {
        let result = multiplication(6, -3);
        expect(result).toBe(-18);
    });

    it('Should multiply -5 * 3 = -15', () => {
        let result = multiplication(-5, 3);
        expect(result).toBe(-15);
    });

    it('Should multiply -6 * 3 = -18', () => {
        let result = multiplication(-6, 3);
        expect(result).toBe(-18);
    });

    // Prueba números decimales
    it('Should multiply -5.5 * -4.5 = 24.75', () => {
        let result = multiplication(-5.5, -4.5);
        expect(result).toBe(24.75);
    });

    it('Should multiply 6.2 * 5.2 = 32.24', () => {
        let result = multiplication(6.2, 5.2);
        expect(result).toBe(32.24);
    });

    it('Should multiply 5.1 * -3.1 = -15.81', () => {
        let result = multiplication(5.1, -3.1);
        expect(result).toBeCloseTo(-15.81, 2); // 2 es el número de dígitos decimales a considerar
    });
    

    it('Should multiply 5.1 * -3.1 = -15.81', () => {
        let result = multiplication(5.1, -3.1);
        expect(result).toBeCloseTo(-15.81, 10); // 10 es el número de dígitos decimales a considerar
    });
    

    // Prueba de números grandes
    it('Should multiply 2500 * 1500 = 3750000', () => {
        let result = multiplication(2500, 1500);
        expect(result).toBe(3750000);
    });

    it('Should multiply 2000 * 1000 = 2000000', () => {
        let result = multiplication(2000, 1000);
        expect(result).toBe(2000000);
    });

});
