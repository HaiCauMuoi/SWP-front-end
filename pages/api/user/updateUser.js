const {updateUser} = require('../controllers/user_controller');

export default async function handler(req, res) {
    updateUser(req, res)
    console.log(updateUser(req, res));
}