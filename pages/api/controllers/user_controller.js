const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://huuthanh:huuthanh@cluster0.duoyvfe.mongodb.net/MyDatabase";

const client = new MongoClient(uri);

// GET ONE USER
const getUser = (req, res) => {
  const { name } = req.body;
  fineOneByName(client, name, res);
  console.log(name);
};

// GET ALL USER
const getAllUser = (req, res) => {
    findMany(client, res);
  };

//CREATE USER (ONLY ONE)
const createUser = (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { email } = req.body;
  const [{ skillset }] = req.body;
  const { uni } = req.body;
  const [{ prj }] = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, msg: "invalid input" });
  }

  const newUser = client.db("MyDatabase").collection("User").insertOne({
    id: id,
    name: name,
    email: email,
    skillser: skillset,
    uni: uni,
    prj: prj,
  });

  res.status(201).render("targeted page", newUser);
};

//UPDATE USER
const updateUser = (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { email } = req.body;
  const [{ skillset }] = req.body;
  const { uni } = req.body;
  const [{ prj }] = req.body;

  // const user = people.find((person) => person.id === Number(id));
  const user = findOneByName(client, name, res);
  if (!user) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id: ${id}` });
  }

  const newUser = client.db("MyDatabase").collection("User").updateOne({
    id: id,
    name: name,
    email: email,
    skillser: skillset,
    uni: uni,
    prj: prj,
  });

  res.status(200).render("targeted page", newUser);
};

//FUNCTIONS
async function findOneByName(client, nameOfList, res) {
  const result = await client.db("MyDatabase").collection("User").findOne({
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
    const result = await client.db("MyDatabase").collection("User").find().toArray()
  
    if (result) {
      // res.status(201).render("targeted page", result);
      res.status(201).send(result);
      console.log("success");
    } else {
      console.log(`${nameOfList} not found`);
    }
  }


module.exports = {
  getUser,
  getAllUser,
  createUser,
  updateUser
};
