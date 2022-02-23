/** Importaciones */
const {it, describe}=require('./../node_modules/mocha/mocha.js');
const {expect}=require('./../node_modules/chai/chai.js').expect;

let archivoValidacion= require("./prueba.js");
describe('Prueba de generacion de Barco', function () { 
    it("Debe de generar un barco", function () { //explicamos el resultado con el it
        const result= new archivoValidacion.Barco(4,8,2,"derecha"); //guardamos el archivo en una constante
        expect(result).to.be.equal(true); //la expectativa
    }) 
})