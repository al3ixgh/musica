const express = require('express')
const router = new express.Router()
const Cancion = require('../models/cancion')

router.post('/canciones', async (req, res) => {
    const cancion = new Cancion(req.body)

    try {
        await cancion.save()
        res.status(201).send(cancion)
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
        const cancion = await Cancion.findById(_id)

        if (!cancion) {
            return res.status(404).send()
        }

        res.send(cancion)
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
        const cancion = await Cancion.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!cancion) {
            return res.status(404).send()
        }

        res.send(cancion)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/canciones/:id', async (req, res) => {
    try {
        const cancion = await Cancion.findByIdAndDelete(req.params.id)

        if (!cancion) {
            res.status(404).send()
        }

        res.send(cancion)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
