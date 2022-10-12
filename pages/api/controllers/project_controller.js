const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://huuthanh:huuthanh@cluster0.duoyvfe.mongodb.net/MyDatabase";

const client = new MongoClient(uri);

// GET ONE USER
const getProject = (req, res) => {
  const { name } = req.body;
  fineOneByName(client, name, res);
  console.log(name);
};

// GET ALL USER
const getAllProject = (req, res) => {
    findMany(client, res);
  };

//CREATE USER (ONLY ONE)
const createProject = (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { location } = req.body;
  const { date } = req.body;
  const { uni } = req.body;
  const [{ skill }] = req.body;
  const [{ criteria }] = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, msg: "invalid input" });
  }

  const newProj = client.db("MyDatabase").collection("Project").insertOne({
    id: id,
    name: name,
    location: location,
    skill: skill,
    date: date,
    uni: uni,
    criteria: criteria,
  });

  res.status(201).json(newProj);
};

//UPDATE USER
const updateProject = (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { location } = req.body;
    const { date } = req.body;
    const { uni } = req.body;
    const [{ skill }] = req.body;
    const [{ criteria }] = req.body;

  // const user = people.find((person) => person.id === Number(id));
  const user = findOneByName(client, name, res);
  if (!user) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id: ${id}` });
  }

  const newProj = client.db("MyDatabase").collection("Project").updateOne({
    id: id,
    name: name,
    location: location,
    skill: skill,
    date: date,
    uni: uni,
    criteria: criteria,
  });

  res.status(200).json(newProj);
};

//DELETE
const deleteProject = (req, res) => {
    const { name } = req.body;
    const result = client.db("MyDatabase").collection("Project").deleteOne({name: name})
}

//FUNCTIONS
async function findOneByName(client, nameOfList, res) {
  const result = await client.db("MyDatabase").collection("Project").findOne({
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
    const result = await client.db("MyDatabase").collection("Project").find().toArray()
  
    if (result) {
      // res.status(201).render("targeted page", result);
      
      console.log("success");
      return res.status(201).json(result);
    } else {
      console.log(`${nameOfList} not found`);
    }
  }


module.exports = {
  getProject,
  getAllProject,
  createProject,
  updateProject,
  deleteProject
};
