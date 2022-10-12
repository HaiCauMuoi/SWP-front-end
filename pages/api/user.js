const {
  getUser,
  getAllUser,
  createUser,
  updateUser,
} = require("./controllers/user_controller");

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      getUser(req, res);
      getAllUser(req, res);
      break;
    case "POST":
      createUser(req, res);
      break;
    case "PUT":
      updateUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
