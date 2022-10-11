const {createMessage} = require('../controllers/message_controller')

export default async function handler(req, res) {
    createMessage(req, res)
    console.log(createMessage(req, res));
}