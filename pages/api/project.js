const {
    getProject,
    getAllProject,
    createProject,
    updateProject,
    deleteProject
  } = require('./controllers/project_controller')

  export default async function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case "GET":
        getAllProject(req, res);
        break;
      case "POST":
        createProject(req, res);
        break;
      case "PUT":
        updateProject(req, res);
        break;
      case "DELETE":
        deleteProject(req, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  }