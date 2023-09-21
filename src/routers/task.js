const express = require('express')
const Task = require('../models/task')
const router = new express.Router()


router.post('/task', async (req, res) => {
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/task', async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/task/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const task= await Task.findById(_id)
        if (!task){
            return res.status(404).send()
        }

        res.send(task)
    }catch(e) {
        res.status(500).send()
    }
})

router.patch('/task/:id', async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['description', 'completed']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation){
            return res.status(400).send({error: 'Invlalid updates!'})
        }

        const task = await Task.findById(req.params.id)
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)

    } catch (e) {
        return res.status(400).send()
    }
})

router.delete('/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        return res.status(500).send()
    }
})

module.exports = router