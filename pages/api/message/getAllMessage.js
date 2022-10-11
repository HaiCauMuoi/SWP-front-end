const {getAllMessage} = require('../controllers/message_controller')

export default async function handler(req, res) {
    getAllMessage(req, res)
    console.log(getAllMessage(req, res));
}