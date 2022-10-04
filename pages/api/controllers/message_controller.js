const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://huuthanh:huuthanh@cluster0.duoyvfe.mongodb.net/MyDatabase";

const client = new MongoClient(uri);

// GET ONE USER
const getMessage = (req, res) => {
  const { name } = req.body;
  fineOneByName(client, name, res);
  console.log(name);
};

// GET ALL USER
const getAllMessage = (req, res) => {
    findMany(client, res);
  };

//CREATE USER (ONLY ONE)
const createMessage = (req, res) => {
    const { id } = req.body;
    const { content } = req.body;
    const { time } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, msg: "invalid input" });
  }

  const newMessage = client.db("MyDatabase").collection("User").insertOne({
    id: id,
    content: content,
    time: time
  });

  res.status(201).render("targeted page", newMessage);
};

//UPDATE USER
const updateMessage = (req, res) => {
  const { id } = req.body;
  const { content } = req.body;
  const { time } = req.body;

  // const user = people.find((person) => person.id === Number(id));
  const user = findOneByName(client, name, res);
  if (!user) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id: ${id}` });
  }

  const newMessage = client.db("MyDatabase").collection("Chat").updateOne({
    id: id,
    content: content,
    time: time
  });

  res.status(200).render("targeted page", newMessage);
};

//FUNCTIONS
async function findOneByName(client, nameOfList, res) {
  const result = await client.db("MyDatabase").collection("Chat").findOne({
    name: nameOfList,
  });

  if (result) {
    // res.status(201).render("targeted page", result);
    res.status(201).json(result);
    console.log("success");
  } else {
    console.log(`${nameOfList} not found`);
  }
}

async function findMany(client, res) {
    const result = await client.db("MyDatabase").collection("Chat").find().toArray()
  
    if (result) {
      // res.status(201).render("targeted page", result);
      res.status(201).send(result);
      console.log("success");
    } else {
      console.log(`${nameOfList} not found`);
    }
  }


module.exports = {
  getAllMessage,
  createMessage
};
