const express = require("express");
const app = express();
const helloWorldRoutes = require("./routes/helloRoute.js");

app.get("/api", helloWorldRoutes);

app.listen(8080, () => {
  console.log("port is listening ");
});
