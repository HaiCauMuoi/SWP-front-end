const express = require('express')
const router = express.Router()

const {
    getAllMessage,
    createMessage
} = require('../controllers/message_controller');

router.post('/create', createMessage)

router.get('/getMessages', getAllMessage)

