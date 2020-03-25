//require
const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


// module.exports.crearArchivo = (base) => {

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let a = 1; a <= limite; a++) {

            data += `${base} * ${a} = ${base * a}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};