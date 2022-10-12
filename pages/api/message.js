const {
    getAllMessage,
    createMessage
  } = require('./controllers/message_controller')

  export default async function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case "GET":
        getAllMessage(req, res);
        break;
      case "POST":
        createMessage(req, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  }