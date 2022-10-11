const {createUser} = require('../controllers/user_controller');

export default async function handler(req, res) {
    createUser(req, res)
    console.log(createUser(req, res));
}