const fs = require('fs');

exports.registrar = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {
    let citas = require('./citas.json');
    citas.push({nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad});
    fs.writeFileSync('./citas.json', JSON.stringify(citas));
    console.log("registrando usuario..",nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad);
      
};

exports.leer = () => {
    let citas = require('./citas.json');
    console.log("leyendo usuarios..",citas);
};