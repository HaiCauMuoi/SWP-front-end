const {updateProject} = require('../controllers/project_controller')

export default async function handler(req, res) {
    updateProject(req, res)
    console.log(updateProject(req, res));
}