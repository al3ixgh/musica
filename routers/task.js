const express = require('express')
const router = new express.Router()
const Cancion = require('../models/Cancion')

router.post('/canciones', async (req, res) => {
    const Cancion = new Cancion(req.body)

    try {
        await Cancion.save()
        res.status(201).send(Cancion)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/canciones', async (req, res) => {
    try {
        const canciones = await Cancion.find({})
        res.send(canciones)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/canciones/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const Cancion = await Cancion.findById(_id)

        if (!Cancion) {
            return res.status(404).send()
        }

        res.send(Cancion)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/canciones/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const Cancion = await Cancion.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!Cancion) {
            return res.status(404).send()
        }

        res.send(Cancion)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/canciones/:id', async (req, res) => {
    try {
        const Cancion = await Cancion.findByIdAndDelete(req.params.id)

        if (!Cancion) {
            res.status(404).send()
        }

        res.send(Cancion)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router