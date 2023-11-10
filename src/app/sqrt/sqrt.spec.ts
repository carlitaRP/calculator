import { sqrt } from "./sqrt";

describe('sqrt unit tests', () => {

    // Prueba números positivos
    it('Should calculate square root of 9 = 3', () => {
        let result = sqrt(9);
        expect(result).toBe(3);
    });

    it('Should calculate square root of 20 = 4.47213595499958', () => {
        let result = sqrt(20);
        expect(result).toBeCloseTo(4.47213595499958, 10);
    });

    it('Should calculate square root of 0 = 0', () => {
        let result = sqrt(0);
        expect(result).toBe(0);
    });

    // Prueba números negativos
    it('Should throw an error for square root of -4', () => {
        expect(() => sqrt(-4)).toThrowError("Cannot calculate square root of a negative number");
    });    

    it('Should throw an error for square root of -6', () => {
        expect(() => sqrt(-6)).toThrowError("Cannot calculate square root of a negative number");
    });    

    it('Should throw an error for square root of -5', () => {
        expect(() => sqrt(-5)).toThrowError("Cannot calculate square root of a negative number");
    });

    // Prueba números decimales
    it('Should calculate square root of 25.5 = 5.049752469181039', () => {
        let result = sqrt(25.5);
        expect(result).toBeCloseTo(5.049752469181039, 10);
    });

    it('Should calculate square root of 40.5 = 6.363961030678928', () => {
        let result = sqrt(40.5);
        let roundedExpected = 6.363961030678928; // Ajusta según la precisión necesaria
        expect(result).toBeCloseTo(roundedExpected, 17); // Ajusta el número de dígitos decimales según sea necesario
    });    
    
    it('Should calculate square root of 9.1 = 3.016620625799671', () => {
        let result = sqrt(9.1);
        expect(result).toBeCloseTo(3.016620625799671, 10);
    });

    // Prueba de números grandes
    it('Should calculate square root of 2500 = 50', () => {
        let result = sqrt(2500);
        expect(result).toBe(50);
    });

    it('Should calculate square root of 10000 = 100', () => {
        let result = sqrt(10000);
        expect(result).toBe(100);
    });

});
