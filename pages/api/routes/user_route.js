const express = require('express')
const router = express.Router()

const {
    getUser,
    getAllUser,
    createUser,
    updateUser
} = require('../controllers/user_controller');

router.get('/api/getUser', getUser)

router.get('/api/getAllUser', getAllUser)

router.post('/api/createUser', createUser)

router.put('/api/updateUser', updateUser)

module.exports = router