const express = require("express");
const user_route = require("./api/routes/user_route");
const app = express();

//parse form data
app.use(express.urlencoded({extended: false}))

//parse json
app.use(express.json())

app.use("/getAllUser", user_route);

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
