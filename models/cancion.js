const mongoose = require('mongoose')

const Cancion = mongoose.model('Cancion', {

    titulo: {
        type: String,
        required: true,
        trim: true,
        lowercase:true
    },
    artista: {
        type: String,
        required: true,
        trim: true,
        lowercase:true
    },
    fecha: {
        type: Number,
        required: true,
        trim: true
    }
})

module.exports = Cancion


