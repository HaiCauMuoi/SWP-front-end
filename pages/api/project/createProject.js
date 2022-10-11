const {createProject} = require('../controllers/project_controller')

export default async function handler(req, res) {
    createProject(req, res)
    console.log(createProject(req, res));
}