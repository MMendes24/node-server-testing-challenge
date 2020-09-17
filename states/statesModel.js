const db = require('../data/dbConfig')

function getStates() {
    return db('states')
}

function getStatesById(id) {
    return db('states')
        .where({ id })
        .first()
}

function admitStateToUnion(newState) {
    return db('states')
    .insert(newState)
}

function reconstruction(id, changes) {
    return db('states')
    .where({ id })
    .update(changes);
}

function abolishState(id) {
    return db('states')
      .where('id', id)
      .del();
}

module.exports = {
    getStates,
    getStatesById,
    admitStateToUnion,
    reconstruction,
    abolishState,
}

