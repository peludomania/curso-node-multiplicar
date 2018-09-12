const yargsOptions =  {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        default: 10,
        alias: 'l'
    }
};

/**
 * Yargs es una libreria de npm que nos permite recibir parámetros por consola
 */
const argv = require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar',yargsOptions)
    .command('crear','Crea un fichero conn la tabla de multiplicar', yargsOptions)
    .help()
    .argv;

module.exports = {
  argv
};