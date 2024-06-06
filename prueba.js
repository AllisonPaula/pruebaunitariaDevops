const assert = require('assert');
const holaMundo = require('./hola');

describe('Hola mundo', function() {
    it('debería imprimir "¡Hola mundo!"', function() {
        assert.strictEqual(holaMundo(), "¡Hola mundo!");
    });
});