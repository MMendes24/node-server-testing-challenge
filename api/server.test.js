const supertest = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

describe('server', () => {
    describe('POST /api/states', () => {
        it('should admit a new state to the Union when Congress requests it', () => {
            return supertest(server)
                .post('/api/states')
                .send({
                    name: 'Canada',
                    population: 36000000,
                    capital: 'Ottawa'
                })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
        it('should return 400 when passed bad data', () => {
            return supertest(server)
                .post('/api/states')
                .send({
                    population: 623989,
                    capital: 'Montpellier'
                })
                .then(res => {
                    expect(res.status).toBe(400)
                })

        })
    })
    describe('DELETE /api/states/:id', () => {
        it('should successfully nuke Canada', async () => {
            const doomedState = await db('states').first()
            console.log('meet thy doom!', doomedState)

            return supertest(server)
                .delete(`/api/states/${doomedState.id}`)
                .then(res => {
                    expect(res.status).toBe(200)
            })
        })
        it('should never find Canada because Canada is not a state', async () => {
            const states = await db('states')
            expect(states).toHaveLength(1)         
        })
    })
})