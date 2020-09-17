const express = require('express');

const States = require('./statesModel')
const router = express.Router();

router.get('/', (req, res) => {
    States.getStates()
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ error: 'Internal Server Error.'})
    })
})

router.get('/:id', (req, res) => {

    States.getStatesById(req.params.id)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ error: 'Internal Server Error.'})
    })
})

router.post('/', (req, res) => {
    States.admitStateToUnion(req.body)
    .then(thenRes => {
        res.status(201).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ error: 'Internal Server Error.'})
    })
})

router.put('/:id', (req, res) => {
    States.reconstruction(req.params.id, req.body)
    .then(thenRes => {
        res.status(200).json(thenRes)
    })
    .catch(err => {
        res.status(500).json({ error: 'Internal Server Error.'})
    })
})

router.delete('/:id', (req, res) => {
    States.abolishState(req.params.id)
    .then(thenRes => {
        res.status(200).json({ message: "State has been abolished. Ohio is next!"})
    })
    .catch(err => {
        res.status(500).json({ error: 'The people voted wrong like they always do!'})
    })
})

module.exports = router