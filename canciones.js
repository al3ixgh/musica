//crearCancion
//leerCanciones(titulo)
//editarArtista(titulo)
//borrarCancion(titulo)
//listarCanciones
//ordenarCanciones(artista o año)

const fs = require('fs')
const chalk = require('chalk')

const crearCancion =  (titulo, artista, fecha) => {

    const canciones = leerCanciones('canciones.json')

    const indice = canciones.findIndex(
         (cancion) => cancion.titulo == titulo
    )
    if (indice === -1) {
        console.log(chalk.green.inverse('cancion creada'))
        canciones.push({ titulo: titulo, artista: artista, fecha: fecha }) 
        escribirCanciones('canciones.json', canciones)
    } else {
        console.log(chalk.red.inverse('Cancion ya existente'))
    }
}

const escribirCanciones=(fichero, canciones)=>{
    const textoJSON = JSON.stringify(canciones)
    fs.writeFileSync(fichero, textoJSON)
}

const leerCanciones = (fichero)=>{
    try {
        const buffer = fs.readFileSync(fichero)
        const datosString = buffer.toString()
        return JSON.parse(datosString)
    } catch (error) {
        console.log(error)
        return []
    }
}

const editarArtista = (titulo, artistaNuevo)=> {
    const canciones=leerCanciones('canciones.json')
    const indice = canciones.findIndex( (cancion)=> cancion.titulo === titulo)
    if(indice===-1){
        console.log(chalk.red.inverse('cancion no encontrada'));
    } else{
        console.log(chalk.green.inverse('cancion editada'))
        canciones[indice].artista=artistaNuevo
        escribirCanciones('canciones.json', canciones)
    }
}

const borrarCancion = (titulo)=> {
    const canciones=leerCanciones('canciones.json')
    const indice = canciones.findIndex( (cancion)=> cancion.titulo === titulo)
    if (indice === -1) {
        console.log(chalk.red.inverse('cancion no encontrada'))
    } else {
        console.log(halk.green.inverse('cancion borrada'))
        canciones.splice(indice,1)
        escribirCanciones('canciones.json', canciones)
    }
}

const listarCanciones = () => {
    const canciones=leerCanciones('canciones.json')
    canciones.forEach(cancion => {
        console.log(cancion);
    });
   };

const ordenarCanciones = (opcion) => {
    const canciones = leerCanciones('canciones.json')
    /* opcion: titulo, cuerpo */
    if (opcion === 'artista') {
        canciones.sort( (cancionA, cancionB) => {
            debugger
            if (cancionA.artista.toLowerCase() < cancionB.artista.toLowerCase()) {
                return -1
            } else if (cancionA.artista.toLowerCase() > cancionB.artista.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        canciones.sort( (cancionA, cancionB) => {
            if (cancionA.fecha < cancionB.fecha){
                return -1
            } else if (cancionA.fecha > cancionB.fecha) {
                return 1
            } else {
                return 0
            }
        })
    }
    escribirCanciones('canciones.json', canciones)
}


module.exports = {
    crear: crearCancion,
    leer: leerCanciones,
    editar: editarArtista,
    borrar: borrarCancion,
    listar: listarCanciones,
    ordenar: ordenarCanciones
}
//crearCancion
//leerCanciones(titulo)
//editarArtista(titulo)
//borrarCancion(titulo)
//listarCanciones
//ordenarCanciones(artista o año)