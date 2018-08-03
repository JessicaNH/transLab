const assert = require('chai').assert;
global.window = global;
require('../src/js/validate'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar password', ()=>{ //Describe lo que habrá dentro de cada función
    describe('Debería verificar si tiene un maximo de 8 caracteres', ()=>{
        it('Debería el password tener solo numeros', ()=>{ //Caso de prueba
            assert.equal(validatePassword("12345678"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validatePassword("jfgk1234"), false);
            assert.equal(validatePassword("ajskeoldfjrnvmk"), false);
        });
        
});

});




 
