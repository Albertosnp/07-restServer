
const { Router } = require('express')
const { getUsers, putUsers, postUsers, deleteUsers, patchUsers } = require('../controllers/usuarios')

const router = new Router()

/** El PATH 'padre' se establece desde server.js */

router.get('/', getUsers)

router.put('/:id', putUsers)

router.post('/', postUsers)

router.delete('/', deleteUsers)

router.patch('/', patchUsers)

module.exports = router