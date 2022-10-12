const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://huuthanh:huuthanh@cluster0.duoyvfe.mongodb.net/MyDatabase";

const client = new MongoClient(uri);

// GET ALL USER
const getAllMessage = (req, res) => {
    findMany(client, res);
  };

//CREATE USER (ONLY ONE)
const createMessage = (req, res) => {
    const { id } = req.body;
    const { content } = req.body;
    const { time } = req.body;


  const newMessage = client.db("MyDatabase").collection("User").insertOne({
    id: id,
    content: content,
    time: time
  });

  res.status(201).json(newMessage);
};


async function findMany(client, res) {
    const result = await client.db("MyDatabase").collection("Chat").find().toArray()
  
    if (result) {
      // res.status(201).render("targeted page", result);
      res.status(201).json(result.content);
      console.log("success");
    } else {
      console.log(`${nameOfList} not found`);
    }
  }


module.exports = {
  getAllMessage,
  createMessage
};
