const {getAllUser} = require('../controllers/user_controller')

export default async function handler(req, res) {
    getAllUser(req, res)
    console.log(getAllUser(req, res));
}