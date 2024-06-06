const assert = require('assert');
const holaMundo = require('./hola');

describe('Hola Mundo', function() {
    it('debería imprimir "¡Hola Mundo!"', function() {
        assert.strictEqual(holaMundo(), "¡Hola Mundo!");
    });
});
