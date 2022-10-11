const {getUser} = require('../controllers/user_controller');

export default async function handler(req, res) {
    getUser(req, res)
    console.log(getUser(req, res));
}