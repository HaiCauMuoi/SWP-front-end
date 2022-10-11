const {getProject} = require('../controllers/project_controller')

export default async function handler(req, res) {
    getProject(req, res)
    console.log(getProject(req, res));
}