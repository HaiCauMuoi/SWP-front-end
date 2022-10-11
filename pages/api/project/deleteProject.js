const {deleteProject} = require('../controllers/project_controller')

export default async function handler(req, res) {
    deleteProject(req, res)
    console.log(deleteProject(req, res));
}