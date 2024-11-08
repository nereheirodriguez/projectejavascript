// src/utils/Calculadora.test.js
class Calculadora {
    suma(a, b) {
        return a + b;
    }

    resta(a, b) {
        return a - b;
    }

    multiplica(a, b) {
        return a * b;
    }

    divideix(a, b) {
        if (b === 0) {
            throw new Error('No es pot dividir per zero');
        }
        return a / b;
    }
}

module.exports = Calculadora;