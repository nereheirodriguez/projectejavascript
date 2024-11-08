// tests/Calculadora.test.js
import Calculadora from '../src/utils/Calculadora';
import { beforeEach, describe, it, expect } from 'vitest';

describe('Tests de la calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    it('suma de 1 + 2 es 3', () => {
        expect(calculadora.suma(1, 2)).toBe(3);
    });

    it('resta de 5 - 3 es 2', () => {
        expect(calculadora.resta(5, 3)).toBe(2);
    });

    it('multiplicación de 4 * 3 es 12', () => {
        expect(calculadora.multiplica(4, 3)).toBe(12);
    });

    it('división de 10 / 2 es 5', () => {
        expect(calculadora.divideix(10, 2)).toBe(5);
    });

    it('división por cero debería lanzar un error', () => {
        expect(() => calculadora.divideix(10, 0)).toThrow('No es pot dividir per zero');
    });
});