/**
 * Yargs es una libreria de npm que nos permite recibir parámetros por consola
 */
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

// importar funciones, con la destructuración se puede hacer así
const { createFile, listTable } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {

    case 'listar':
        listTable( argv.base,argv.limit)
            .then(archivo => console.log(archivo))
            .catch((err) => console.log(err));
        break;
    case 'crear':
        createFile( argv.base,argv.limit)
            .then(archivo => console.log(colors.bgYellow(`El archivo ${ archivo } ha sido creado`.white)))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;

}

