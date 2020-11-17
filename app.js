//const canciones = require('./canciones')
const { editar, leer, crear, borrar, listar, ordenar } = require('./canciones')

const yargs=require('yargs')


//crear('Redneck', 'Lamb of god', 2006)
//crear('Seven hills', 'While she sleeps', 2012)
//crear('Can you feel my heart', 'Bring me the horizon', 2013)

//editar('Redneck','LambOfGod')

//ordenar('feecha')

//listar()

//borrar('Seven hills')

yargs.command({
    command: 'add',
    describe: 'añadir cancion',
    builder: {
        titulo: {
            describe: 'el titulo',
            demandOption: true,
            type: 'string'
        },
        artista: {
            describe: 'el artista',
            demandOption: true,
            type: 'string'
        },
        fecha: {
            describe: 'la fecha',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        crear(argv.titulo, argv.artista, argv.fecha)
    }
})

yargs.parse()
