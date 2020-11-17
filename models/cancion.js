const mongoose = require('mongoose')

const Cancion = mongoose.model('Cancion', {

    titulo: {
        type: String,
        required: true,
        trim: true
    },
    artista: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Number,
        required: true,
    }
})

module.exports = Cancion





/*  ESTO ES LO QUE HABIA EN EL EJEMPLO DE XAVI
const Cancion = mongoose.model('Cancion', {

    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})
*/