const express = require('express');
const user_route = require('./api/routes/user_route');
const app = express()

app.use('/getAllUser', user_route)

app.listen(3000, () => {
    console.log("Server is listening on port 5000...");
  });