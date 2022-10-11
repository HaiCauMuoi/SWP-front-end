const {getAllProject} = require('../controllers/project_controller')

export default async function handler(req, res) {
    getAllProject(req, res)
    console.log(getAllProject(req, res));
}