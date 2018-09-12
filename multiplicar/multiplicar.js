/*
 requires
*/
// fs es la extensión file system para editar archivos
const fs = require('fs');
const colors = require('colors');

let calculate = (base, limit) => {
    if (!Number(base)) {
        reject (`El parámetro introducido ${ base } no es un número`);
        return;//importante el return después del reject, si no sigue ejecutando
    }

    let data = '';

    for (let i = 1; i <= limit; i++) {
        data += `${ base } * ${ i } = ${ base * i} \n`;
    }

    return data;
};


let createFile = (base, limit = 10) => {

    return new Promise((resolve, reject) => {

        let data = calculate(base, limit);

        let fileName = `tabla-${ base }.txt`;

        fs.writeFile(`files/${ fileName }`, data, (err) => {
            if (err) reject(err);
            else resolve(fileName);;
        });

    });

};

let listTable = (base, limit = 10) => {

    return new Promise((resolve, reject) => {

        console.log('=========='.gray);
        console.log('=========='.green);
        console.log('=========='.bgBlue);

        let data = calculate(base, limit);

        resolve(data);
    });
};

/**
 * module es una variable global siempre disponible
 *
 * De esta forma siempre estaría disponible la función para ser importada a otros ficheros
 *
 * otra forma de añadirla sería omitir lo de abajo y declarar la función arriba como module.exports.createFile()
 */
module.exports = {
    createFile,
    listTable
};