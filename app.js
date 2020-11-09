const canciones = require('./canciones')
const { editar, leer, crear, borrar, listar, ordenar } = require('./canciones')



//const yargs=require('yargs')
//crear('Redneck', 'Lamb of god', 2006)
//crear('Seven hills', 'While she sleeps', 2012)
//crear('Can you feel my heart', 'Bring me the horizon', 2013)

//editar('Redneck','LambOfGod')

//ordenar('feecha')

//listar()

borrar('Seven hills')



/*yargs.command({
    command: 'add',
    describe: 'añadir cancion',
    builder: {
        option: {
            describe: 'el titulo',
            demandOption: true,
            type: 'string'
        },
        option: {
            describe: 'el cuerpo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        canciones.crearCancion(argv.titulo, argv.cuerpo, argv.fecha)
    }
})*/