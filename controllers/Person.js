const router = require('express').Router()
const Person = require('../models/Person')

router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.json(people)
    } catch (error) {
        console.log('error retreiving people:', error)
        res.json({ message: 'error retreiving people' })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const person = await Person.findById(id)
        res.json(person)
    } catch (error) {
        console.log('error retreiving person:', error)
        res.status(404).json({ message: `error retreiving person with id ${id}` })
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await new Person(req.body).save()
        res.json(user)
    } catch (error) {
        console.log('error creating person:', error)
        res.status(500).json({ message: 'error creating person' })
    }
})

module.exports = router