const express = require('express')
const db = require('../../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            res.status(500).json({message: 'error'})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    db('cars').where({ id }).first()
        .then(car => {
            res.json(car)
        })
        .catch(err => {
            res.status(500).json({message: 'error'})
        })
})

router.post('/', (req, res) => {
    const carData = req.body
    db('cars').insert(carData)
        .then(ids => {
            return db('cars').where({ id: ids[0] })
        })
        .then(newCar => {
            res.status(201).json(newCar)
        })
        .catch(err => {
            res.status(500).json({message: 'error adding a car'})
        })
})

module.exports = router