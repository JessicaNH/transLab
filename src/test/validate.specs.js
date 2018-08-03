const assert = require('chai').assert;
global.window = global;
require('../src/js/validate'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar password', ()=>{ //Describe lo que habrá dentro de cada función
    describe('Debería verificar si tiene un maximo caracteres', ()=>{
      it('Debería el password tener un maximo de 8 numeros', ()=>{ //Caso de prueba
        assert.equal(validatePassword("12345678"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
        assert.equal(validatePassword("jfgk1234"), false);
        assert.equal(validatePassword("ajskeoldfjrnvmk"), false);            
    });
        it('Debería el password tener solo numeros', ()=>{ //Caso de prueba
            assert.equal(validatePassword("12345678"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validatePassword("jfgk1234"), false);
            assert.equal(validatePassword("ajskeold"), false);            
        });
        
});
    

});
describe('Validar tarjetabip', ()=>{ //Describe lo que habrá dentro de cada función
  describe('Debería verificar si tiene un maximo caracteres', ()=>{
    it('Debería tener un total de 8 numeros', ()=>{ //Caso de prueba
      assert.equal(validatePassword("12345678"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      assert.equal(validatePassword("jfgk1234"), false);
      assert.equal(validatePassword("ajskeoldfjrnvmk"), false);
      assert.equal(validatePassword("123"), false); 
                 
  });
    it('Debería el password tener solo numeros', ()=>{ //Caso de prueba
    assert.equal(validatePassword("12345678"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
    assert.equal(validatePassword("jfgk1234"), false);
    assert.equal(validatePassword("ajskeold"), false);            
    });
      
      
});




  

});




 
