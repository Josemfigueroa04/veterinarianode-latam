const { registrar,leer } = require('./operaciones.js')

const operacion = process.argv[2]
const nombreAnimal = process.argv[3]
const edad = process.argv[4]
const tipoAnimal = process.argv[5]
const colorAnimal = process.argv[6]
const enfermedad = process.argv[7]


if (operacion === "registrar") {
    
    console.log("registrando usuario..", nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad)
    registrar(nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad)
}

if (operacion === "leer") {
    leer()
};
