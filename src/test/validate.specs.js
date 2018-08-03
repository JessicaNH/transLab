const assert = require('chai').assert;
global.window = global;
require('../src/js/validate'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar password', ()=>{ //Describe lo que habrá dentro de cada función
    describe('Debería verificar si tiene un maximo caracteres', ()=>{
      it('Debería el password tener un maximo de 8 numeros', ()=>{ //Caso de prueba
        assert.equal(validatePassword(12345678), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
        assert.equal(validatePassword("jfgk1234"), false);
        assert.equal(validatePassword("ajskeoldfjrnvmk"), false);            
      });
        it('Debería el password tener solo numeros', ()=>{ //Caso de prueba
            assert.equal(validatePassword(12345678), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validatePassword("jfgk1234"), false);
            assert.equal(validatePassword("ajskeold"), false);            
        });
        
    });
    

});
describe('Validar tarjetabip', ()=>{ //Describe lo que habrá dentro de cada función
  describe('Debería verificar si tiene un maximo caracteres', ()=>{
    it('Debería tener un total de 8 numeros', ()=>{ //Caso de prueba
      assert.equal(validateBip(12345678), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      assert.equal(validateBip("jfgk1234"), false);
      assert.equal(validateBip("ajskeoldfjrnvmk"), false);
      assert.equal(validatebBip(123), false);
    });                 

    it('Debería la tarjeta tener solo numeros', ()=>{ //Caso de prueba
      assert.equal(validateBip(12345678), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      assert.equal(validateBip("jfgk1234"), false);
      assert.equal(validateBip("ajskeold"), false);            
    }); 
  });      
      
});

describe('calcular tarifa', ()=>{ 
  describe('calculate', ()=>{
    it('Debería ser una funcion', ()=>{
      assert.equal(typeof calculate, 'function'); 
                  
    });
    it('Debería retornar 40 para el saldo inicial 800 con tarifa alta 760', ()=>{ 
    assert.equal(calculate(800,760), 40);    
    });
  });      
      
});





  





 
