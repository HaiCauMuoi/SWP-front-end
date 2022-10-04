const express = require('express')
const router = express.Router()

const {
    getUser,
    getAllUser,
    createUser,
    updateUser
} = require('../controllers/user_controller');

router.post('/getUser', getUser)

router.get('/getAllUser', getAllUser)

router.post('/createUser', createUser)

router.put('/updateUser', updateUser)

